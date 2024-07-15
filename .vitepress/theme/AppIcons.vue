<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

type Icons = Record<string, string[]>

withDefaults(defineProps<{
  icons: Icons
  theme?: 'light' | 'dark'
}>(), {
  theme: 'dark',
})

const emit = defineEmits<{
  copied: [cssVar: string]
}>()

const { isDark } = useData()

const color = computed(() => isDark.value ? '#eee' : '#222')

const selected = ref<string>()
const selectedName = ref<string>()
const timeoutId = ref<number>()

const copyInClipboard = (iconName: string, span: boolean) => {
  const text = span ? `<span class="${iconName}"></span>` : iconName
  navigator.clipboard.writeText(text)
  selected.value = text
  selectedName.value = iconName
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
    class="icons-container"
  >
    <li
      v-for="(sectionIcons, section) in icons"
      :key="section"
    >
      <h3 style="text-transform: uppercase">
        {{ section }} :
      </h3>
      <div>
        <p>Les icônes :</p>
        <template
          v-for="icon in sectionIcons"
          :key="icon"
        >
          <span :class="icon" />
        </template>
      </div>
      <details class="details custom-block">
        <summary>Copier-coller</summary>
        <ul
          class="icons"
        >
          <li
            class="icon"
          >
            <div class="icon-details">
              <span>&nbsp;</span>
              <span>copier tout le html</span>
              <span>copier le nom de la classe</span>
            </div>
          </li>
          <li
            v-for="icon of sectionIcons"
            :key="icon"
            class="icon"
            @click.stop="copyInClipboard(icon, true)"
          >
            <div
              class="icon-details"
            >
              <Transition name="fade">
                <div
                  v-if="selectedName === icon"
                  class="overlay"
                >
                  <strong>{{ selected }}</strong>
                  <span>a été copié dans le presse-papier !</span>
                </div>
              </Transition>
              <span :class="icon" />
              <button
                class="icon-animated"
                @click.stop="copyInClipboard(icon, true)"
              >
                &lt;span...>&lt;/span>
                <VIcon
                  style="margin-right: 0.125rem;"
                  name="ri-file-copy-line"
                />
              </button>
              <button
                class="icon-animated"
                style="padding: 0.125rem 0.25rem; margin-inline: 0.25rem"
                @click.stop="copyInClipboard(icon)"
              >
                <em>{{ icon }}</em>
                <VIcon
                  style="margin-right: 0.125rem;"
                  name="ri-file-copy-line"
                />
              </button>
            </div>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</template>

<style scoped>
.icons {
  list-style: none;
}

ul li.icon {
  margin: 0;
}

.icon {
  display: flex;
  align-items: center;
  flex: 1 0 100px;
  height: 100%;
  cursor: pointer;
}

.icon-details {
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 3rem;
  padding-inline: 0.5rem;
  width: 100%;
}

.icon-animated {
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

.icon-animated:hover {
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
