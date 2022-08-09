<script setup>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Link href="/">
                <span class="text-2xl font-bold text-black">
                    CollectContent
                </span>
            </Link>
        </div>

        <div class="w-full sm:max-w-md mt-6 p-10 bg-white overflow-hidden rounded border border-grey-300">
            <slot />
        </div>
    </div>
</template>
