#!/usr/bin/env node

// @ts-check
import path from 'node:path'
import { mkdirSync, readdirSync, existsSync, statSync, copyFileSync, writeFileSync, lstatSync, rmdirSync, unlinkSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import minimist from 'minimist'
import prompts from 'prompts'
import {
  blue,
  gray,
  green,
  lightBlue,
  lightGreen,
  magenta,
  red,
  yellow,
} from 'kolorist'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()

// Avoids autoconversion to number of the project name by defining that the args
// non associated with an option ( _ ) needs to be parsed as a string. See #4606
const argv = minimist(process.argv.slice(2), { string: ['_'] })

const FRAMEWORKS = [
  {
    name: 'Vue 3',
    color: lightGreen,
    variants: [
      {
        name: 'vue3-ts-simple',
        display: ' Vue3, TS, ESlint, Autoimport, VueDsfr',
        color: yellow,
      },
      {
        name: 'vue3-ts-complet',
        display: 'Vue3, TS, ESLint, Autoimport, Pinia, PWA, Vitest, Playwright, VueDsfr',
        color: magenta,
      },
    ],
  },
  {
    name: 'Nuxt 3',
    color: green,
    variants: [
      {
        name: 'nuxt3-ts-simple',
        display: 'Nuxt3, TS, ESLint, VueDsfr',
        color: lightBlue,
      },
      {
        name: 'nuxt3-ts-complet',
        display: 'Nuxt3, TS, ESLint, Vitest, Playwright, PWA, VueDsfr',
        color: blue,
      },
    ],
  },
]

const TEMPLATES = FRAMEWORKS.map(
  f => (f.variants && f.variants.map(v => v.name)) || [f.name],
).reduce((a, b) => a.concat(b), [])

const renameFiles = {
  _gitignore: '.gitignore',
}

async function init() {
  let targetDir = argv._[0]
  let template = argv.template || argv.t

  const defaultProjectName = !targetDir ? 'vue-dsfr-project' : targetDir

  let result = {}

  try {
    result = await prompts(
      [
        {
          type: targetDir ? null : 'text',
          name: 'projectName',
          message: 'Nom du projet :',
          initial: defaultProjectName,
          onState: state =>
            (targetDir = state.value.trim() || defaultProjectName),
        },
        {
          type: () =>
            !existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.'
              ? 'Répertoire courant'
              : `Le répertoire cible "${targetDir}"`)
            + ` n'est pas vide. Le supprimer et continuer ?`,
        },
        {
          type: (_, { overwrite } = {}) => {
            if (overwrite === false) {
              throw new Error(`${red('✖')} Opération annulée`)
            }
            return null
          },
          name: 'overwriteChecker',
        },
        {
          type: () => (isValidPackageName(targetDir) ? null : 'text'),
          name: 'packageName',
          message: 'Nom du package:',
          initial: () => toValidPackageName(targetDir),
          validate: dir =>
            isValidPackageName(dir) || 'Nom de package invalide',
        },
        {
          type: template && TEMPLATES.includes(template) ? null : 'select',
          name: 'framework',
          message:
            typeof template === 'string' && !TEMPLATES.includes(template)
              ? `"${template}" n'est pas un gabarit valide. Veuillez choisir parmi la liste ci-dessous : `
              : 'Liste disponible :',
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color
            return {
              title: frameworkColor(framework.name),
              value: framework,
            }
          }),
        },
        {
          type: framework =>
            framework && framework.variants ? 'select' : null,
          name: 'variant',
          message: 'Faites votre choix :',
          // @ts-ignore
          choices: framework =>
            framework.variants.map((variant) => {
              const variantColor = variant.color
              return {
                title: `${variantColor(variant.name)}${gray(` ${variant.display}`)}`,
                value: variant.name,
              }
            }),
        },
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} Opération annulée`)
        },
      },
    )
  }
  catch (cancelled) {
    console.log(cancelled.message)
    return
  }

  // user choice associated with prompts
  const { framework, overwrite, packageName, variant } = result

  const root = path.join(cwd, targetDir)

  if (overwrite) {
    emptyDir(root)
  }
  else if (!existsSync(root)) {
    mkdirSync(root)
  }

  // determine template
  template = variant || framework || template

  console.log(`\nScaffolding project in ${root}...`)

  const templateDir = path.join(__dirname, `template-${template}`)

  const write = (file, content) => {
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      writeFileSync(targetPath, content)
    }
    else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = readdirSync(templateDir)
  for (const file of files.filter(f => f !== 'package.json')) {
    write(file)
  }

  const pkgPath = path.join(templateDir, 'package.json')
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))

  pkg.name = packageName || targetDir

  write('package.json', JSON.stringify(pkg, null, 2))

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  console.log(`\n${lightGreen('Le projet est prêt. Il ne reste qu\'à lancer ces commandes :')}\n`)
  if (root !== cwd) {
    console.log(`  cd ${path.relative(cwd, root)}`)
  }
  switch (pkgManager) {
    case 'pnpm':
      console.log('  pnpm i')
      console.log('  pnpm dev')
      break
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn dev')
      break
    default:
      console.log(`  ${pkgManager} install`)
      console.log(`  ${pkgManager} run dev`)
      break
  }
  console.log()
}

function copy(src, dest) {
  const stat = statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  }
  else {
    copyFileSync(src, dest)
  }
}

function isValidPackageName(projectName) {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
    projectName,
  )
}

function toValidPackageName(projectName) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

function copyDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true })
  for (const file of readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

function isEmpty(path) {
  return readdirSync(path).length === 0
}

function emptyDir(dir) {
  if (!existsSync(dir)) {
    return
  }
  for (const file of readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    if (lstatSync(abs).isDirectory()) {
      emptyDir(abs)
      rmdirSync(abs)
    }
    else {
      unlinkSync(abs)
    }
  }
}

/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
function pkgFromUserAgent(userAgent) {
  if (!userAgent)
    return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  }
}

init().catch((e) => {
  console.error(e)
})
