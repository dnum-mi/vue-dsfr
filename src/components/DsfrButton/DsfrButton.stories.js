import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons'

import DsfrButton from '../DsfrButton/DsfrButton.vue'

OhVueIcon.add(RiCheckboxCircleLine)

export default {
  component: DsfrButton,
  title: 'Basic/Button',
  argTypes: {
    secondary: { control: 'boolean' },
    dark: { control: 'boolean' },
    label: { control: 'text' },
    onClick: {},
    disabled: { control: 'boolean' },
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
        :label="label"
        :disabled="disabled"
        :iconLeft="iconLeft"
        :iconRight="iconRight"
        @click="onClick"
        style="display: flex; justify-content: center;"
      >
        <v-icon name="ri-checkbox-circle-line" />
        <span>Mon texte de bouton</span>
      </DsfrButton>
    </div>
  `,
})
ButtonWithIcon.args = {
  iconLeft: true,
  iconRight: false,
}
