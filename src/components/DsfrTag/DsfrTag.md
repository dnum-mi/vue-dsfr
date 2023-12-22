# Tag - `DsfrTag`

## 🌟 Introduction

Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.

Le tag peut être utilisé dans deux contextes :

- Dans le contenu (carte, en-tête, liste) : il catégorise le contenu auquel il est apposé. Il peut être cliquable ou non cliquable ;

- En tant que filtre (dans une page de résultats de recherche par exemple). Dans ce cas il peut-être :

  - activable comme filtre en place à sélectionner/désélectionner ;
  - supprimable, il sert de rappel à un filtre qui a été coché dans une sidebar ou une liste déroulante.

🏅 La documentation sur l’alerte sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tag)

<VIcon name="vi-file-type-storybook" /> La story sur l’alerte sur le storybook de [VueDsfr](https://vue-dsfr.netlify.app/?path=/docs/composants-dsfrtags--docs)

## 📐 Structure

Il se compose des éléments suivants :

- un libellé obligatoire : soit en utilisant la prop `label` soit en utilisant le slot par défaut ;
- une icône optionnelle : avec la prop `icon` qui peut être soit le nom d’une classe correspondant à une icône du DSFR (elle commence par `'fr-icon-'`), soit le nom d’une icône de `oh-vue-icons` (il faut qu’elle soit enregistrée au préalable, cf. la [documentation sur les icônes](/icones)).
