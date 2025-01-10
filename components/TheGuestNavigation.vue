<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits(['toggleTheme'])
</script>

<template>
  <nav class="fixed top-0 w-full bg-thread-light/80 dark:bg-thread-dark/80 backdrop-blur-sm border-b border-thread-light-border dark:border-thread-border z-20 transition-colors duration-200">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex items-center justify-between h-14">
        <NuxtLink to="/" class="text-xl font-bold text-thread-primary">DevThreads</NuxtLink>
        
        <div class="flex items-center space-x-6">
          <NuxtLink 
            to="/auth/login"
            class="text-gray-500 hover:text-thread-primary transition-colors"
          >
            Sign in
          </NuxtLink>

          <!-- Theme Toggle -->
          <button
            @click="$emit('toggleTheme')"
            class="text-gray-500 hover:text-thread-primary transition-colors"
          >
            <SunIcon v-if="isDark" class="w-6 h-6" />
            <MoonIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>