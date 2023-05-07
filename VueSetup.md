Install dependencies

```shell
# Install the dependencies for Vue support
npm i -D @inertia/vue @vitejs/plugin-vue vue3-simple-icons vue
```

- Update `tailwind.config.js` to include `dirt_fe_vue/src/**/*.vue` in `content` property
- Update `tsconfig.json` to include Vue sources `dirt_fe_vue/src` in `includes` property

- Update Vite Config to work with Vue