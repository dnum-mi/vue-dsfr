<script lang="ts" setup>
import VIcon from '../VIcon.vue'
</script>

<template>
  <div class="flex  justify-between p-4">
    <section>
      <header class="fr-text--lg">
        Simple :
      </header>
      <p>
        <VIcon
          name="ri-close-line"
        />
        <VIcon
          name="ri-checkbox-circle-line"
        />
      </p>
    </section>
    <section>
      <header class="fr-text--lg">
        Plus grande :
      </header>
      <p>
        <VIcon
          name="ri-close-line"
          scale="2"
        />
        <VIcon
          name="ri-checkbox-circle-line"
          scale="2"
        />
      </p>
    </section>
    <section>
      <header class="fr-text--lg">
        Animée :
      </header>
      <p>
        spin :
        <VIcon
          name="ri-loader-4-line"
          animation="spin"
        />
      </p>
      <p>
        spin-pulse :
        <VIcon
          name="ri-loader-4-line"
          animation="spin-pulse"
        />
      </p>
      <p>
        pulse :
        <VIcon
          name="ri-checkbox-circle-line"
          animation="pulse"
        />
      </p>
      <p>
        flash :
        <VIcon
          name="ri-close-line"
          animation="flash"
        />
      </p>
      <p>
        float :
        <VIcon
          name="ri-close-line"
          animation="float"
        />
      </p>
      <p>
        ring :
        <VIcon
          name="fa6-regular:bell"
          animation="ring"
        />
      </p>
      <p>
        wrench :
        <VIcon
          name="twemoji:rolling-on-the-floor-laughing"
          animation="wrench"
        />
      </p>
    </section>
    <section>
      <header class="fr-text--lg">
        Colorée :
      </header>
      <p>
        lightgreen :
        <VIcon
          name="ri-checkbox-circle-line"
          color="lightgreen"
        />
      </p>
      <p>
        #f90 :
        <VIcon
          name="ri-checkbox-circle-line"
          color="#f90"
        />
      </p>
      <p>
        var(--blue-france-main-525) :
        <VIcon
          name="ri-checkbox-circle-line"
          color="var(--blue-france-main-525)"
        />
      </p>
    </section>
  </div>
</template>
