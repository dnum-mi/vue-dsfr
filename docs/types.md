# Tous les types de la bibliothèque VueDsfr

## Composables

## Types en commun

<a id="title-tag"></a>`TitleTag`: `'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'`

## Props des composants

<details>
<summary><code>DsfrAlertProps</code></summary>

```typescript
type DsfrAlertProps = {
  closed?: boolean
  closeable?: boolean
  id?: string
  title?: string
  description: string
  small?: boolean
  titleTag?: TitleTag
  type?: DsfrAlertType
}
```

</details>

<details>
  <summary><code>DsfrBadgeProps</code></summary>

```typescript
type DsfrBadgeProps = {
  label: string
  type?: 'success' | 'error' | 'new' | 'info' | 'warning' | undefined,
  noIcon?: boolean,
  small?: boolean,
  ellipsis?: boolean,
}
```

</details>
