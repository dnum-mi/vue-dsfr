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
    onClick: { action: 'clicked' },
  },
}

export const Primary = (args) => ({
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
        @click="onClick"
      />
    </div>
  `,
})
Primary.args = {
  label: 'Label bouton',
  disabled: false,
  dark: false,
}

export const Secondary = (args) => ({
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
Secondary.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  dark: false,
  secondary: true,
}

export const ButtonWithIcon = (args) => ({
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
      <DsfrButton
        :disabled="disabled"
        @click="onClick"
        style="display: flex; align-items: end; margin: 1rem 0;"
      >
        <v-icon name="ri-checkbox-circle-line" />
        <span>{{ label }}</span>
      </DsfrButton>

      <DsfrButton
        :disabled="disabled"
        @click="onClick"
        :secondary="true"
        style="display: flex; align-items: end; margin: 1rem 0;"
      >
        <v-icon name="ri-checkbox-circle-line" />
        <span>{{ label }}</span>
      </DsfrButton>
    </div>
  `,
})
ButtonWithIcon.args = {
  label: 'Texte du bouton',
  disabled: false,
  dark: false,
}
