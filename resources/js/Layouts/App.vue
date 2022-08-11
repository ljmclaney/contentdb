<template>
    <main>

        <header class="bg-black text-white py-4 px-4 md:px-10 flex justify-between items-center relative z-30">

            <div class="flex items-center">
                <Link href="/projects" class="text-2xl mr-10 font-bold">CollectContent</Link>
            </div>

            <ul class="hidden sm:flex items-center space-x-[30px]">
                <li><Link href="/projects" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/projects') }">Projects</Link></li>
                <li v-if="$page.props.subscription.onTrial"><Link href="/account/upgrade" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/account/upgrade') }">Upgrade account</Link></li>
                <li v-if="$page.props.subscription.subscribed"><a href="/billing-portal" class="hover:underline underline-offset-4 transition-all font-medium">Manage subscription</a></li>
                <li><Link href="/logout" class="hover:underline underline-offset-4 transition-all font-medium">Logout</Link></li>
                <!--<li>
                    <button class="w-8 h-8 rounded bg-brand-blue text-sm text-indigo-600 flex justify-center items-center hover:bg-indigo-600 hover:text-white transition-all">

                    </button>
                </li>-->
            </ul>

            <button class="sm:hidden text-white" @click="showMenu = !showMenu">
                <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>

                <svg v-if="showMenu" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>

            <Link v-if="($page.props.subscription.onTrial && $page.props.subscription.trialEndsAt) && ($page.props.subscription.trialEndsAt <= 14)" href="/account/upgrade" class="hidden lg:block absolute bg-brand-dark-blue text-black font-bold text-center px-2 py-1 rounded-b top-0 right-0 left-0 w-[140px] mx-auto text-xs">
                {{ $page.props.subscription.trialEndsAt }} days remaining
            </Link>

        </header>

        <div class="bg-black text-white px-8 h-screen w-full flex justify-center items-center" v-if="showMenu">
            <ul class="text-xl space-y-10 -mt-[140px]">
                <li><Link href="/projects" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/projects') }">Projects</Link></li>
                <li v-if="$page.props.subscription.onTrial"><Link href="/account/upgrade" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/account/upgrade') }">Upgrade account</Link></li>
                <li v-if="$page.props.subscription.subscribed"><a href="/billing-portal" class="hover:underline underline-offset-4 transition-all font-medium">Manage subscription</a></li>
                <li><Link href="/logout" class="hover:underline underline-offset-4 transition-all font-medium">Logout</Link></li>
            </ul>
        </div>

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

    data() {
        return {
            showMenu: false
        }
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
