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

export const PrimaryWithIcon = (args) => ({
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
PrimaryWithIcon.args = {
  dark: false,
  label: 'Label bouton',
  disabled: false,
  icon: 'ri-search-line',
  iconRight: false,
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
      <div style="margin: 1rem 0;">
        <DsfrButton
          :disabled="disabled"
          @click="onClick"
          :label="label"
          icon="ri-checkbox-circle-line"
        />
      </div>

      <div style="margin: 1rem 0;">
        <DsfrButton
          :disabled="disabled"
          secondary
          @click="onClick"
          :label="label"
          icon="ri-checkbox-circle-line"
        />
      </div>

      <div style="margin: 1rem 0;">
        <DsfrButton
          :disabled="disabled"
          @click="onClick"
          :label="label"
          icon="ri-checkbox-circle-line"
          icon-right
        />
      </div>

      <div style="margin: 1rem 0;">
        <DsfrButton
          :disabled="disabled"
          secondary
          @click="onClick"
          :label="label"
          icon="ri-checkbox-circle-line"
          icon-right
        />
      </div>

    </div>
  `,
})
ButtonWithIcon.args = {
  label: 'Texte du bouton',
  disabled: false,
  dark: false,
}
