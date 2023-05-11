// .storybook/main.ts
import type { StorybookConfig } from "@storybook/vue3-vite";

// module.exports = {
//   stories: [
//     // '../dirt_fe_react/src/**/*.stories.mdx',
//     // '../dirt_fe_react/src/**/*.stories.@(js|jsx|ts|tsx)',
//     '../dirt_fe_vue/src/**/*.stories.@(js|ts)',
//   ],
//   addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
//   core: {
//     builder: '@storybook/builder-vite',
//   },
//   // typescript: {
//   //   reactDocgen: 'react-docgen',
//   // },
// };

/**
 * Vue Specific Settings / Config
 */
const config: StorybookConfig = {
  stories: ["../dirt_fe_vue/src/**/*.mdx", "../dirt_fe_vue/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
