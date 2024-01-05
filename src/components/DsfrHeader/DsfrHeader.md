# En-tête - DsfrHeader

## 🌟 Introduction

Salut les développeurs ! Découvrez `DsfrHeader`, le composant d'en-tête ultra-flexible pour vos applications Vue. Conçu pour mettre en valeur votre service et vos partenaires avec style, il intègre une barre de recherche, des liens rapides, et même un emplacement pour un logo personnalisé. Préparez-vous à donner à votre application une tête bien pensée !

## Structure

L’en-tête est composé :

- du bloc Marque - obligatoire.
- du nom de site - optionnel.
- d’une ‘baseline’, sous le nom de site - optionnelle.
- d’une partie fonctionnelle - proposant des accès rapides et/ou le moteur de recherche - adaptée aux besoins particuliers de chaque site - optionnelle.

L’en-tête est sur fond blanc en thème clair et sur fond G800 en thème sombre.

## 🛠️ Props

| Nom                   | Type                          | Défaut   | Obligatoire | Description                                              |
|-----------------------|-------------------------------|----------|-------------|----------------------------------------------------------|
| serviceTitle          | `String`                      | `undefined` |             | Titre du service affiché dans l'en-tête.                 |
| serviceDescription    | `String`                      | `undefined` |             | Description courte du service.                           |
| homeTo                | `String`                      | `'/'`      |             | Lien de la page d'accueil.                               |
| logoText              | `String` \| `String[]`        | `'Gouvernement'` |        | Texte ou texte alternatif du logo.                       |
| modelValue            | `String`                      | `''`       |             | Valeur pour la barre de recherche.                       |
| operatorImgAlt        | `String`                      | `''`       |             | Texte alternatif pour l'image de l'opérateur.            |
| operatorImgSrc        | `String`                      | `''`       |             | Source de l'image de l'opérateur.                        |
| operatorImgStyle      | `StyleValue`                  | `() => ({})` |           | Style CSS pour l'image de l'opérateur.                   |
| placeholder           | `String`                      | `'Rechercher...'` |        | Placeholder pour la barre de recherche.                  |
| quickLinks            | `DsfrHeaderMenuLinkProps[]`   | `() => []` |             | Liens rapides à afficher dans l'en-tête.                 |
| searchLabel           | `String`                      | `'Recherche'` |            | Label pour la barre de recherche.                        |
| quickLinksAriaLabel   | `String`                      | `'Menu secondaire'` |       | Label ARIA pour les liens rapides.                       |
| showSearch            | `Boolean`                     | `false`    |             | Affiche ou non la barre de recherche.                    |
| showBeta              | `Boolean`                     | `false`    |             | Affiche ou non l'indicateur BETA.                        |

## 📡 Events

| Nom               | Description                                      |
|-------------------|--------------------------------------------------|
| update:modelValue | Émis lors de la mise à jour de la barre de recherche. |
| search            | Émis lorsqu'une recherche est effectuée.         |

## 🧩 Slots

| Nom                  | Description                                                    |
|----------------------|----------------------------------------------------------------|
| operator             | Slot nommé pour le logo de l'opérateur.                        |
| before-quick-links   | Slot pour ajouter du contenu avant les liens rapides.          |
| after-quick-links    | Slot pour ajouter du contenu après les liens rapides.          |
| mainnav              | Slot nommé pour le menu de navigation principal.               |
| default              | Slot par défaut pour le contenu supplémentaire dans l'en-tête. |

## 📝 Exemples

1. **En-tête Simple :**

   ```vue
   <DsfrHeader serviceTitle="Mon Application" />
