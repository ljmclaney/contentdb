<template>
    <li  class="relative">
        <div class="flex items-center justify-between" @mouseover="displayEdit = permissions['create-projects']" @mouseleave="displayEdit = false">
            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-1/2 truncate">
                <Link :href="route('viewPage', [project.id, node.id])" class="text-black hover:text-brand-dark-blue truncate inline-flex items-center">

                    <span v-if="node.depth" class="flex items-center mr-2">
                        <span v-for="n in node.depth">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                            </svg>
                        </span>
                    </span>

                    {{ node.name }}
                </Link>
            </div>

            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-1/4 flex-shrink-0">
                <span class="rounded bg-yellow-100 px-1 py-1 text-sm text-yellow-800" v-if="node.status === null || node.status === 'Draft'">Draft</span>
                <span class="rounded bg-blue-100 px-1 py-1 text-sm text-blue-800"  v-if="node.status === 'In Progress'">{{ node.status }}</span>
                <span class="rounded bg-orange-100 px-1 py-1 text-sm text-orange-800"  v-if="node.status === 'Under Review'">{{ node.status }}</span>
                <span class="rounded bg-purple-100 px-1 py-1 text-sm text-purple-800"  v-if="node.status === 'Ready To Publish'">{{ node.status }}</span>
                <span class="rounded bg-green-100 px-1 py-1 text-sm text-green-800"  v-if="node.status === 'Published'">{{ node.status }}</span>
            </div>

            <div v-if="!displayEdit" class="whitespace-nowrap py-4 px-3 text-black text-right w-1/4 flex-shrink-0">
                {{ node.updated_at }}
            </div>

            <div v-if="displayEdit" class="bg-white w-1/4 flex justify-end">
                <div class="bg-gray-100 rounded z-20 flex items-center top-1.5 right-0">
                    <button class="p-4 hover:bg-gray-200 transition-all" @click="editPage = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>

                    <button class="p-4 hover:bg-gray-200 transition-all" @click="clonePage(node.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </button>

                    <button class="p-4 hover:bg-red-500 hover:text-white transition-all" @click="showDeleteModal = true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <ul v-if="node.children && node.children.length" class="border-t border-gray-200 divide-y divide-gray-200">
            <node v-for="child in node.children" :project="project" :node="child" :pages="pages" :permissions="permissions"></node>
        </ul>

        <slide-over :open="editPage" @closeSlider="editPage = false" title="Edit page">

            <div class="space-y-[15px]">
                <div>
                    <label for="page" class="block text-sm font-medium text-gray-700">Page name</label>
                    <div class="mt-1">
                        <input type="text" name="page" id="page" v-model="node.name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g. Home, About page, December Newsletter" />
                    </div>
                </div>

                <div>
                    <label for="parent_page" class="block text-sm font-medium text-gray-700">Parent page (optional)</label>
                    <div class="mt-1">
                        <select name="parent_id" id="parent_id" v-model="node.parent_id" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            <option value="" selected>No parent page</option>
                            <page-option v-for="page in pages" :node="page"></page-option>
                        </select>
                    </div>
                </div>

                <button @click="updatePage()" class="btn-primary">Save</button>
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
                        <h3 class="text-lg leading-6 font-medium text-gray-900"> Delete page</h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">Are you sure you want to delete this page? All of your data will be permanently removed from our servers forever. This action cannot be undone.</p>
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
        pages: Object,
        permissions: Array
    },

    data() {
        return {
            displayEdit: false,
            editPage: false,
            showDeleteModal: false
        }
    },

    methods: {
        updatePage() {
            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.node.id,
                {
                    name: this.node.name,
                    parent_id: this.node.parent_id
                },
                {
                    preserveScroll: true
                }
            )

            this.editPage = false
        },

        deletePage() {
            this.$inertia.delete('/projects/' + this.project.id + '/pages/' + this.node.id)

            this.showDeleteModal = false
        },

        clonePage() {
            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.node.id + '/clone',
            {

                },
                {
                    preserveScroll: true
                }
            )
        },
    }
}
</script>
