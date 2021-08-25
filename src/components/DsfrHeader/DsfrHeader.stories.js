import DsfrHeader from './DsfrHeader.vue'

import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiNotification3Line,
  RiPhoneLine,
} from 'oh-vue-icons/icons'

VIcon.add(
  RiNotification3Line,
  RiPhoneLine,
)

export default {
  component: DsfrHeader,
  title: 'Éléments/En-tête - Header',
  argTypes: {
    dark: { control: 'boolean' },
    logoText: { control: 'object' },
    serviceTitle: { control: 'text' },
    serviceDescription: { control: 'text' },
    showSearch: { control: 'boolean' },
    homeTo: { control: 'text' },
    quickLinks: { control: 'array' },
    actionOnLogo: { action: 'clicked on logo' },
    modelValue: { controle: 'text' },
    onChangeSearchInput: { action: 'search changed' },
  },
}

export const EnTete = (args, { argTypes }) => ({
  components: {
    DsfrHeader,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrHeader
        :service-title="serviceTitle"
        :service-description="serviceDescription"
        :home-to="homeTo"
        :quick-links="quickLinks"
        :show-search="showSearch"
        :logo-text="logoText"
        @click="onClickOnLogo"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </div>
  `,
  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
  },
})
EnTete.args = {
  dark: false,
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Lien1', path: '/path1', icon: '' },
    { label: 'Lien2', path: '/path2', icon: 'ri-notification-3-line' },
    { label: 'Lien3', path: '/path3', icon: 'ri-phone-line', iconRight: true },
  ],
}
