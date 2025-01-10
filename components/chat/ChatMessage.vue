<script setup lang="ts">
interface ChatMessage {
  id: number
  content: string
  author: string
  avatar: string
  timestamp: string
}

defineProps<{
  message: ChatMessage
}>()
</script>

<template>
  <div class="flex items-start space-x-3 group hover:bg-thread-light-gray dark:hover:bg-thread-border rounded-lg p-2 transition-colors duration-200">
    <img :src="message.avatar" alt="" class="w-8 h-8 rounded-full">
    <div>
      <div class="flex items-center space-x-2">
        <span class="font-semibold group-hover:text-thread-primary transition-colors">{{ message.author }}</span>
        <span class="text-xs text-gray-500">{{ message.timestamp }}</span>
      </div>
      <p class="text-gray-600 dark:text-gray-300">{{ message.content }}</p>
    </div>
  </div>
</template>