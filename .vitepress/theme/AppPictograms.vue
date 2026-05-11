<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, watchEffect } from 'vue'

import * as svgs from '../../docs/guide/pictograms'

defineProps<{
  pictograms: PictogramCategory[]
}>()
const { isDark } = useData()

watchEffect(() => {
  document.documentElement.setAttribute('data-fr-theme', isDark.value ? 'dark' : 'light')
})

type Pictogram = {
  name: string
  id: keyof typeof svgs
}

type PictogramCategory = {
  category: string
  description: string
  pictograms: Pictogram[]
}

const copied = ref<string>()
const copyError = ref<string>()
const timeoutId = ref<number>()

async function copyImport (id: keyof typeof svgs, name: string, category: string) {
  const importStatement = `import ${id} from '@gouvfr/dsfr/dist/artwork/pictograms/${category}/${name}.svg'`
  window.clearTimeout(timeoutId.value)
  try {
    await navigator.clipboard.writeText(importStatement)
    copied.value = id
    copyError.value = undefined
  } catch {
    copyError.value = id
    copied.value = undefined
  }
  timeoutId.value = window.setTimeout(() => {
    copied.value = undefined
    copyError.value = undefined
  }, 2000)
}
</script>

<template>
  <div
    v-for="category in pictograms"
    :key="category.category"
  >
    <h3>{{ category.description }} ({{ category.category }})</h3>
    <ul class="picto-grid">
      <li
        v-for="picto in category.pictograms"
        :key="picto.id"
        class="picto-item"
      >
        <button
          type="button"
          class="picto-btn"
          :aria-label="`Copier l'import de ${picto.name}`"
          :aria-pressed="copied === picto.id"
          @click="copyImport(picto.id, picto.name, category.category)"
        >
          <div class="picto-artwork">
            <Transition name="fade">
              <div
                v-if="copied === picto.id || copyError === picto.id"
                class="overlay"
                :class="{ 'overlay--error': copyError === picto.id }"
                aria-live="polite"
              >
                {{ copyError === picto.id ? 'Échec de la copie' : 'Import copié !' }}
              </div>
            </Transition>
            <svg
              class="fr-artwork"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 80 80"
              width="80"
              height="80"
            >
              <use
                class="fr-artwork-decorative"
                :href="`${svgs[picto.id]}#artwork-decorative`"
              />
              <use
                class="fr-artwork-minor"
                :href="`${svgs[picto.id]}#artwork-minor`"
              />
              <use
                class="fr-artwork-major"
                :href="`${svgs[picto.id]}#artwork-major`"
              />
            </svg>
          </div>
          <span class="picto-label">{{ picto.name }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.picto-grid {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.picto-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
}

.picto-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100px;
  cursor: pointer;
  background: none;
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 0.25rem;
  color: inherit;
  transition: border-color 0.2s;
}

.picto-btn:focus-visible {
  outline: none;
  border-color: var(--vp-c-brand-1, #3451b2);
}

.picto-btn:hover .picto-artwork {
  opacity: 0.85;
}

.picto-artwork {
  position: relative;
  width: 80px;
  height: 80px;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  border-radius: 4px;
  z-index: 1;
}

.overlay--error {
  background: rgba(180, 0, 0, 0.85);
}

.picto-label {
  font-size: 0.75rem;
  text-align: center;
  color: var(--vp-c-text-2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
