# Icônes locales

Cette solution permet d'éviter les appels réseau vers `https://api.iconify.design/` en incluant les icônes directement dans le bundle.

## 🚀 Test de la solution

1. Visitez: <http://localhost:5174/icons-test>
2. Ouvrez les outils de développement (Réseau)
3. Rechargez la page
4. Vérifiez qu'aucun appel vers `api.iconify.design` n'est effectué

## ✅ Avantages

- ✅ **Pas d'appels réseau** : Les icônes sont incluses dans le bundle
- ✅ **Performance** : Chargement instantané des icônes
- ✅ **Hors ligne** : Fonctionne sans connexion internet
- ✅ **Sécurité** : Pas de dépendance externe

## 📦 Taille du bundle

La taille du bundle augmente légèrement selon le nombre d'icônes incluses :

- ~1KB par icône (gzippé)
- Solution recommandée pour < 50 icônes

## 🔄 Mise à jour des icône

Pour ajouter de nouvelles icônes :

1. Modifier `scripts/icons.js`
2. Exécuter : `npx vue-dsfr-icons -s scripts/icons.js -t src/icon-collections.ts`
3. Les nouvelles icônes seront automatiquement disponibles
