<template>
  <table class="simple-table">
    <caption class="caption">
      Derniers utilisateurs
    </caption>
    <thead>
      <tr
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
    <tbody>
      <tr
        v-for="(row, i) in rows"
        :key="i"
        class="body-row"
      >
        <SimpleTableCell
          v-for="(field, j) in row"
          :key="`${i}-${j}`"
          :field="field"
        />
      </tr>
    </tbody>
  </table>
</template>

<style src="./table.css" />
