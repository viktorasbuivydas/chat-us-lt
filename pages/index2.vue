<script setup>
import { onMounted } from 'vue'
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const user = useSupabaseUser()

onMounted(async () => {
    if (user.value) {
        await navigateTo({ path: '/profile' })

    }
})
</script>

<template>
    hey
</template>