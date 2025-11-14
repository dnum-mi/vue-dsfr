<script setup lang="ts">
defineProps({
  error: Object,
})
</script>

<template>
  <NuxtLayout>
    <main
      id="content"
      role="main"
    >
      <div class="fr-container">
        <div
          class="fr-my-7w fr-mt-md-12w fr-mb-md-10w fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-grid-row--center"
        >
          <div
            class="fr-py-0 fr-col-12 fr-col-md-6"
          >
            <template v-if="error?.statusCode === 404">
              <h1>Page non trouvée</h1>
              <p class="fr-text--sm fr-mb-3w">
                Erreur 404
              </p>
              <p class="fr-text--lead fr-mb-3w">
                La page que vous cherchez est introuvable. Excusez-nous pour la gène occasionnée.
              </p>
              <p class="fr-text--sm fr-mb-5w">
                Si vous avez tapé l'adresse web dans le navigateur, vérifiez qu'elle est correcte. La page n’est peut-être plus disponible.
                <br>Dans ce cas, pour continuer votre visite vous pouvez consulter notre page d’accueil, ou effectuer une recherche avec notre moteur de recherche en haut de page.
                <br>Sinon contactez-nous pour que l’on puisse vous rediriger vers la bonne information.
              </p>
            </template>
            <template v-else-if="error?.statusCode === 500">
              <h1>Erreur inattendue</h1>
              <p class="fr-text--sm fr-mb-3w">
                Erreur 500
              </p>
              <p class="fr-text--lead fr-mb-3w">
                Essayez de rafraîchir la page ou bien réessayez plus tard.
              </p>
              <p class="fr-text--sm fr-mb-5w">
                Désolé, le service rencontre un problème, nous travaillons pour le résoudre le plus rapidement possible.
              </p>
            </template>
            <template v-else>
              <h1 class="fr-h1">
                Service indisponible
              </h1>
              <p class="fr-text--xl">
                Le service [Nom du site] rencontre un problème, nous travaillons pour le résoudre le plus rapidement possible.
              </p>
              <p class="fr-text--sm">
                Merci de réessayer plus tard ou de vous rendre sur nos réseaux sociaux, vous serez bientôt en mesure de réutiliser le service.
              </p>
            </template>
            <ul class="fr-btns-group fr-btns-group--inline-md">
              <li>
                <NuxtLink
                  to="/"
                  class="fr-btn"
                >
                  Page d'accueil
                </NuxtLink>
              </li>
              <li>
                <a
                  class="fr-btn fr-btn--secondary"
                  href="#"
                >
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>
          <div
            class="fr-col-12 fr-col-md-3 fr-col-offset-md-1 fr-px-6w fr-px-md-0 fr-py-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fr-responsive-img fr-artwork"
              aria-hidden="true"
              width="160"
              height="200"
              viewBox="0 0 160 200"
            >
              <use
                class="fr-artwork-motif"
                href="/artworks/ovoid.svg#artwork-motif"
              />
              <use
                class="fr-artwork-background"
                href="/artworks/ovoid.svg#artwork-background"
              />
              <g transform="translate(40, 60)">
                <use
                  class="fr-artwork-decorative"
                  href="/artworks/technical-error.svg#artwork-decorative"
                />
                <use
                  class="fr-artwork-minor"
                  href="/artworks/technical-error.svg#artwork-minor"
                />
                <use
                  class="fr-artwork-major"
                  href="/artworks/technical-error.svg#artwork-major"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
