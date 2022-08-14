<template>
    <li  class="relative">
        <div class="flex items-center justify-between" @mouseover="displayEdit = true" @mouseleave="displayEdit = false">
            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-3/4 truncate">
                <span class="text-black hover:text-brand-dark-blue truncate inline-flex items-center">
                    {{ node.name }}
                </span>
            </div>
            <div v-if="!displayEdit" class="whitespace-nowrap py-4 px-3 text-black text-right flex-shrink-0">
                {{ node.updated_at }}
            </div>

            <div v-if="displayEdit" class="bg-white">
                <div class="bg-gray-100 rounded  z-20 flex items-center top-1.5 right-0">
                    <button class="p-4 hover:bg-gray-200 transition-all" @click="editClient = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>

                    <button class="p-4 hover:bg-red-500 hover:text-white transition-all" @click="showDeleteModal = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <slide-over :open="editClient" @closeSlider="editClient = false" title="Edit client">

            <div class="space-y-[15px]">
                <div>
                    <label for="client_name" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                        <input type="text" name="client_name" id="client_name" v-model="node.name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Name</label>
                    <div class="mt-1">
                        <input type="email" name="email" id="email" v-model="node.email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
                    </div>
                </div>

                <button @click="updateClient()" class="btn-primary">Save</button>
            </div>

        </slide-over>

        <modal :open="showDeleteModal">
            <form>

                <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 text-red-600" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900"> Delete {{ node.name }}</h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">Are you sure you want to delete this client? This action cannot be undone.</p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button @click="deletePage()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
                    <button @click="showDeleteModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" ref="cancelButtonRef">Cancel</button>
                </div>

            </form>
        </modal>

    </li>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3'
import SlideOver from '@/Components/SlideOver.vue';
import Modal from '@/Components/Modal.vue';
import PageOption from '@/Components/PageOption.vue';

export default {
    name: "node",

    components: {
        Link,
        SlideOver,
        Modal,
        PageOption
    },

    props: {
        node: Object,
        project: Object,
        pages: Object
    },

    data() {
        return {
            displayEdit: false,
            editClient: false,
            showDeleteModal: false
        }
    },

    methods: {
        updateClient() {
            this.$inertia.post('/clients/' + this.node.id,
                {
                    name: this.node.name,
                    email: this.node.email
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.editClient = false
                    }
                }
            )
        },

        deletePage() {
            this.$inertia.delete('/clients/' + this.node.id)

            this.showDeleteModal = false
        }
    }
}
</script>
