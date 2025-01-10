<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h1 class="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-thread-primary to-blue-600 text-transparent bg-clip-text text-center">
    {{ text }}
  </h1>
</template>