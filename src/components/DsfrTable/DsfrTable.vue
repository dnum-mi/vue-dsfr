<template>
  <div
    class="fr-table"
    :class="{ 'fr-table--no-caption': noCaption }"
  >
    <table
      v-if="isWithContent"
      class="simple-table"
    >
      <caption class="caption">
        {{ title }}
      </caption>
      <thead>
        <tr
          v-if="headers"
          class="header"
        >
          <th
            v-for="header in headers"
            :key="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody v-if="rows">
        <tr
          v-for="(row, i) in rows"
          :key="i"
          class="body-row"
        >
          <DsfrTableCell
            v-for="(field, j) in row"
            :key="`${i}-${j}`"
            :field="field"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import DsfrTableCell from './DsfrTableCell.vue'

export default defineComponent({
  name: 'DsfrTable',

  components: {
    DsfrTableCell,
  },

  props: {
    title: {
      type: String,
      default: undefined,
    },
    headers: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
    noCaption: Boolean,
  },

  computed: {
    isWithContent () {
      return this.headers?.length || this.rows?.length
    },
  },
})
</script>

<style src="./table.css" />

<style scoped>
.fr-table td {
  color: var(--g800);
}
</style>
