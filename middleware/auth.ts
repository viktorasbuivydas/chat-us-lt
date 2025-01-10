import { useAuth } from '~/composables/useAuth'
import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  // If route starts with /app and user is not authenticated
  if (to.path.startsWith('/app') && !isAuthenticated.value) {
    return navigateTo('/auth/login')
  }

  // If user is authenticated and tries to access auth pages
  if (to.path.startsWith('/auth') && isAuthenticated.value) {
    return navigateTo('/app')
  }
})