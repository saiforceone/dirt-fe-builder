<script lang="ts">
import { defineComponent } from 'vue';
import { DiscordIcon, GithubIcon } from 'vue3-simple-icons';

/**
 * @description This forms the basis for generated controller templates
 */
export default defineComponent({
  components: {
    DiscordIcon,
    GithubIcon,
  },
  props: {
    controllerName: String,
  },
});
</script>

<template>
  <div class="w-full h-full bg-gradient-to-b from-[#02111B] to-[#30292F]">
    <div
      class="flex flex-col container mx-auto md:max-w-5xl gap-y-10 text-center h-full p-4"
    >
      <svg
        class="self-center"
        fill="#fff"
        height="100px"
        width="100px"
        style="margin-top: 1rem"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 490 490"
        xml:space="preserve"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M316.624,0l-18.061,24.729l59.624,43.557L207.064,273.202l-93.413-68.225l-59.774,81.363 c-20.034,27.255-28.212,60.835-23.009,94.549c5.248,34.043,23.428,63.96,51.207,84.248C105.039,481.912,131.757,490,158.205,490 c39.455,0,78.298-17.986,103.251-51.94l59.848-81.422l-89.521-65.383L382.903,86.342l59.697,43.611l18.06-24.729L316.624,0z M236.786,419.94c-31.741,43.163-93.039,52.328-136.651,20.468c-21.156-15.444-35.015-38.244-39.007-64.184 c-3.947-25.611,2.228-51.102,17.418-71.764l41.713-56.754l158.195,115.54L236.786,419.94z"
          ></path>
        </g>
      </svg>
      <h1 class="text-white text-2xl sm:text-3xl md:text-7xl font-heading">
        Controller / Django App: {{ controllerName }}
      </h1>
      <h3 class="text-2xl sm:text-3xl text-white font-heading underline">
        General Information
      </h3>
      <div class="flex flex-col self-center gap-y-2 w-4/5 md:w-3/5">
        <p class="text-white">
          This is the default page for the generated app. Replace the contents
          of this page with whatever you want.
        </p>
        <p class="text-white">
          To change the props that are passed to this inertia view, edit the
          dictionary returned by the following file:
          <span class="font-semibold bg-blue-800 px-1 rounded">
            {{ controllerName + '/views.py' }}
          </span>
        </p>
      </div>
      <h3 class="text-2xl sm:text-3xl text-white font-heading underline">
        Database Information
      </h3>
      <div class="flex flex-col self-center w-4/5 md:w-3/5">
        <p class="text-white">
          To make use of the models file and run db migrations
          <span class="font-semibold bg-blue-800 px-1 rounded">
            {{ controllerName + '/models.py' }}
          </span>
          , you will need to add
          <span class="text-gray-100">{{ controllerName }}</span>
          to
          <span class="font-semibold text-white px-1 rounded bg-blue-800">
            INSTALLED_APPS </span
          >in your settings files as shown in the example below
        </p>
        <div
          class="mt-1 text-md sm:text-base inline-flex text-left w-fit self-center items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6"
        >
          <span class="flex-1">
            <span>INSTALLED_APPS += </span>[
            <span class="text-orange-600 font-semibold">
              '{{ controllerName }}'
            </span>
            ]
          </span>
        </div>
      </div>
      <h3 class="text-2xl sm:text-3xl text-white font-heading underline">
        Resources
      </h3>
      <p class="text-white">
        Feeling stuck or have questions? Try the links below
      </p>
      <div class="flex self-center gap-x-8 text-white">
        <a
          class="flex text-white items-center hover:text-white gap-x-2"
          target="_blank"
          href="https://github.com/saiforceone/dirt-cli"
        >
          <GithubIcon :size="'32'" style="fill: white" />
          <span>Git D.I.R.T-y</span>
        </a>
        <a
          class="flex text-white items-center hover:text-white gap-x-2"
          target="_blank"
          href="https://discord.gg/sY3a5VN3y9"
        >
          <DiscordIcon :size="'32'" style="fill: white" /> PCE Discord
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
