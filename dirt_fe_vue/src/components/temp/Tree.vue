<template>
  <tree-root>
    <tree-root v-for="root in treeData">
      <tree-element
        :root-element="root.rootElement"
        :title="root.label"
        :subtitle="root.description"
      >
        <template v-slot:icon>
          <code-bracket-square-icon
            v-if="root.kind === 'file'"
            class="h-8 w-8"
          />
          <folder-icon v-if="root.kind === 'folder'" class="h-8 w-8" />
        </template>
        <tree-element
          :root-element="element.rootElement"
          :title="element.label"
          :subtitle="element.description"
          v-if="root.resources"
          v-for="element in root.resources"
        >
        </tree-element>
      </tree-element>
    </tree-root>
  </tree-root>
</template>

<script lang="ts">
// imports
import { defineComponent } from 'vue';
import { FolderIcon, CodeBracketSquareIcon } from '@heroicons/vue/20/solid';

// Type definitions
type ProjectResource = {
  readonly rootElement?: boolean;
  readonly label: string;
  readonly description: string;
  readonly kind: 'folder' | 'file';
  resources?: Array<ProjectResource>;
};

// Project configuration
import { projectConfig } from '../../../../@dirt_project/dirt.json';
// Sub components
import TreeRoot from './TreeRoot.vue';
import TreeElement from './TreeElement.vue';
export default defineComponent({
  components: {
    CodeBracketSquareIcon,
    FolderIcon,
    TreeRoot,
    TreeElement,
  },
  computed: {
    projectConfig() {
      return projectConfig;
    },
    treeData(): Array<ProjectResource> {
      const data = [
        {
          label: '@dirt_project',
          description: 'Contains project config / settings',
          kind: 'folder',
        },
        {
          label: 'dirt_fe_vue',
          description: 'Contains the Vue app including pages, components, etc.',
          kind: 'folder',
          resources: [
            {
              label: 'src',
              description: 'Frontend source files',
              kind: 'folder',
              resources: [
                {
                  label: 'pages',
                  description:
                    "Contains this application's pages (Inertia views)",
                  kind: 'folder',
                },
                {
                  label: 'components',
                  description:
                    'Contains components used within the application',
                  kind: 'folder',
                },
                {
                  label: 'main.js',
                  description: 'Main entry point of the Inertia application',
                  kind: 'file',
                },
              ],
            },
          ],
        },
        {
          label: this.projectConfig.projectName,
          description: 'Main Django web application',
          kind: 'folder',
        },
      ];

      if (projectConfig.withStorybook) {
        data.unshift({
          label: '.storybook',
          description: 'Contains configuration for StorybookJS',
          kind: 'folder',
        });
      }

      return data;
    },
  },
});
</script>
