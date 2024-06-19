<script setup lang="ts">
import { ref } from 'vue'

type Colors = Record<string, {
  cssVar: string
  name: string
  hex: string
  line: string
}[]>

withDefaults(defineProps<{
  colors: Colors
  title: string
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

const selected = ref<string>()
const timeoutId = ref<number>()
const copyInClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
  selected.value = text
  emit('copied', text)
  window.clearTimeout(timeoutId.value)
  timeoutId.value = window.setTimeout(() => {
    selected.value = ''
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
          @click="copyInClipboard(subColor.cssVar)"
        >
          <div
            role="button"
            :style="`background-color: ${subColor.hex}; width: 100%; height: 80px;`"
          />
          <div
            class="color-details"
            :style="`border-color: ${subColor.hex}${subColor.hex.length === 4 ? '5' : '55'}`"
          >
            <Transition name="fade">
              <div
                v-if="selected === subColor.cssVar || selected === subColor.hex"
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
              @click.stop="copyInClipboard(subColor.hex)"
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
.colors-container {
  overflow: auto;

  background:linear-gradient(90deg,#fff 33%,rgba(255,255,255,0)),
    linear-gradient(90deg,rgba(255,255,255,0),#fff 66%) 0 100%,
    radial-gradient(farthest-side at 50% 80%,rgba(0,0,0,.4),transparent),
    radial-gradient(farthest-side at 100% 50%,rgba(0,0,0,.4),transparent) 0 100%;
  background-repeat:no-repeat;
  background-size:60px 100%,60px 100%,30px 100%,30px 100%;
  background-position:0 0,100%,0 0,100%;
  background-attachment:local,local,scroll,scroll
}
.colors {
  display: flex;
  flex-wrap: no-wrap;
  list-style: none;
}
ul li.color {
  margin: 0;
}

.color {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 200px;
  cursor: pointer;
}
.color-details {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 200px;
  border: 1px solid;
  width: 100%;
  height: 200px;
}

.color-animated {
  --text-color: rgb(50, 50, 50);
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

.dark .color-animated {
  --text-color: white;
  --hover-text-color: #ccc;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #eee;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
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
