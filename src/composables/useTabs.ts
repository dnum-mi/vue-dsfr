import { ref } from 'vue'

export const useTabs = (isAscendant = true, initialSelectedIndex = 0) => {
  const ascendant = ref<boolean>(isAscendant)
  const selected = ref<number>(initialSelectedIndex)

  function select (idx: number) : void {
    ascendant.value = selected.value < idx
    selected.value = idx
  }

  return { ascendant, selected, select }
}
