<script setup>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Link href="/">
                <span class="text-2xl font-extrabold text-gray-800 uppercase">
                    Author
                </span>
            </Link>
        </div>

        <div class="w-full sm:max-w-md mt-6 p-10 bg-white shadow overflow-hidden sm:rounded">
            <slot />
        </div>
    </div>
</template>
