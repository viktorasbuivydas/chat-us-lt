<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({
  layout: 'guest'
})

const email = ref('')
const password = ref('')
const { login } = useAuth()

const handleEmailLogin = async () => {
  const success = await login(email.value, password.value)
  if (success) {
    navigateTo('/app')
  }
}

const handleGoogleLogin = () => {
  // Implement Google login logic
  console.log('Google login')
}

const handleGithubLogin = () => {
  // Implement GitHub login logic
  console.log('GitHub login')
}
</script>

<template>
  <div class="min-h-[calc(100vh-12rem)] flex items-center justify-center">
    <div class="w-full max-w-md">
      <div class="bg-thread-light dark:bg-thread-gray rounded-lg shadow-lg p-8 border border-thread-light-border dark:border-thread-border">
        <h2 class="text-2xl font-bold text-center mb-8">Welcome back</h2>
        
        <!-- Email Login Form -->
        <form @submit.prevent="handleEmailLogin" class="space-y-4 mb-6">
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 focus:outline-none focus:border-thread-primary transition-colors"
            >
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 focus:outline-none focus:border-thread-primary transition-colors"
            >
          </div>
          
          <button
            type="submit"
            class="w-full bg-thread-primary hover:bg-thread-primary-hover text-white rounded-lg py-2 transition-colors"
          >
            Sign in
          </button>
        </form>
        
        <!-- Social Login -->
        <div class="relative mb-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-thread-light-border dark:border-thread-border"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-thread-light dark:bg-thread-gray text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="handleGoogleLogin"
            class="flex items-center justify-center space-x-2 border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 hover:bg-thread-light-gray dark:hover:bg-thread-border transition-colors"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5">
            <span>Google</span>
          </button>
          
          <button
            @click="handleGithubLogin"
            class="flex items-center justify-center space-x-2 border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 hover:bg-thread-light-gray dark:hover:bg-thread-border transition-colors"
          >
            <img src="https://github.com/favicon.ico" alt="GitHub" class="w-5 h-5">
            <span>GitHub</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>