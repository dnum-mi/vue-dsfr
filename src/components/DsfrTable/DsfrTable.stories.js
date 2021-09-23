import DsfrSearchBar from './DsfrSearchBar.vue'

export default {
  components: DsfrSearchBar,
  title: 'Éléments/Barre de recherche - Search bar',
  argTypes: {
    label: { control: 'text' },
    dark: { control: 'boolean' },
    hideIcon: { control: 'boolean' },
    labelVisible: { control: 'boolean' },
    placeholder: { control: 'text' },
    buttonText: { control: 'text' },
    modelValue: { control: 'text' },
    large: { control: 'boolean' },
  },
}

export const TableauSimple = (args) => ({
})

TableauSimple.args = {

}
