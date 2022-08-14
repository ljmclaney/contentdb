<template>
    <Layout>
        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-3xl mx-auto space-y-[30px]">

                <div v-if="Object.keys(clients).length" class="bg-white rounded border border-gray-300">

                    <div>
                        <div class="sm:flex sm:items-center p-5 border-b border-gray-300">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-bold ">Clients</h1>

                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button @click="createClient = true" class="btn-primary">Add a client</button>
                            </div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <div class="min-w-full divide-y divide-gray-300">
                                        <div>
                                        <div class="flex items-center justify-between">
                                            <div class="py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-1/3">Name</div>
                                            <div class="py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-1/3">Email</div>
                                            <div class="py-3.5 px-3 text-left font-semibold text-right">Last updated</div>
                                        </div>
                                        </div>
                                        <ul class="divide-y divide-gray-200">
                                            <client-item v-for="client in clients" :node="client"></client-item>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-if="!Object.keys(clients).length" class="flex flex-col justify-center items-center text-center pt-[100px]">

                    <div class="mb-10">
                        <h3 class="text-xl font-bold mb-[15px]">It's quiet in here</h3>
                        <p class="text-black">Make it easier to collaborate with clients by adding them to your account.</p>
                    </div>

                    <button @click="createClient = true" type="button" class="btn-primary">Add a client</button>

                </div>

            </div>

        </div>

        <slide-over :open="createClient" @closeSlider="createClient = false" title="Add a client">

            <div class="space-y-[15px]">
                <div>
                    <label for="client_name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                        <input type="text" name="client_name" id="client_name" v-model="clientName" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input type="email" name="email" id="email" v-model="clientEmail" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                    <p class="text-sm mt-2"><strong>Note:</strong> We will only email your client when you assign them to projects or to send them reminders to upload their content to assigned projects.</p>
                </div>

                <button @click="saveClient()" class="btn-primary" :disabled="newClientLoading">
                    <span v-if="!newClientLoading">Save</span>
                    <span v-if="newClientLoading" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                        Saving
                    </span>
                </button>
            </div>

        </slide-over>

    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import ClientItem from '@/Components/ClientItem.vue'

export default {
    components: {
        Link,
        Layout,
        SlideOver,
        ClientItem
    },

    props: {
        clients: Object
    },

    data() {
        return {
            createClient: false,
            clientName: null,
            clientEmail: null,
            newClientLoading: false,
        }
    },

    methods: {

        saveClient() {

            this.newClientLoading = true
            this.$inertia.post('/clients',
                {
                    name: this.clientName,
                    email: this.clientEmail
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.clientName = null
                        this.parentPageId = null
                        this.createClient = false
                        this.newClientLoading = false
                    },
                    onError: () => {
                        this.newClientLoading = false
                    }
                }
            )
        }
    }
}
</script>
