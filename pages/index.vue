<script setup>
import LayoutGradientTitle from '~/components/layout/GradientTitle.vue'
import LayoutSubTitle from '~/components/layout/SubTitle.vue'
import AuthRequestAccessForm from '~/components/auth/RequestAccessForm.vue'

definePageMeta({
    layout: 'guest',
    middleware: ['auth']
})
</script>

<template>
    <div class="flex flex-col justify-center items-center px-4 py-20 min-h-[calc(100vh-5rem)]">
        <div class="w-full max-w-lg">
            <LayoutGradientTitle text="Join DevThreads" />
            <LayoutSubTitle text="Connect with fellow developers, share your journey, and learn from the community." />

            <div
                class="bg-thread-light dark:bg-thread-gray shadow-lg p-10 border border-thread-light-border dark:border-thread-border rounded-lg">
                <AuthRequestAccessForm />
            </div>
        </div>
    </div>
</template>