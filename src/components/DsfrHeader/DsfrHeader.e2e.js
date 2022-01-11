import { mount } from '@cypress/vue'
import DsfrHeader from './DsfrHeader.vue'
import '../../main.css'

const data = {
  dark: false,
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Lien2', path: '', icon: 'ri-notification-3-line', iconOnly: true, button: true },
    { label: 'Lien1', path: '/path1', icon: '' },
    { label: 'Lien3', path: '/path3', icon: 'ri-phone-line', iconRight: true },
  ],
}

describe('DsfrHeader', () => {
  it('should mount DsfrHeader', () => {
    mount(DsfrHeader, {
      components: {
        DsfrHeader,
      },
      data () {
        return data
      },
    })
  })
})
