<script lang="ts" setup>
  import SocialMedia from './SocialMedia.vue'
  import ThemeToggler from './ThemeToggler.vue'
</script>

<template>
  <nav
    class="z-50 backdrop-filter backdrop-blur-md py-1 pt-4 dark:bg-c-gray dark:border-gray-800 px-2 sm:px-0"
  >
    <div class="flex items-center px-1 mx-auto max-w-7xl sm:px-3 lg:px-6 py-4">
      <div class="flex-1">
        <span class="text-lg font-semibold text-gray-700 dark:text-gray-200"
          ><router-link to="/">Adibe Mohamed</router-link></span
        >
      </div>
      <div class="flex-1 flex items-center justify-end">
        <div class="pl-4 text-gray-500 hover:text-green-400 text-lg dark:text-gray-300">
          <router-link to="/blog">blog</router-link>
        </div>
        <social-media />
        <theme-toggler />
      </div>
    </div>
  </nav>
</template>
