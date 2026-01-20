<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

import DsfrTag from '../../DsfrTag/DsfrTag.vue'
import DsfrDataTable from '../DsfrDataTable.vue'

getCurrentInstance()?.appContext.app.component('DsfrTag', DsfrTag)

const title = 'Emploi du temps complexe avec cellules fusionnées et rowspan et colspan et bordures verticales'
</script>

<template>
  <DsfrDataTable
    :title="title"
    :vertical-borders="true"
    :headers-row="[]"
    :rows="[]"
  >
    <template #caption-description>
      (Résumé) Emploi du temps horaire des Groupes 1 et 2, le matin des jours de la semaine ouvrée (Lundi au Vendredi) :
      <ul>
        <li>la première colonne représente le planning de la journée de Lundi pour les groupes 1 et 2,</li>
        <li>la deuxième colonne représente le planning de la journée de Mardi pour les groupes 1 et 2,</li>
        <li>la troisième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 1,</li>
        <li>la quatrième colonne représente le planning des journées de Mercredi et Jeudi pour le groupe 2,</li>
        <li>la cinquième colonne représente le planning de la journée de Vendredi pour les groupes 1 et 2.</li>
      </ul>
    </template>
    <template #thead>
      <tr>
        <th
          id="complex-thead-0-col-0"
          class="fr-cell--fixed"
          role="columnheader"
          rowspan="2"
        >
          Horaires
        </th>
        <th id="complex-thead-0-col-1">
          Lundi
        </th>
        <th id="complex-thead-0-col-2">
          Mardi
        </th>
        <th
          id="complex-thead-0-col-3"
          colspan="2"
        >
          Mercredi & Jeudi<br>Exemple de 2 cellules fusionnées dans le Header
        </th>
        <th id="complex-thead-0-col-4">
          Vendredi
        </th>
      </tr>
      <tr>
        <th
          id="complex-thead-1-col-0"
          headers="complex-thead-0-col-1"
        >
          Groupes 1 & 2
        </th>
        <th
          id="complex-thead-1-col-1"
          headers="complex-thead-0-col-2"
        >
          Groupes 1 & 2
        </th>
        <th
          id="complex-thead-1-col-2"
          headers="complex-thead-0-col-3"
        >
          Groupe 1
        </th>
        <th
          id="complex-thead-1-col-3"
          headers="complex-thead-0-col-3"
        >
          Groupe 2
        </th>
        <th
          id="complex-thead-1-col-4"
          headers="complex-thead-0-col-4"
        >
          Groupes 1 & 2
        </th>
      </tr>
    </template>
    <template #tbody>
      <tr
        id="table-13-row-key-1"
        data-row-key="1"
      >
        <th
          id="complex-row-0"
          class="fr-cell--fixed"
          headers="complex-thead-0-col-0"
        >
          8h
        </th>
        <td headers="complex-row-0 complex-thead-0-col-1 complex-thead-1-col-1">
          Français
        </td>
        <td headers="complex-row-0 complex-thead-0-col-2 complex-thead-1-col-2">
          Mathématiques
        </td>
        <td headers="complex-row-0 complex-thead-0-col-3 complex-thead-1-col-3">
          LV1
        </td>
        <td headers="complex-row-0 complex-thead-0-col-3 complex-thead-1-col-4">
          Histoire - Géographie
        </td>
        <td headers="complex-row-0 complex-thead-0-col-4 complex-thead-1-col-4">
          EPS
        </td>
      </tr>
      <tr
        id="table-13-row-key-2"
        data-row-key="2"
      >
        <th
          id="complex-row-1"
          class="fr-cell--fixed"
          headers="complex-thead-0-col-0"
        >
          9h
        </th>
        <td
          colspan="5"
          headers="complex-row-1 complex-thead-0-col-1 complex-thead-0-col-2 complex-thead-0-col-3 complex-thead-0-col-4 complex-thead-1-col-1 complex-thead-1-col-2 complex-thead-1-col-3 complex-thead-1-col-4 complex-thead-1-col-4"
        >
          Etude dirigée Exemple de colspan sur toute la ligne
        </td>
      </tr>
      <tr
        id="table-13-row-key-3"
        data-row-key="3"
      >
        <th
          id="complex-row-2"
          class="fr-cell--fixed"
          headers="complex-thead-0-col-0"
        >
          10h
        </th>
        <td headers="complex-row-2 complex-thead-0-col-1 complex-thead-1-col-1">
          Mathématiques
        </td>
        <td headers="complex-row-2 complex-thead-0-col-2 complex-thead-1-col-2">
          Histoire - Géographie
        </td>
        <td
          rowspan="2"
          headers="complex-row-2 complex-row-3 complex-thead-0-col-3 complex-thead-1-col-3"
        >
          Arts
          appliqués
        </td>
        <td headers="complex-row-2 complex-thead-0-col-3 complex-thead-1-col-4">
          LV2
        </td>
        <td headers="complex-row-2 complex-thead-0-col-4 complex-thead-1-col-4">
          Sciences
        </td>
      </tr>
      <tr
        id="table-13-row-key-4"
        data-row-key="4"
      >
        <th
          id="complex-row-3"
          class="fr-cell--fixed"
          headers="complex-thead-0-col-0"
        >
          11h
        </th>
        <td headers="complex-row-3 complex-thead-0-col-1 complex-thead-1-col-1">
          Français
        </td>
        <td headers="complex-row-3 complex-thead-0-col-2 complex-thead-1-col-2">
          EPS
        </td>
        <td headers="complex-row-3 complex-thead-0-col-3 complex-thead-1-col-4">
          Histoire - Géographie
        </td>
        <td headers="complex-row-3 complex-thead-0-col-4 complex-thead-1-col-4">
          Physique - Chimie
        </td>
      </tr>
      <tr
        id="table-13-row-key-5"
        data-row-key="5"
      >
        <th
          id="complex-row-4"
          class="fr-cell--fixed"
          headers="complex-thead-0-col-0"
        >
          12h
        </th>
        <td headers="complex-row-4 complex-thead-0-col-1 complex-thead-1-col-1">
          Sciences
        </td>
        <td headers="complex-row-4 complex-thead-0-col-2 complex-thead-1-col-2">
          LV1
        </td>
        <td
          colspan="2"
          headers="complex-row-4 complex-thead-0-col-3 complex-thead-1-col-3 complex-thead-1-col-4"
        >
          EPS
          Exemple de colspan sur 2 cellules
        </td>
        <td headers="complex-row-4 complex-thead-0-col-4 complex-thead-1-col-4">
          LV2
        </td>
      </tr>
    </template>
  </DsfrDataTable>
</template>

<style scoped>
:deep(.info) {
  color: var(--info-425-625);
  background-color: var(--info-950-100);
}

:deep(.error) {
  color: var(--error-425-625);
  background-color: var(--error-950-100);
}

:deep(.success) {
  color: var(--success-425-625);
  background-color: var(--success-950-100);
}
</style>
