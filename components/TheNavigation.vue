<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { 
  HomeIcon, 
  ChatBubbleLeftRightIcon, 
  EnvelopeIcon, 
  UserGroupIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  ArrowRightOnRectangleIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/vue/24/outline'
import { useAuth } from '~/composables/useAuth'

const props = defineProps<{
  isDark: boolean
}>()

const emit = defineEmits(['toggleTheme'])

const route = useRoute()
const { logout } = useAuth()
const isDropdownOpen = ref(false)

const navItems = [
  { name: 'Home', icon: HomeIcon, route: '/app' },
  { name: 'Messages', icon: EnvelopeIcon, route: '/app/messages', badge: 3 },
  { name: 'Chat', icon: ChatBubbleLeftRightIcon, route: '/app/chat', badge: 2 },
  { name: 'Forum', icon: UserGroupIcon, route: '/app/forum', badge: 5 },
]

const dropdownItems = [
  { name: 'Profile', icon: UserCircleIcon, route: '/app/profile' },
  { name: 'Settings', icon: Cog6ToothIcon, route: '/app/settings' },
  { name: 'Bookmarks', icon: BookmarkIcon, route: '/app/bookmarks' },
  { name: 'Log out', icon: ArrowRightOnRectangleIcon, action: 'logout' },
]

const handleDropdownClick = async (item: { name: string, icon: any, route?: string, action?: string }) => {
  if (item.action === 'logout') {
    await logout()
    navigateTo('/')
  } else if (item.route) {
    navigateTo(item.route)
  }
  closeDropdown()
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 w-full bg-thread-light/80 dark:bg-thread-dark/80 backdrop-blur-sm border-b border-thread-light-border dark:border-thread-border z-20 transition-colors duration-200">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex items-center justify-between h-14">
        <NuxtLink to="/app" class="text-xl font-bold text-thread-primary">DevThreads</NuxtLink>
        
        <div class="flex items-center space-x-6">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.route"
            :class="[
              'flex flex-col items-center group relative',
              route.path === item.route ? 'text-thread-primary' : 'text-gray-500'
            ]"
          >
            <div class="relative">
              <component 
                :is="item.icon" 
                class="w-6 h-6 group-hover:text-thread-primary transition-colors" 
              />
              <!-- Badge Counter -->
              <span 
                v-if="item.badge" 
                class="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-xs rounded-full min-w-[1.25rem] h-5 flex items-center justify-center px-1.5 transform scale-90 font-medium"
              >
                {{ item.badge }}
              </span>
            </div>
            <span class="text-xs mt-0.5 group-hover:text-thread-primary transition-colors">{{ item.name }}</span>
          </NuxtLink>

          <!-- Theme Toggle -->
          <button
            @click="$emit('toggleTheme')"
            class="text-gray-500 hover:text-thread-primary transition-colors"
          >
            <SunIcon v-if="isDark" class="w-6 h-6" />
            <MoonIcon v-else class="w-6 h-6" />
          </button>

          <!-- User Profile Button -->
          <div class="relative">
            <button 
              @click="toggleDropdown"
              class="flex items-center space-x-2 text-gray-500 hover:text-thread-primary transition-colors"
            >
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="Profile"
                class="w-8 h-8 rounded-full"
              />
            </button>

            <!-- Dropdown Menu -->
            <div 
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-thread-light dark:bg-thread-gray rounded-lg shadow-lg border border-thread-light-border dark:border-thread-border py-1 transition-colors duration-200"
            >
              <div class="px-4 py-3 border-b border-thread-light-border dark:border-thread-border">
                <p class="text-sm font-medium">John Developer</p>
                <p class="text-xs text-gray-500">@johndev</p>
              </div>
              
              <div class="py-1">
                <button
                  v-for="item in dropdownItems"
                  :key="item.name"
                  @click="handleDropdownClick(item)"
                  class="w-full px-4 py-2 text-sm text-thread-light-text dark:text-gray-300 hover:bg-thread-light-gray dark:hover:bg-thread-border flex items-center space-x-2 transition-colors duration-200"
                >
                  <component :is="item.icon" class="w-5 h-5" />
                  <span>{{ item.name }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay to close dropdown when clicking outside -->
    <div 
      v-if="isDropdownOpen"
      @click="closeDropdown"
      class="fixed inset-0 z-10"
    ></div>
  </nav>
</template>