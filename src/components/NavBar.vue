<script lang="ts" setup>
  const title = 'Starter Kit'
</script>

<template>
  <nav class="flex items-center justify-between border-b-2 flex-wrap bg-white py-4 px-6">
    <router-link to="/">
      <div
        class="flex items-center flex-shrink-0 text-gray-600 hover:text-amber-600 delay-100 mr-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="fill-current h-8 w-8 mr-2"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m-7-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-2.5-4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-5 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m5 8c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-5 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m2.5 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m2.4-15.8L13.6 1c-2.2 1-2.4 4.6-2.4 5h1.5c.1-.8.4-3.3 1.7-3.8z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="font-medium text-xl tracking-tight">{{ title }}</span>
      </div>
    </router-link>
    <div class="flex-grow flex items-center w-auto">
      <div class="flex flex-grow">
        <div class="inline-block text-gray-600 hover:text-amber-600 delay-100 mr-4">
          <router-link to="/">Home</router-link>
        </div>
        <div class="inline-block text-gray-600 hover:text-amber-600 delay-100 mr-4">
          <router-link to="/about">About</router-link>
        </div>
      </div>
      <div>
        <a
          class="flex items-center text-gray-600 hover:text-amber-600 delay-100"
          href="https://github.com/adibemohamed/vue3-starter-kit"
          target="_blank"
        >
          <span class="mr-2">Github</span>
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            data-v-95c4d90e=""
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            ></path>
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            ></polygon>
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>
