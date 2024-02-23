<script lang="ts" setup>

</script>

<template>
  <DsfrTable
    :title="title"
    :headers="headers"
  >
    <DsfrTableRow
      :row-data="rowData"
      :row-attrs="rowAttrs"
    />
  </DsfrTable>
</template>
