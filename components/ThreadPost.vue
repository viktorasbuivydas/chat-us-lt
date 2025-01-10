<script setup lang="ts">
import { ref } from 'vue'
import { HeartIcon as HeartOutline, ChatBubbleLeftIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/vue/24/solid'
import { formatDistanceToNow } from 'date-fns'

const props = defineProps<{
  post: {
    id: number
    author: {
      name: string
      handle: string
      avatar: string
    }
    content: string
    timestamp: Date
    likes: number
    comments: number
    reposts: number
    codeSnippet?: string
  }
}>()

const isLiked = ref(false)
const likeCount = ref(props.post.likes)
const lastTap = ref(0)
const showLikeAnimation = ref(false)

const handleLike = () => {
  if (!isLiked.value) {
    likeCount.value++
    animateLike()
  } else {
    likeCount.value--
  }
  isLiked.value = !isLiked.value
}

const handleDoubleTap = (event: MouseEvent | TouchEvent) => {
  const currentTime = new Date().getTime()
  const tapLength = currentTime - lastTap.value
  
  if (tapLength < 300 && tapLength > 0) {
    if (!isLiked.value) {
      handleLike()
      // Show animation at tap position
      if (event instanceof MouseEvent) {
        showLikeAnimationAt(event.clientX, event.clientY)
      } else if (event instanceof TouchEvent && event.touches.length > 0) {
        const touch = event.touches[0]
        showLikeAnimationAt(touch.clientX, touch.clientY)
      }
    }
  }
  lastTap.value = currentTime
}

const showLikeAnimationAt = (x: number, y: number) => {
  showLikeAnimation.value = true
  setTimeout(() => {
    showLikeAnimation.value = false
  }, 1000)
}

const animateLike = () => {
  showLikeAnimation.value = true
  setTimeout(() => {
    showLikeAnimation.value = false
  }, 1000)
}
</script>

<template>
  <div 
    class="border-b border-thread-light-border dark:border-thread-border p-4 hover:bg-thread-light-gray dark:hover:bg-thread-gray/50 transition-colors duration-200"
    @click="handleDoubleTap"
    @touchstart="handleDoubleTap"
  >
    <div class="flex space-x-3">
      <img :src="post.author.avatar" alt="" class="w-12 h-12 rounded-full">
      <div class="flex-1">
        <div class="flex items-center space-x-2">
          <span class="font-bold">{{ post.author.name }}</span>
          <span class="text-gray-500">@{{ post.author.handle }}</span>
          <span class="text-gray-500">·</span>
          <span class="text-gray-500">{{ formatDistanceToNow(post.timestamp, { addSuffix: true }) }}</span>
        </div>
        
        <p class="mt-2">{{ post.content }}</p>
        
        <div v-if="post.codeSnippet" class="mt-3 bg-thread-light-gray dark:bg-thread-gray rounded-lg p-4">
          <pre class="text-sm overflow-x-auto"><code>{{ post.codeSnippet }}</code></pre>
        </div>

        <div class="flex justify-between mt-4 max-w-md">
          <button class="flex items-center space-x-2 text-gray-500 hover:text-thread-primary transition-colors">
            <ChatBubbleLeftIcon class="w-5 h-5" />
            <span>{{ post.comments }}</span>
          </button>
          <button class="flex items-center space-x-2 text-gray-500 hover:text-thread-primary transition-colors">
            <ArrowPathRoundedSquareIcon class="w-5 h-5" />
            <span>{{ post.reposts }}</span>
          </button>
          <button 
            @click.stop="handleLike"
            class="flex items-center space-x-2 transition-colors"
            :class="isLiked ? 'text-pink-500' : 'text-thread-primary hover:text-pink-500'"
          >
            <component :is="isLiked ? HeartSolid : HeartOutline" 
              class="w-5 h-5 transform transition-transform"
              :class="{ 'scale-125': showLikeAnimation }"
            />
            <span>{{ likeCount }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Like Animation -->
    <div 
      v-if="showLikeAnimation"
      class="fixed pointer-events-none"
      style="left: 50%; top: 50%; transform: translate(-50%, -50%)"
    >
      <HeartSolid 
        class="w-24 h-24 text-pink-500 animate-like opacity-0"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes like-animation {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  15% {
    transform: scale(1.2);
    opacity: 1;
  }
  30% {
    transform: scale(0.95);
  }
  45%, 80% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}

.animate-like {
  animation: like-animation 1s ease-in-out forwards;
}
</style>