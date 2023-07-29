import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * ReactJS Setup
 */

// import react from '@vitejs/plugin-react';
//
// module.exports = {
//   plugins: [
//     tsconfigPaths(),
//     react({
//       include: '**/*.disabled',
//     }),
//   ],
//   root: resolve('./dirt_fe_react'),
//   base: '/static/',
//   server: {
//     host: '127.0.0.1',
//     port: 3000,
//     open: false,
//     watch: {
//       usePolling: true,
//       disableGlobbing: false,
//     },
//   },
//   resolve: {
//     extensions: ['.js', '.json', '.ts', '.tsx'],
//   },
//   build: {
//     outDir: resolve('./dirt_fe_react/dist'),
//     assetsDir: '',
//     manifest: true,
//     emptyOutDir: true,
//     target: 'es2015',
//     rollupOptions: {
//       input: {
//         main: resolve('./dirt_fe_react/src/main.jsx'),
//       },
//       output: {
//         chunkFileNames: undefined,
//       },
//     },
//   },
// };

/**
 * Vue JS Setup
 */

import Vue from '@vitejs/plugin-vue';
import * as path from 'path';
module.exports = {
  plugins: [tsconfigPaths(), Vue()],
  root: resolve('./dirt_fe_vue'),
  base: '/static/',
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './dirt_fe_vue/src'),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  build: {
    outDir: resolve('./dirt_fe_vue/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./dirt_fe_vue/src/main.js'),
      },
      output: {
        chunkFileNames: '[name].js',
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
};
