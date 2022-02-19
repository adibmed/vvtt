<script lang="ts" setup>
  const features = ['Vue 3', 'Vite', 'TypeScript', 'Vue Router', 'Tailwindcss', 'ESLint + Prettier']
</script>

<template>
  <div class="h-full max-w-3xl mx-auto pt-20 flex flex-col items-center">
    <div class="text-2xl font-bold text-gray-600">Included Features</div>
    <ul class="pt-6">
      <li v-for="(feature, i) in features" :key="i" class="text-xl text-gray-600 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="h-5 w-5 text-amber-600 mr-2"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M14 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8h-2c0 3.32-2.68 6-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6c.43 0 .86.05 1.27.14l1.61-1.6C15.96 2.18 15 2 14 2m6.59 1.58L14 10.17l-2.38-2.38l-1.41 1.42L14 13l8-8m-17.07.82A8.01 8.01 0 0 0 2 12a8 8 0 0 0 8 8c.64 0 1.27-.08 1.88-.23c-1.76-.39-3.38-1.27-4.71-2.48A6.001 6.001 0 0 1 4 12c0-.3.03-.59.07-.89C4.03 10.74 4 10.37 4 10c0-1.44.32-2.87.93-4.18z"
            fill="currentColor"
          ></path>
        </svg>
        <span>{{ feature }}</span>
      </li>
    </ul>
    <div class="text-2xl font-bold text-gray-600 pt-12">Contributors</div>
    <div class="pt-6 w-full flex flex-wrap items-center">
      <img
        class="h-16 w-13 ml-2 mt-2 bg-gray-100 rounded-full"
        src="https://avatars.githubusercontent.com/u/52131981"
        alt=""
      />
      <div v-for="i in 15" :key="i" class="h-16 w-16 ml-2 mt-2 bg-gray-100 rounded-full"></div>
    </div>
    <div class="pt-6 text-xl text-gray-600">We apperciate all your contributions</div>
  </div>
</template>
