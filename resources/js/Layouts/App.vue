<template>
    <main>
        <header class="bg-black text-white py-4 px-4 md:px-10 flex justify-between items-center relative z-50">

            <div class="flex items-center">
                <Link href="/projects" class="text-xl mr-10 font-bold">CollectContent</Link>
            </div>

            <ul class="hidden sm:flex items-center space-x-[30px]" v-if="$page.props.auth">
                <li><Link href="/projects" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/projects') }">Projects</Link></li>
                <li>
                    <user-dropdown :accounts="$page.props.auth.accounts" :user="$page.props.auth.user" :permissions="$page.props.permissions" :subscription="$page.props.subscription"></user-dropdown>
                </li>
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

            <Link v-if="$page.props.userRole === 'owner' && ($page.props.subscription.onTrial && $page.props.subscription.trialEndsAt) && ($page.props.subscription.trialEndsAt <= 14)" href="/account/upgrade" class="hidden lg:block absolute bg-brand-dark-blue text-black font-bold text-center px-2 py-1 rounded-b top-0 right-0 left-0 w-[200px] mx-auto text-xs">
                {{ $page.props.subscription.trialEndsAt }} days remaining - Upgrade
            </Link>

        </header>

        <div class="bg-black text-white px-8 h-screen w-full flex justify-center items-center" v-if="showMenu">
            <ul class="text-xl space-y-10 -mt-[140px]">
                <li><Link href="/projects" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/projects') }">Projects</Link></li>
                <li v-if="!$page.props.subscription.subscribed"><Link href="/account/upgrade" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/account/upgrade') }">Upgrade account</Link></li>
                <li v-if="$page.props.subscription.subscribed"><a href="/billing-portal" class="hover:underline underline-offset-4 transition-all font-medium">Manage subscription</a></li>
                <li><Link href="/logout" class="hover:underline underline-offset-4 transition-all font-medium">Logout</Link></li>
            </ul>
        </div>

        <slot />

        <toast :show="showToast" :data="toast" :key="toast"></toast>

        <modal v-if="$page.props.accountIncomplete" :open="true">

            <h3 class="text-xl mb-5 font-bold">Final step!</h3>

            <form @submit.prevent="form.post(route('accountDetails'))" class="space-y-[30px]">

                <div class="space-y-5">
                    <div>
                        <label for="name" class="block font-medium text-gray-700">Your name</label>
                        <div class="mt-1">
                            <input type="text" name="name" id="name" v-model="form.userName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
                            <div v-if="form.errors.userName" class="text-sm mt-2 text-red-600">{{ form.errors.userName }}</div>
                        </div>
                    </div>

                    <div>
                        <label for="account_name" class="block font-medium text-gray-700">Business or account name</label>
                        <div class="mt-1">
                            <input type="text" name="account_name" id="account_name" v-model="form.accountName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" required />
                            <div v-if="form.errors.accountName" class="text-sm mt-2 text-red-600">{{ form.errors.accountName }}</div>
                        </div>
                    </div>

                    <button type="submit" class="btn-primary" :disabled="accountDetailsLoading">
                        <span v-if="!accountDetailsLoading">Save</span>
                        <span v-if="accountDetailsLoading" class="flex items-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
                            Saving
                        </span>
                    </button>
                </div>

            </form>
        </modal>

    </main>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import Toast from '@/Components/Toast.vue'
import UserDropdown from '@/Components/UserDropdown.vue'
import Modal from '@/Components/Modal.vue'

export default {
    components: {
        Link,
        Toast,
        UserDropdown,
        Modal
    },

    props: {
        errors: Object,
    },

    data() {
        return {
            showMenu: false,
            form: this.$inertia.form({
                userName: null,
                accountName: null
            }),
            accountDetailsLoading: false
        }
    },

    computed: {
        toast() {
            return this.$page.props.toast
        },

        showToast() {
            return this.$page.props.toast !== null
        },
    },
}
</script>
