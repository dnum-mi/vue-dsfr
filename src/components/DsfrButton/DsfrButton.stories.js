import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons'

import DsfrButton from './DsfrButton.vue'

OhVueIcon.add(RiCheckboxCircleLine)

export default {
  component: DsfrButton,
  title: 'Basic/Boutons - Button',
  argTypes: {
    secondary: { control: 'boolean' },
    dark: { control: 'boolean' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: 'text' },
    iconRight: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export const BoutonSimple = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrButton
        :label="label"
        :disabled="disabled"
        :secondary="secondary"
        :icon="icon"
        :iconRight="iconRight"
        @click="onClick"
      />
    </div>
  `,
})
BoutonSimple.args = {
  dark: false,
  label: 'Label bouton',
  disabled: false,
  secondary: false,
  icon: '',
  iconRight: false,
}

export const BoutonPrimaire = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrButton
        :label="label"
        @click="onClick"
      />
    </div>
  `,
})
BoutonPrimaire.args = {
  dark: false,
  label: 'Label bouton',
}

export const BoutonPrimaireAvecIcone = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrButton
        :label="label"
        :disabled="disabled"
        :icon="icon"
        :icon-right="iconRight"
        @click="onClick"
      />
    </div>
  `,
})
BoutonPrimaireAvecIcone.args = {
  dark: false,
  label: 'Label bouton',
  disabled: false,
  icon: 'ri-search-line',
  iconRight: false,
}

export const BoutonSecondaire = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrButton
        :label="label"
        :disabled="disabled"
        :secondary="secondary"
        @click="onClick"
      />
    </div>
  `,
})
BoutonSecondaire.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  dark: false,
  secondary: true,
}

export const SuiteDeBoutons = (args) => ({
  components: {
    DsfrButton,
    VIcon: OhVueIcon,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <div style="margin: 1rem 0;" v-for="btn in btns">
        <DsfrButton
          :disabled="btn.disabled"
          :secondary="btn.secondary"
          @click="onClick"
          :label="btn.label"
          :icon="btn.icon"
          :iconRight="btn.iconRight"
        />
      </div>

    </div>
  `,
})
SuiteDeBoutons.args = {
  dark: false,
  label: 'Texte du bouton',
  disabled: false,
  btns: [
    {
      label: 'Label 1',
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Label 2',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Label 3',
      icon: 'ri-checkbox-circle-line',
      iconRight: true,
    },
    {
      label: 'Label 4',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
      iconRight: true,
    },
  ],
}
