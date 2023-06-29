<script setup>
import { computed, nextTick, ref, watch } from 'vue'

const container = ref(undefined)
const optionsList = ref(undefined)

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const hasFocus = ref(false)
const displayOptions = computed(() => hasFocus.value && !!props.options.length)

function convertRemToPixels (rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

function selectOption (option) {
  emit('update:modelValue', option)
}

const displayAtTheTop = ref(false)

const looseFocus = () => {
  setTimeout(() => { hasFocus.value = false }, 100)
}

watch(displayOptions, () => {
  if (displayOptions.value) {
    const posContainerY = container.value.offsetTop
    const containerHeight = container.value.offsetHeight
    const screenHeight = document.body.scrollHeight
    const optionsHeight = convertRemToPixels(17)
    const isTooLow = (optionsHeight + posContainerY + containerHeight) > screenHeight

    displayAtTheTop.value = isTooLow
  }
})

const activeOption = ref(-1)

const isVisible = function (ele, container) {
  const { bottom, height, top } = ele.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  return top <= containerRect.top
    ? containerRect.top - top <= height
    : bottom - containerRect.bottom <= height
}

function checkIfActiveOptionIsVisible () {
  const activeLi = optionsList.value.querySelectorAll('li')[activeOption.value]
  const isLiVisible = isVisible(activeLi, optionsList.value)

  if (!isLiVisible) {
    // Scroll to activeLi
    activeLi.scrollIntoView({ behavior: 'smooth' })
  }
}

function moveToPreviousOption () {
  const isFirst = activeOption.value <= 0
  activeOption.value = isFirst ? props.options.length - 1 : activeOption.value - 1
  nextTick().then(checkIfActiveOptionIsVisible)
}

function moveToNextOption () {
  const isLast = activeOption.value >= (props.options.length - 1)
  activeOption.value = isLast ? 0 : activeOption.value + 1
  nextTick().then(checkIfActiveOptionIsVisible)
}

function checkKeyboardNav ($event) {
  if (['ArrowUp', 'ArrowDown', 'Enter'].includes($event.key)) {
    $event.preventDefault()
  }
  if ($event.key === 'Enter') {
    selectOption(props.options[activeOption.value])
    hasFocus.value = false
  } else if ($event.key === 'ArrowUp') {
    moveToPreviousOption()
  } else if ($event.key === 'ArrowDown') {
    moveToNextOption()
  }
}

</script>

<template>
  <div
    ref="container"
    class="relative"
  >
    <DsfrInput
      :model-value="modelValue"
      v-bind="$attrs"
      :required="true"
      @update:model-value="$emit('update:modelValue', $event)"
      @focus="hasFocus = true"
      @blur="looseFocus()"
      @keydown="checkKeyboardNav($event)"
    />
    <ul
      v-show="displayOptions"
      ref="optionsList"
      class="list-none  absolute  m-0  right-0  z-1  left-0  bg-white  box-shadow  max-h-17  scroll  pointer"
      :class="{
        'at-the-top': displayAtTheTop,
      }"
    >
      <li
        v-for="(option, i) of options"
        :key="option"
        class="list-item"
        :class="{ 'active-option': activeOption === i }"
        @click.stop="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.box-shadow {
  box-shadow: 0px 16px 16px -16px rgba(0, 0, 0, 0.32), 0px 8px 16px rgba(0, 0, 0, 0.1);
}

.max-h-17 {
  max-height: 17rem;
}

.scroll {
  overflow: auto;
}

.at-the-top {
  bottom: 2.8rem;
  box-shadow: 0px -16px 16px -16px rgba(0, 0, 0, 0.32), 0px -8px 16px rgba(0, 0, 0, 0.1);
}

.list-item.active-option,
.list-item:hover {
  background-color: var(--blue-france-sun-113-625);
  color: white;
}
</style>
