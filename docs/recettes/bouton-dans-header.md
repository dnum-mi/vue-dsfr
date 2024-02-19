# Bouton sans lien dans le header

Il est possible de mettre un bouton parmi les liens rapides qui ne redirigera pas sur une nouvelle page.

Il faut mettre une propriété `button` à `true` et une propriété `onClick` qui sera une fonction qui recevra l’événement de type `MouseEvent`.

Exemple :

::: code-group

```ts
const quickLinks: DsfrHeaderProps['quickLinks'] = [
  // (...)
  {
    label: 'Notifications',
    to: '',
    icon: 'ri-notification-3-line',
    button: true,
    onClick: ($event: MouseEvent) => {
      $event.preventDefault()
      displayNotifications()
    },
  },
  // (...)
]
```

<<< ../../demo-app/App.vue [Code de l’app démo]

:::

Voir l’exemple en live sur l’[application de démo](https://demo.vue-ds.fr).
