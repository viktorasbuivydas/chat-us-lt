<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

// Initialize theme from localStorage or system preference
const isDark = ref(false)

onMounted(() => {
  isDark.value = localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  applyTheme(isDark.value)
})

// Watch for theme changes
watch(isDark, (newValue) => {
  applyTheme(newValue)
})

// Function to apply theme and save preference
const applyTheme = (dark: boolean) => {
  if (process.client) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="min-h-screen bg-thread-light dark:bg-thread-dark text-thread-light-text dark:text-thread-text transition-colors duration-200">
    <TheNavigation @toggle-theme="toggleTheme" :is-dark="isDark" />
    <main class="pt-20">
      <slot />
    </main>
  </div>
</template>