<template>
  <nav>
    <ul class="flex space-x-4 p-2">
      <li>
        <nuxt-link to ="/about" class="link text-primary">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog" class="link">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/projects" class="link">Projects</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link{
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800
}

</style>
<script setup lang="ts">
</script>