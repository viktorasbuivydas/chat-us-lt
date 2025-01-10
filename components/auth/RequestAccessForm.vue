<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

const name = ref('')
const email = ref('')
const reason = ref('')
const isSubmitted = ref(false)

const { requestAccess } = useAuth()

const handleSubmit = async () => {
  if (name.value && email.value && reason.value) {
    const success = await requestAccess(name.value, email.value, reason.value)
    if (success) {
      isSubmitted.value = true
    }
  }
}
</script>

<template>
  <div>
    <div v-if="!isSubmitted">
      <h2 class="text-2xl font-bold mb-8">Request Access</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-sm font-medium mb-2">Name</label>
          <input
            v-model="name"
            type="text"
            required
            class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-3 focus:outline-none focus:border-thread-primary transition-colors"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-3 focus:outline-none focus:border-thread-primary transition-colors"
          >
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Why would you like to join?</label>
          <textarea
            v-model="reason"
            required
            rows="4"
            class="w-full bg-thread-light-gray dark:bg-thread-dark border border-thread-light-border dark:border-thread-border rounded-lg px-4 py-3 focus:outline-none focus:border-thread-primary transition-colors"
          ></textarea>
        </div>
        
        <button
          type="submit"
          class="w-full bg-thread-primary hover:bg-thread-primary-hover text-white rounded-lg py-3 mt-8 transition-colors font-medium"
        >
          Submit Request
        </button>
      </form>
    </div>
    
    <div v-else class="text-center">
      <h2 class="text-2xl font-bold mb-4">Thank you for your interest! 🎉</h2>
      <p class="text-gray-500">We'll review your request and get back to you soon.</p>
    </div>
  </div>
</template>