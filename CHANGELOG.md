## [9.0.2](https://github.com/dnum-mi/vue-dsfr/compare/v9.0.1...v9.0.2) (2026-11-25)

### 🐛 Corrections de bugs

* **DsfrHeader:** 🐛 affiche « République Française » par défaut dans le bloc-marque ([fc491bb](https://github.com/dnum-mi/vue-dsfr/commit/fc491bbe539165df96aea0be64c22b587bc54057)), closes [#1431](https://github.com/dnum-mi/vue-dsfr/issues/1431)
* **DsfrInputGroup:** 🐛 ajoute aria-invalid et ignore un tableau d’erreurs vide ([b76d834](https://github.com/dnum-mi/vue-dsfr/commit/b76d83487316e7aa4f2e0c656826c30541ba0237)), closes [#1433](https://github.com/dnum-mi/vue-dsfr/issues/1433)
* **DsfrSelect:** 🐛 relie le message d’erreur au select avec un identifiant unique ([8b40126](https://github.com/dnum-mi/vue-dsfr/commit/8b401266fc7106b3faab9b15f0880aa3e5a45fcf)), closes [#1432](https://github.com/dnum-mi/vue-dsfr/issues/1432)
* **DsfrTile:** 🐛 n’ajoute l’attribut download que pour une tuile de téléchargement ([7b79589](https://github.com/dnum-mi/vue-dsfr/commit/7b795897c67bcf2c8bc499dfa26106b43d7dd26c)), closes [#1430](https://github.com/dnum-mi/vue-dsfr/issues/1430)

## [9.0.1](https://github.com/dnum-mi/vue-dsfr/compare/v9.0.0...v9.0.1) (2026-11-25)

### 🐛 Corrections de bugs

* **DsfrDataTable:** 🐛 rend le composant générique pour typer les lignes ([3cd59b0](https://github.com/dnum-mi/vue-dsfr/commit/3cd59b0f5c30580fb583ac61b17eaa0901ad3069)), closes [#1427](https://github.com/dnum-mi/vue-dsfr/issues/1427)

## [9.0.0](https://github.com/dnum-mi/vue-dsfr/compare/v8.21.0...v9.0.0) (2026-11-23)

### ⚠ BREAKING CHANGES

* **DsfrDataTable:** 🐛 identifie les lignes par rowKey plutôt que par leur position

### ✨ Nouvelles fonctionnalités

* **DsfrDataTable:** ✨ ajoute row et rowIndex aux props du slot cell ([41cc35e](https://github.com/dnum-mi/vue-dsfr/commit/41cc35ed754715275258d28f821eff6eff9948d3)), closes [#cell](https://github.com/dnum-mi/vue-dsfr/issues/cell) [#1422](https://github.com/dnum-mi/vue-dsfr/issues/1422)

### 🐛 Corrections de bugs

* **DsfrDataTable:** 🐛 aligne selectAll() sur getRowKey() pour la sélection globale ([bc41952](https://github.com/dnum-mi/vue-dsfr/commit/bc4195227db9fb39b410323f8930addbba606711)), closes [#1423](https://github.com/dnum-mi/vue-dsfr/issues/1423) [#1422](https://github.com/dnum-mi/vue-dsfr/issues/1422)
* **DsfrDataTable:** 🐛 corrige la perte de vérification de type sur les props ([836c7d3](https://github.com/dnum-mi/vue-dsfr/commit/836c7d380f177766e4290477dc2d0b5e03929c44)), closes [#1422](https://github.com/dnum-mi/vue-dsfr/issues/1422)
* **DsfrDataTable:** 🐛 identifie les lignes par rowKey plutôt que par leur position ([50e0f0f](https://github.com/dnum-mi/vue-dsfr/commit/50e0f0f270c06c62040d2382a0619caf9fc1920d)), closes [#1422](https://github.com/dnum-mi/vue-dsfr/issues/1422)
* **DsfrDataTable:** 🐛 la propriété cell du slot cell doit être chaine vide au lieu de l'objet row ([158e7fb](https://github.com/dnum-mi/vue-dsfr/commit/158e7fbc8f426e2ae127515750cb3bbfa381f8bf))
* **DsfrDataTable:** 🐛 rend les cellules focusables et copiables seulement sur demande ([bbf8b15](https://github.com/dnum-mi/vue-dsfr/commit/bbf8b15210cbf3ffb13cf10c4bc7dd0b9d099c59)), closes [#1422](https://github.com/dnum-mi/vue-dsfr/issues/1422)
* **DsfrDataTable:** 🐛 transmet la ligne source complète au slot cell ([6bd7ef3](https://github.com/dnum-mi/vue-dsfr/commit/6bd7ef3653dab344a897b14863da7454b417e3dd)), closes [#1423](https://github.com/dnum-mi/vue-dsfr/issues/1423) [#1425](https://github.com/dnum-mi/vue-dsfr/issues/1425)

### 📚 Documentation

* **DsfrDataTable:** 📚 modification de la story DsfrDataTable "Plus complexe" ([444b3c1](https://github.com/dnum-mi/vue-dsfr/commit/444b3c15c0d07dbafa84e45b261e853508fb02f3))

### ✅ Tests

* **DsfrDataTable:** 🚨 ajout test unitaire de cell lorsque la valeur est vide ou undefined ([5b0c7f4](https://github.com/dnum-mi/vue-dsfr/commit/5b0c7f43f3b06cce8d83d929039e79c2d0b3c42c))

## [8.21.0](https://github.com/dnum-mi/vue-dsfr/compare/v8.20.0...v8.21.0) (2026-10-21)

### ✨ Nouvelles fonctionnalités

* **DsfrPictogram:** ✨ ajoute un composant pour afficher un pictogramme seul ([9b4fe1d](https://github.com/dnum-mi/vue-dsfr/commit/9b4fe1d80b3dbd935e6aba447fff563af1d89de2)), closes [#1036](https://github.com/dnum-mi/vue-dsfr/issues/1036)

### 🐛 Corrections de bugs

* **ci:** 🐛 utilise RELEASE_TOKEN pour permettre le push du commit de release sur main ([53f02c9](https://github.com/dnum-mi/vue-dsfr/commit/53f02c9a6b7a2144618326c8fbe177f40b3fee44)), closes [#1409](https://github.com/dnum-mi/vue-dsfr/issues/1409)
* **DsfrDataTable:** 🐛 ajoute manualSort pour désactiver le tri local en mode serveur ([a48b356](https://github.com/dnum-mi/vue-dsfr/commit/a48b356b1fd925146d7ae6adf6b421a51011ec11)), closes [#1403](https://github.com/dnum-mi/vue-dsfr/issues/1403)
* **DsfrNewsLetter:** ♿ rattache le message d’erreur au champ et rend les identifiants uniques ([9d0a343](https://github.com/dnum-mi/vue-dsfr/commit/9d0a34370a7d6c1033b9f129bd1dbb70abaf084f)), closes [#1395](https://github.com/dnum-mi/vue-dsfr/issues/1395)
* **DsfrPictogram:** 🐛 applique svgAttrs et le titre aux pictogrammes inlinés en data URI ([859c7f3](https://github.com/dnum-mi/vue-dsfr/commit/859c7f37584e11ed2a91f8040892c4c00276224f)), closes [#1405](https://github.com/dnum-mi/vue-dsfr/issues/1405)
