<script setup lang="ts">
import type { DsfrTabsProps } from '../../index'
import { DsfrTabContent, DsfrTabs, useTabs } from '../../index'

const { ascendant, selected, select } = useTabs(true, 0)

const tabListName = 'Onglets'

const tabTitles: DsfrTabsProps['tabTitles'] = [
  {
    title: 'Informations générales',
    tabId: 'tab-info-gen',
    panelId: 'panel-info-gen',
  },
  {
    title: 'Document(s)',
    tabId: 'tab-info-gen',
    panelId: 'panel-info-gen',
  },
]
</script>

<template>
  <div class="fr-container fr-my-2w">
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :initial-selected-index="selected"
      @select-tab="select"
    >
      <DsfrTabContent
        :panel-id="tabTitles[0].panelId"
        :tab-id="tabTitles[0].tabId"
        :selected="selected === 0"
        :asc="ascendant"
      >
        <p>Contenu 1 avec d'autres composants</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum consequuntur pariatur nesciunt,
          possimus sunt mollitia officiis quam reiciendis. Eaque nulla eos, inventore obcaecati expedita
          velit libero repudiandae exercitationem! Culpa, atque.
        </p>
      </DsfrTabContent>
      <DsfrTabContent
        :panel-id="tabTitles[1].panelId"
        :tab-id="tabTitles[1].tabId"
        :selected="selected === 1"
        :asc="ascendant"
      >
        <p>Contenu 2 avec d'autres composants</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsa, fuga ipsam quae eveniet nam officiis,
          ducimus numquam, officia beatae nobis voluptates quibusdam repudiandae quam facere maiores repellendus nulla nihil.
        </p>
      </DsfrTabContent>
    </DsfrTabs>
  </div>
</template>
