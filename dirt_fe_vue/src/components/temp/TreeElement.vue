<template>
  <div class="-py-2 mb-2" :class="[rootElement ? 'ml-0' : 'ml-8']">
    <div class="flex items-center pl-2">
      <slot name="icon"></slot>
      <div class="flex flex-col px-2">
        <span class="text-lg font-semibold">{{ title }}</span>
        <span class="text-sm text-slate-400 -mt-1" v-if="subtitle">{{
          subtitle
        }}</span>
      </div>
    </div>
    <slot name="children"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    rootElement: { type: Boolean, default: false },
    title: { type: String, required: true },
    subtitle: { type: String },
  },
});
</script>
