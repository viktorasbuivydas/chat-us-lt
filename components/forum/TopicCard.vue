<script setup lang="ts">
interface Topic {
  id: number
  title: string
  author: {
    name: string
    avatar: string
  }
  replies: number
  views: string
  lastActivity: string
  category: string
  tags: string[]
}

defineProps<{
  topic: Topic
}>()
</script>

<template>
  <div class="p-4 hover:bg-thread-light-gray dark:hover:bg-thread-border transition-colors duration-200 cursor-pointer">
    <div class="flex items-start space-x-4">
      <img 
        :src="topic.author.avatar" 
        :alt="topic.author.name"
        class="w-10 h-10 rounded-full"
      >
      <div class="flex-1">
        <h3 class="font-semibold mb-1 hover:text-thread-primary transition-colors">
          {{ topic.title }}
        </h3>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span 
            v-for="tag in topic.tags" 
            :key="tag"
            class="px-2 py-0.5 bg-thread-light-gray dark:bg-thread-border rounded-full text-xs text-gray-500"
          >
            {{ tag }}
          </span>
        </div>
        <div class="flex items-center space-x-4 text-sm">
          <span class="text-gray-500">by {{ topic.author.name }}</span>
          <span class="text-gray-500">{{ topic.category }}</span>
        </div>
      </div>
      <div class="text-right text-sm">
        <p class="text-gray-500">{{ topic.replies }} replies</p>
        <p class="text-gray-500">{{ topic.views }} views</p>
        <p class="text-gray-500">{{ topic.lastActivity }}</p>
      </div>
    </div>
  </div>
</template>