<script setup lang="ts">
import { computed, ref } from 'vue'

type Colors = Record<string, {
  cssVar: string
  name: string
  hex: string
  line: string
}[]>

const props = withDefaults(defineProps<{
  colors: Colors
  title: string
  theme: 'light' | 'dark'
  textColor?: string
  inverseTextColor?: string
  titleTag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>(), {
  titleTag: 'h3',
  textColor: '#222',
  inverseTextColor: '#eee',
})

const emit = defineEmits<{
  copied: [cssVar: string]
}>()

const color = computed(() => props.theme === 'light' ? '#222' : '#eee')

const selected = ref<string>()
const selectedName = ref<string>()
const timeoutId = ref<number>()
const copyInClipboard = (text: string, colorName: string) => {
  navigator.clipboard.writeText(text)
  selected.value = text
  selectedName.value = colorName
  emit('copied', text)
  window.clearTimeout(timeoutId.value)
  timeoutId.value = window.setTimeout(() => {
    selected.value = ''
    selectedName.value = ''
  }, 3000)
}
</script>

<template>
  <ul
    style="list-style: none"
    class="colors-container"
  >
    <li
      v-for="(subColors, color) in colors"
      :key="color"
    >
      <h3 style="text-transform: uppercase">
        {{ color }} :
      </h3>
      <ul
        class="colors"
      >
        <li
          v-for="subColor of subColors"
          :key="subColor.name"
          class="color"
          @click="copyInClipboard(subColor.cssVar, subColor.name)"
        >
          <div
            role="button"
            :style="`background-color: ${subColor.hex}; flex: 0 0 80px; height: 55px;`"
            @key.down.enter="copyInClipboard(subColor.cssVar, subColor.name)"
          />
          <div
            class="color-details"
            :style="`border-color: ${subColor.hex}${subColor.hex.length === 4 ? '5' : '55'}`"
          >
            <Transition name="fade">
              <div
                v-if="selectedName === subColor.name"
                class="overlay"
              >
                <strong>{{ selected }}</strong>
                <span>a été copié dans le presse-papier !</span>
              </div>
            </Transition>
            <strong style="text-align: center">{{ subColor.name }}</strong>
            <button
              class="color-animated"
            >
              {{ subColor.cssVar }}
              <VIcon
                style="margin-right: 0.125rem;"
                name="ri-file-copy-line"
              />
            </button>
            <button
              class="color-animated"
              style="padding: 0.125rem 0.25rem; margin-inline: 0.25rem"
              @click.stop="copyInClipboard(subColor.hex, subColor.name)"
            >
              <em>{{ subColor.hex }}</em>
              <VIcon
                style="margin-right: 0.125rem;"
                name="ri-file-copy-line"
              />
            </button>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.colors {
  list-style: none;
}

ul li.color {
  margin: 0;
}

.color {
  display: flex;
  align-items: center;
  flex: 1 0 100px;
  height: 100%;
  cursor: pointer;
}

.color-details {
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 55px;
  padding-inline: 0.5rem;
  width: 100%;
}

.color-animated {
  --text-color: v-bind(color);
  --hover-text-color: grey;
  position: relative;
  display: inline-block;
  font-weight: 800;
  overflow: hidden;

  background: linear-gradient(to right, var(--hover-text-color), var(--hover-text-color) 50%, var(--text-color) 50%);

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
}

.color-animated:hover {
  background-position: 0 100%;

  animation-duration: 0.75s;
  animation-name: changeColor;
  animation-iteration-count: infinite;
  animation-direction: reverse;
}

@keyframes changeColor {
  from {
    background-position: -100% 100%;
  }

  to {
    background-position: 100% 100%;
  }
}

.overlay {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  padding-inline: 0.5rem;
}

.overlay * {
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  transition: opacity 0.5s ease;
  opacity: 0;
}
</style>
