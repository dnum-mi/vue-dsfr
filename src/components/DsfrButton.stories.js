import DsfrButton from './DsfrButton.vue'

export default {
  component: DsfrButton,
  title: 'Basic/Button',
}

export const Primary = () => ({
  components: { DsfrButton },
  template: '<DsfrButton primary label="Mon bouton"/>',
})

export const Secondary = () => ({
  components: { DsfrButton },
  template: '<DsfrButton label="Mon bouton"/>',
})
