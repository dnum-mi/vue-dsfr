<script lang="ts" setup>
import type { DsfrDataTableColumn } from '../DsfrDataTable.types'

import DsfrDataTable from '../DsfrDataTable.vue'

const columns: DsfrDataTableColumn[] = [
  { key: 'agent', label: 'Agent', isHeader: true, fixed: true },
  { key: 'service', label: 'Service', fixed: true },
  { key: 'site', label: 'Site' },
  { key: 'poste', label: 'Poste' },
  { key: 'email', label: 'Email' },
  { key: 'telephone', label: 'Téléphone' },
  { key: 'statut', label: 'Statut' },
]

const rows = [
  { agent: 'Camille Martin', service: 'Numerique', site: 'Paris', poste: 'Dev front', email: 'camille.martin@example.fr', telephone: '01 44 10 00 01', statut: 'Actif' },
  { agent: 'Thomas Petit', service: 'Juridique', site: 'Lille', poste: 'Juriste', email: 'thomas.petit@example.fr', telephone: '03 20 10 00 02', statut: 'Actif' },
  { agent: 'Nadia Lopez', service: 'RH', site: 'Bordeaux', poste: 'Chargee RH', email: 'nadia.lopez@example.fr', telephone: '05 56 10 00 03', statut: 'Absence' },
  { agent: 'Ines Robert', service: 'Numerique', site: 'Lyon', poste: 'UX designer', email: 'ines.robert@example.fr', telephone: '04 78 10 00 04', statut: 'Actif' },
  { agent: 'Yanis Dupont', service: 'Finances', site: 'Paris', poste: 'Controleur', email: 'yanis.dupont@example.fr', telephone: '01 44 10 00 05', statut: 'Actif' },
]
</script>

<template>
  <div class="fr-container fr-my-2v w-[760px]">
    <DsfrDataTable
      title="Démo colonnes fixes"
      :columns="columns"
      :rows="rows"
      no-caption
      vertical-borders
    />
  </div>
</template>
