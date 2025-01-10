<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <p class="text-xl text-gray-500 mb-16 text-center max-w-md mx-auto">
    {{ text }}
  </p>
</template>