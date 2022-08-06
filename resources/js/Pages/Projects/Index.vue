<template>
    <Layout>
        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-3xl mx-auto space-y-[30px]">

                <div class="bg-white rounded border border-gray-300 p-5 sm:flex sm:items-center sm:justify-between">
                    <h3 class="text-2xl font-bold">{{ project.name }}</h3>

                    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-3">
                        <Link :href="route('archiveProject', project.id)" class="btn-outline">Archive</Link>
                        <button @click="showShare = !showShare" class="btn-primary">Share</button>
                    </div>
                </div>

                <div v-if="Object.keys(pages).length" class="bg-white rounded border border-gray-300">

                    <div>
                        <div class="sm:flex sm:items-center p-5 border-b border-gray-300">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-bold ">Pages</h1>

                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                <button @click="createPage = true" class="btn-primary">Create a page</button>
                            </div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <div class="min-w-full divide-y divide-gray-300">
                                        <div>
                                        <div class="flex items-center justify-between">
                                            <div scope="col" class="py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-3/4">Name</div>
                                            <div scope="col" class="py-3.5 px-3 text-left font-semibold text-right">Last updated</div>
                                        </div>
                                        </div>
                                        <ul class="divide-y divide-gray-200">
                                            <page-item v-for="page in pages" :project="project" :node="page" :pages="parentPages"></page-item>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-if="!Object.keys(pages).length" class="flex flex-col justify-center items-center text-center pt-[100px]">

                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">Let the fun begin!</h3>
                        <p class="text-black">Add your content here. Start by creating your first page.</p>
                    </div>

                    <button @click="createPage = true" type="button" class="btn-primary">Create a page</button>

                </div>

            </div>

        </div>

        <slide-over :open="createPage" @closeSlider="createPage = false" title="Create a page">

            <div class="space-y-[15px]">
                <div>
                    <label for="page" class="block text-sm font-medium text-gray-700">Page name</label>
                    <div class="mt-1">
                        <input type="text" name="page" id="page" v-model="newPage" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g. Home, About page, December Newsletter" />
                    </div>
                </div>

                <div>
                    <label for="parent_page" class="block text-sm font-medium text-gray-700">Parent page (optional)</label>
                    <div class="mt-1">
                        <select type="text" name="parent_page" id="parent_page" v-model="parentPageId" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            <option value="" selected>No parent page</option>
                            <option v-for="(option, index) in parentPages" :value="index">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                </div>

                <button @click="savePage()" class="btn-primary" :disabled="newPageLoading">
                    <span v-if="!newPageLoading">Save</span>
                    <span v-if="newPageLoading" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                        Saving
                    </span>
                </button>
            </div>

        </slide-over>

        <modal :open="showShare" @closeModal="showShare = false">
            <div>
                <input type="text" :value="route('viewSharedProject', [project.id, project.uuid])" class="w-full border border-gray-300" readonly>
            </div>
            <div class="mt-5 sm:mt-6">
                <button @click="copyShareLink(route('viewSharedProject', [project.id, project.uuid]))" type="button" class="btn-primary">
                    {{ shareText }}</button>
            </div>
        </modal>


    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import Modal from '@/Components/Modal.vue'
import PageItem from '@/Components/PageItem.vue'

export default {
    components: {
        Link,
        Layout,
        SlideOver,
        Modal,
        PageItem
    },

    props: {
        project: Object,
        pages: Object,
        parentPages: Object
    },

    data() {
        return {
            createPage: false,
            newPage: null,
            parentPageId: null,
            showShare: false,
            shareText: 'Copy link',
            newPageLoading: false
        }
    },

    methods: {

        savePage() {

            this.newPageLoading = true
            this.$inertia.post('/projects/' + this.project.id + '/pages/create',
                {
                    projectID: this.project.id,
                    name: this.newPage,
                    parentPageId: this.parentPageId
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.newPage = null
                        this.parentPageId = null
                        this.createPage = false
                        this.newPageLoading = false
                    },
                    onError: () => {
                        this.newPageLoading = false
                    }
                }
            )
        },

        copyShareLink(link) {
            navigator.clipboard.writeText(link)
            this.shareText = 'Copied!'
        }
    }
}
</script>
