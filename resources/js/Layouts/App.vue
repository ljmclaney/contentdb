<template>
    <main>

        <header class="bg-white py-4 px-10 border-b border-gray-200 shadow flex justify-between items-center relative z-30">

            <div class="flex items-center">
                <span class="font-bold text-lg mr-[40px] uppercase font-extrabold">Author</span>

                <ul class="flex items-center space-x-[30px] text-indigo-500 ">
                    <!--<li><Link href="/dashboard" class="hover:text-gray-800 transition-all">Dashboard</Link></li>-->
                    <li><Link href="/projects" class="hover:text-gray-800 transition-all font-medium" :class="{'text-gray-800': $page.url.startsWith('/projects') }">Projects</Link></li>
                </ul>
            </div>

            <ul class="flex items-center space-x-[30px]">
                <li><Link href="/account/upgrade" class="text-indigo-500 hover:text-gray-800 transition-all font-medium">Upgrade account</Link></li>
                <li>
                    <button class="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-500 text-sm text-indigo-500 flex justify-center items-center hover:bg-indigo-500 hover:text-white transition-all">
                        {{ $page.props.auth.user.initials }}
                    </button>
                </li>
            </ul>
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
