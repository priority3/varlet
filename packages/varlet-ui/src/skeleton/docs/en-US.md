# Skeleton

### Intro
#### Display some placeholder elements with transition effects to optimize your loading process

### Install

```js
import { createApp } from 'vue';
import { Skeleton } from '@varlet/ui';

createApp().use(Skeleton)
```

### Basic Use

```html
<var-skeleton :loading="loading">Loading Data</var-skeleton>
```

```js
export default {
  setup() {
    const loading = ref(true)

    return { loading }
  },
}
```

### Display Title

```html
 <var-skeleton title :loading="loading">Loading Data</var-skeleton>
```

```js
export default {
  setup() {
    const loading = ref(true)

    return { loading }
  },
}
```

### Custom Rows Height

```html
<var-skeleton
  title
  :rows="3"
  :loading="loading"
  :rows-width="['200px', '100px', '50px']"
>
	Loading Data
</var-skeleton>
```

```js
export default {
  setup() {
    const loading = ref(true)

    return { loading }
  },
}
```

### Display Avatar

```html
<var-skeleton
  title
  avatar
  :rows="3"
  :loading="loading"
>
	Loading Data
</var-skeleton>
```

```js
export default {
  setup() {
    const loading = ref(true)

    return { loading }
  },
}
```

### Display Card

```html
<var-skeleton
  title
  avatar
  card
  :rows="3"
  :loading="loading"
>
  Loading Data
</var-skeleton>
```

```js
export default {
  setup() {
    const loading = ref(true)

    return { loading }
  },
}
```

### Fullscreen Mode

```html
<var-button type="danger" @click="loading = !loading">
	Toggle Fullscreen Mode
</var-button>
<var-skeleton fullscreen :loading="loading" />
```

```js
export default {
  setup() {
    const loading = ref(true)

    return { loading }
  },
}
```

## API

### Props

| Prop | Description | Type | Default | 
| --- | --- | --- | --- | 
| `loading` | Loading Status Set to `true` to turn on the skeleton | _boolean_ | `true` |
| `title` | Whether to display the title | _boolean_ | `true` |
| `card` | Whether to display the card | _boolean_ | `true` |
| `avatar` | Whether to display the avatar | _boolean_ | `true` |
| `fullscreen` | Whether to enable fullscreen mode | _boolean_ | `true` |
| `title-width` | Title Width | _number \| string_ | `50%` |
| `card-height` | Card Height | _number \| string_ | `160px` |
| `avatar-size` | Avatar size | _number \| string_ | `34px` |
| `rows` | The paragraph number of rows | _number \| string_ | `3` |
| `rows-width` | The width of each line of a paragraph | _number \| string_ | `['12px', '12px', '12px']` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| `default` | 加载成功后显示的内容 | `-` |

### Theme Variables
#### The following LESS variables can be overridden at build time to modify the theme style

| Variable | Default |
| --- | --- |
| `@skeleton-content-padding` | `16px` |
| `@skeleton-card-height` | `160px` |
| `@skeleton-card-border-radius` | `4px` |
| `@skeleton-card-margin-bottom` | `16px` |
| `@skeleton-card-background-color` | `rgba(0, 0, 0, 0.12)` |
| `@skeleton-animation-background` | `linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))` |
| `@skeleton-avatar-size` | `34px` |
| `@skeleton-avatar-margin-right` | `16px` |
| `@skeleton-avatar-background-color` | `rgba(0, 0, 0, 0.12)` |
| `@skeleton-title-width` | `50%` |
| `@skeleton-title-border-radius` | `10px` |
| `@skeleton-title-background-color` | `rgba(0, 0, 0, 0.12)` |
| `@skeleton-row-height` | `12px` |
| `@skeleton-row-border-radius` | `10px` |
| `@skeleton-row-margin-top` | `10px` |