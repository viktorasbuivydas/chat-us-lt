<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'guest'
})

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
  // Implement registration logic
  console.log('Register:', { name: name.value, email: email.value, password: password.value })
}

const handleGoogleRegister = () => {
  // Implement Google registration logic
  console.log('Google register')
}

const handleGithubRegister = () => {
  // Implement GitHub registration logic
  console.log('GitHub register')
}
</script>

<template>
  <div class="min-h-[calc(100vh-12rem)] flex items-center justify-center">
    <div class="w-full max-w-md">
      <div class="bg-thread-light dark:bg-thread-gray rounded-lg shadow-lg p-8 border border-thread-light-border dark:border-thread-border">
        <h2 class="text-2xl font-bold text-center mb-8">Create your account</h2>
        
        <!-- Registration Form -->
        <form @submit.prevent="handleRegister" class="space-y-4 mb-6">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input
              v-model="name"
              type="text"
              required
              class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 focus:outline-none focus:border-thread-primary transition-colors"
            >
          </div>
          
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
          
          <div>
            <label class="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              required
              class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 focus:outline-none focus:border-thread-primary transition-colors"
            >
          </div>
          
          <button
            type="submit"
            class="w-full bg-thread-primary hover:bg-thread-primary-hover text-white rounded-lg py-2 transition-colors"
          >
            Create account
          </button>
        </form>
        
        <!-- Social Registration -->
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
            @click="handleGoogleRegister"
            class="flex items-center justify-center space-x-2 border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 hover:bg-thread-light-gray dark:hover:bg-thread-border transition-colors"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5">
            <span>Google</span>
          </button>
          
          <button
            @click="handleGithubRegister"
            class="flex items-center justify-center space-x-2 border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-2 hover:bg-thread-light-gray dark:hover:bg-thread-border transition-colors"
          >
            <img src="https://github.com/favicon.ico" alt="GitHub" class="w-5 h-5">
            <span>GitHub</span>
          </button>
        </div>
        
        <p class="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <NuxtLink to="/auth/login" class="text-thread-primary hover:underline">Sign in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>