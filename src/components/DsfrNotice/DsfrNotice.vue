<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  closeable: Boolean,
})
const emit = defineEmits(['close'])
</script>

<template>
  <div class="fr-notice  fr-notice--info">
    <div class="fr-container">
      <div class="fr-notice__body">
        <p class="fr-notice__title">
          <slot>
            {{ title }}
          </slot>
        </p>
        <button
          v-if="closeable"
          class="fr-btn--close  fr-btn"
          title="Masquer le message"
          @click="emit('close')"
        >
          Masquer le message
        </button>
      </div>
    </div>
  </div>
</template>
