<script setup lang="ts">
interface Category {
  id: number
  name: string
  description: string
  topics: number | string
  posts: string
  icon: string
}

defineProps<{
  category: Category
}>()
</script>

<template>
  <div class="bg-thread-light dark:bg-thread-gray rounded-lg p-4 hover:bg-thread-light-gray dark:hover:bg-thread-border transition-colors duration-200 cursor-pointer group border border-thread-light-border dark:border-thread-border">
    <div class="flex items-start space-x-3">
      <span class="text-2xl">{{ category.icon }}</span>
      <div>
        <h3 class="text-lg font-semibold group-hover:text-thread-primary transition-colors">
          {{ category.name }}
        </h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-3">{{ category.description }}</p>
        <div class="flex space-x-4 text-sm text-gray-500">
          <span>{{ category.topics }} topics</span>
          <span>{{ category.posts }} posts</span>
        </div>
      </div>
    </div>
  </div>
</template>