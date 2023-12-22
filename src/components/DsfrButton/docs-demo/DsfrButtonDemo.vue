<script lang="ts" setup>
import DsfrButton from '../DsfrButton.vue'
</script>

<template>
  <div class="fr-container fr-my-2w">
    <div class="flex  gap-4  flex-end  w-full">
      <div class="flex  flex-col  gap-4  flex-end  w-full">
        <DsfrButton
          label="Bouton primaire"
          primary
        />
        <DsfrButton
          label="Bouton secondaire"
          secondary
        />
        <DsfrButton
          label="Bouton tertiaire"
          tertiary
        />
        <DsfrButton
          label="Bouton tertiaire sans bordure"
          tertiary
          no-outline
        />
      </div>
      <div class="flex  flex-col  gap-4  flex-end  w-full">
        <DsfrButton
          label="Petit bouton primaire"
          size="sm"
          primary
        />
        <DsfrButton
          label="Petit bouton secondaire"
          size="sm"
          secondary
        />
        <DsfrButton
          label="Petit bouton tertiaire"
          size="sm"
          tertiary
        />
        <DsfrButton
          label="Petit bouton tertiaire sans bordure"
          size="sm"
          tertiary
          no-outline
        />
      </div>
    </div>
    <div class="flex  flex-col  gap-4  flex-end  w-full">
      <DsfrButton
        label="Gros bouton primaire"
        size="lg"
        primary
      />
      <DsfrButton
        label="Gros bouton secondaire"
        size="lg"
        secondary
      />
      <DsfrButton
        label="Gros bouton tertiaire"
        size="lg"
        tertiary
      />
      <DsfrButton
        label="Gros bouton tertiaire sans bordure"
        size="lg"
        tertiary
        no-outline
      />
      <div class="flex  flex-col  gap-4  flex-end  w-full">
        <DsfrButton
          label="Bouton primaire avec icône DSFR"
          icon="fr-icon-moon-line"
          primary
        />
        <DsfrButton
          label="Bouton secondaire avec icône DSFR"
          icon="fr-icon-moon-line"
          secondary
        />
        <DsfrButton
          label="Bouton tertiaire avec icône DSFR"
          icon="fr-icon-moon-line"
          tertiary
        />
        <DsfrButton
          label="Bouton tertiaire sans bordure avec icône DSFR"
          icon="fr-icon-moon-line"
          tertiary
          no-outline
        />
      </div>
      <div class="flex  flex-col  gap-4  flex-end  w-full">
        <DsfrButton
          label="Bouton primaire avec icône oh-vue-icon"
          icon="ri-moon-line"
          primary
        />
        <DsfrButton
          label="Bouton secondaire avec icône oh-vue-icon animée (spin)"
          :icon="{name: 'ri-refresh-line', animation: 'spin'}"
          secondary
        />
        <DsfrButton
          label="Bouton tertiaire avec icône oh-vue-icon animée (spin-pulse)"
          :icon="{name: 'ri-moon-line', animation: 'spin-pulse'}"
          tertiary
        />
        <DsfrButton
          label="Bouton 3re ss bordure avec icône OVI colorée avec couleur DSFR"
          title="Bouton tertiaire sans bordure avec icône oh-vue-icon colorée avec une couleur du DSFR"
          :icon="{name: 'ri-moon-line', fill: 'var(--success-425-625)'}"
          tertiary
          no-outline
        />
      </div>
      <div class="flex  gap-4  flex-end  w-full">
        <div class="flex  flex-col  gap-4  flex-end  w-full">
          <DsfrButton
            label="Bouton primaire icône seulement avec icône DSFR"
            icon="fr-icon-moon-line"
            icon-only
            primary
          />
          <DsfrButton
            label="Bouton secondaire avec icône DSFR"
            icon="fr-icon-moon-line"
            icon-only
            secondary
          />
          <DsfrButton
            label="Bouton tertiaire avec icône DSFR animée"
            icon="fr-icon-moon-line"
            icon-only
            tertiary
          />
          <DsfrButton
            label="Bouton 3re ss bordure avec icône OVI colorée avec couleur DSFR"
            title="Bouton tertiaire sans bordure avec icône DSFR colorée avec une couleur du DSFR"
            icon="fr-icon-moon-line"
            icon-only
            tertiary
            no-outline
          />
        </div>
        <div class="flex  flex-col  gap-4  flex-end  w-full">
          <DsfrButton
            label="Bouton primaire icône seulement avec icône oh-vue-icon"
            icon="ri-moon-line"
            icon-only
            primary
          />
          <DsfrButton
            label="Bouton secondaire avec icône oh-vue-icon animée (spin)"
            :icon="{name: 'ri-refresh-line', animation: 'spin'}"
            icon-only
            secondary
          />
          <DsfrButton
            label="Bouton tertiaire avec icône oh-vue-icon animée (spin-pulse)"
            :icon="{name: 'ri-moon-line', animation: 'spin-pulse'}"
            icon-only
            tertiary
          />
          <DsfrButton
            label="Bouton 3re ss bordure avec icône OVI colorée avec couleur DSFR"
            title="Bouton tertiaire sans bordure avec icône oh-vue-icon colorée avec une couleur du DSFR"
            :icon="{name: 'ri-moon-line', fill: 'var(--success-425-625)'}"
            icon-only
            tertiary
            no-outline
          />
        </div>
      </div>
    </div>
  </div>
</template>
