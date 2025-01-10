<script setup lang="ts">
interface Message {
  id: number
  user: {
    name: string
    avatar: string
    online: boolean
  }
  lastMessage: string
  timestamp: string
  unread: boolean
}

defineProps<{
  message: Message
}>()
</script>

<template>
  <button class="w-full p-4 bg-thread-light dark:bg-thread-gray hover:bg-thread-light-gray dark:hover:bg-thread-border rounded-lg transition-colors duration-200 text-left border border-thread-light-border dark:border-thread-border">
    <div class="flex items-center space-x-3">
      <div class="relative">
        <img :src="message.user.avatar" alt="" class="w-12 h-12 rounded-full">
        <div 
          v-if="message.user.online"
          class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-thread-light dark:border-thread-dark"
        ></div>
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <span class="font-semibold group-hover:text-thread-primary transition-colors">{{ message.user.name }}</span>
          <span class="text-sm text-gray-500">{{ message.timestamp }}</span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{{ message.lastMessage }}</p>
      </div>
      <div 
        v-if="message.unread"
        class="w-2 h-2 bg-thread-primary rounded-full"
      ></div>
    </div>
  </button>
</template>