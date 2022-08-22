<template>
    <div class="relative">

        <button v-click-outside="onClickOutside" @click="open = !open" class="w-8 h-8 rounded-full bg-brand-blue flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
        </button>

        <div v-if="open" class="origin-top-right absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <div class="text-black text-sm block px-4 py-2 border-b border-gray-300">
                    <strong class="block truncate">{{ $page.props.auth.account.name }}</strong>
                    <span class="block truncate">{{ user.email }}</span>
                </div>
                <Link v-if="permissions['manage-team-members']" :href="route('viewTeamMembers')" class="text-black block px-4 py-2 text-sm hover:bg-gray-100 font-medium" :class="{'bg-gray-100': $page.url.startsWith('/team-members') }">Team members & clients</Link>
                <Link v-if="Object.keys(accounts).length > 1" :href="route('viewAccounts')" class="text-black block px-4 py-2 text-sm hover:bg-gray-100 font-medium">Switch accounts</Link>
                <Link v-if="permissions['manage-billing'] && !subscription.subscribed" href="/account/upgrade" class="text-black block px-4 py-2 text-sm hover:bg-gray-100 font-medium" :class="{'bg-gray-100': $page.url.startsWith('/account/upgrade') }">Upgrade account</Link>
                <a v-if="permissions['manage-billing'] && subscription.subscribed" href="/billing-portal" class="text-black block px-4 py-2 text-sm hover:bg-gray-100 font-medium">Manage subscription</a>
                <Link href="/logout" class="text-black block px-4 py-2 text-sm hover:bg-gray-100 font-medium">Logout</Link>
            </div>
        </div>
    </div>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {

    props: {
        permissions: Object,
        subscription: Object,
        user: Object,
        accounts: Object
    },

    components: {
        Link,
    },

    data() {
        return {
            open: false
        }
    },

    methods: {
        onClickOutside() {
            this.open = false
        }
    }
}
</script>
