<template>
    <Layout class="bg-gray-50">

        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewAccounts')" class="text-black hover:text-indigo-500 transition-all">Accounts</Link></li>
            </ul>
        </div>

        <div class="max-w-4xl mx-auto px-4 relative pt-[10px] pb-[100px]">

            <div class="bg-white rounded border border-gray-300">
                <div>
                    <div class="sm:flex sm:items-center p-5 border-b border-gray-300">
                        <div class="sm:flex-auto">
                            <h2 class="text-xl font-bold ">Select an account</h2>
                        </div>
                    </div>
                    <div class="p-5 flex flex-col">
                        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                <table class="min-w-full divide-y divide-gray-300">
                                    <tbody class="divide-y divide-gray-200">
                                    <tr v-for="account in accounts">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 md:pl-0">
                                            <span class="font-bold">{{ account.name }}</span>
                                            <span v-if="account.id === $page.props.auth.account.id" class="rounded bg-blue-100 px-1 py-1 text-sm text-blue-800 ml-2">Active account</span>
                                        </td>
                                        <td class="text-right">
                                            <button type="button" class="btn-outline" @click="switchAccount(account.id)">Switch account</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </Layout>
</template>
<script>

import Layout from '@/Layouts/App.vue'
import { Link } from '@inertiajs/inertia-vue3'

export default {
    components: {
       Layout,
       Link
    },

    props: {
        'accounts': Object
    },

    methods: {
        switchAccount(accountID) {
            this.$inertia.get(route('switchAccount', [accountID]));
        }
    }
}
</script>
