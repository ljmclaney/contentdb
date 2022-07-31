<template>
    <main>

        <header class="bg-white py-4 px-10 border-b border-gray-300 shadow flex justify-between items-center relative z-30">

            <div class="flex items-center">
                <Link href="/projects" class="font-bold text-lg mr-[40px] uppercase font-extrabold">Author</Link>
            </div>

            <ul class="flex items-center space-x-[30px] text-indigo-500">
                <li><Link href="/projects" class="hover:text-gray-800 transition-all font-medium" :class="{'text-gray-800': $page.url.startsWith('/projects') }">Projects</Link></li>
                <li v-if="$page.props.subscription.onTrial"><Link href="/account/upgrade" class="hover:text-gray-800 transition-all font-medium" :class="{'text-gray-800': $page.url.startsWith('/account/upgrade') }">Upgrade account</Link></li>
                <li v-if="$page.props.subscription.subscribed"><a href="/billing-portal" class="hover:text-gray-800 transition-all font-medium">Manage subscription</a></li>
                <li><Link href="/logout" class="hover:text-gray-800 transition-all font-medium">Logout</Link></li>
                <li>
                    <button class="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-500 text-sm text-indigo-500 flex justify-center items-center hover:bg-indigo-500 hover:text-white transition-all">
                        {{ $page.props.auth.user.initials }}
                    </button>
                </li>
            </ul>

            <Link href="/account/upgrade" class="hidden lg:block absolute bg-indigo-600 text-white font-bold text-center px-2 py-1 rounded-b top-0 right-0 left-0 w-[140px] mx-auto text-xs">
                {{ $page.props.subscription.trialEndsAt }} days remaining
            </Link>
        </header>

        <slot />

        <toast :show="showToast" :data="toast" :key="toast"></toast>

    </main>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import Toast from '@/Components/Toast.vue'

export default {
    components: {
        Link,
        Toast
    },

    computed: {
        toast() {
            return this.$page.props.toast
        },

        showToast() {
            return this.$page.props.toast !== null
        }
    }
}
</script>
