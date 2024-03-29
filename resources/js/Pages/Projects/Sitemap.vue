<template>
    <Layout>
        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link href="/projects" class="text-black hover:text-indigo-500 transition-all">Projects</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">{{ project.name }}</li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">

                <div class="relative">
                    <dropdown>
                        <ul>

                            <li v-if="Object.keys(pages).length">
                                <Link :href="route('viewAllContent', project.id)" class="text-black block px-4 py-2 hover:bg-gray-100 font-medium">View all content</Link>
                            </li>

                            <li v-if="$page.props.permissions['create-projects']">
                                <button @click="showShare = !showShare" class="text-black block w-full text-left px-4 py-2 hover:bg-gray-100 font-medium">Share</button>
                            </li>

                            <li v-if="$page.props.permissions['create-projects']">
                                <Link :href="route('archiveProject', project.id)" class="text-black block px-4 py-2 hover:bg-gray-100 font-medium">Archive project</Link>
                            </li>

                        </ul>
                    </dropdown>
                </div>

                <div>
                    <Link :href="route('viewProject', project.id)" class="btn-outline">
                        Pages
                    </Link>
                </div>

                <div>
                    <Link :href="route('brandAssets', project.id)" class="btn-outline">Brand assets</Link>
                </div>

                <div v-if="$page.props.permissions['create-projects']" class="hover:text-brand-blue">
                    <button @click="createPage = true" class="btn-primary">Create a page</button>
                </div>
            </div>
        </div>

        <div class="py-10 px-4 md:px-10">
            <div v-if="Object.keys(pages).length" class="flex justify-center">
                <nav class="flex h-screen overflow-x-auto">
                    <ul class="sitemap flex justify-start">
                        <sitemap-item  v-for="page in pages" :project="project" :node="page" :pages="pages"></sitemap-item>
                    </ul>
                </nav>
            </div>

            <div v-if="!Object.keys(pages).length" class="flex flex-col justify-center items-center text-center pt-[100px]">

                <div v-if="$page.props.permissions['create-projects']">
                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">Create a sitemap</h3>
                        <p class="text-black">Start by creating a sitemap to organize and collect content.</p>
                    </div>

                    <button @click="createPage = true" type="button" class="btn-primary">Create a page</button>
                </div>

                <div v-if="!$page.props.permissions['create-projects']">
                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">No pages created yet!</h3>
                        <p class="text-black">You will need to wait until your team members create pages for your project.</p>
                    </div>

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
                        <select name="parent_page" id="parent_page" v-model="parentPageId" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                            <option value="" selected>No parent page</option>
                            <page-option v-for="page in pages" :node="page"></page-option>
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
            <div class="mb-5">
                <label for="link" class="block font-medium mb-4 text-lg font-bold">Share a public link</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 text-gray-400" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                            </svg>
                        </div>
                        <input type="text" name="link" id="link" :value="route('viewSharedProject', [project.id, project.uuid])" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" readonly>
                    </div>
                    <button @click="copyLink(route('viewSharedProject', [project.id, project.uuid]))" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 bg-black text-sm font-medium rounded-r-md text-white hover:bg-indigo-700">
                        <svg v-if="!copiedLink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        <span v-if="copiedLink">Copied!</span>
                    </button>
                </div>
            </div>

            <div>
                <label for="email" class="block font-medium">Password (optional)</label>
                <div class="mt-1 flex rounded-md shadow-sm">
                    <div class="relative flex items-stretch flex-grow focus-within:z-10">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 text-gray-400" viewBox="0 0 16 16">
                                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
                            </svg>
                        </div>
                        <input type="text" name="share_password" v-model="project.password" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300">
                    </div>
                    <button @click="copyPassword(project.password)" type="button" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 bg-black text-sm font-medium rounded-r-md text-white hover:bg-indigo-700">
                        <svg v-if="!copiedPassword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        <span v-if="copiedPassword">Copied!</span>
                    </button>
                </div>
            </div>

            <div class="flex justify-end items-center mt-10 space-x-3">

                <button @click="showShare = false" class="btn-outline">Cancel</button>

                <button @click="savePassword()" type="button" class="btn-primary" :disabled="savingShareSettings">
                    <span v-if="!savingShareSettings">Apply</span>
                    <span v-if="savingShareSettings" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Applying
                    </span>
                </button>
            </div>

        </modal>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import Modal from '@/Components/Modal.vue'
import PageItem from '@/Components/PageItem.vue'
import PageOption from '@/Components/PageOption.vue'
import SitemapItem from '@/Components/SitemapItem.vue'
import Dropdown from "@/Components/Dropdown.vue";

export default {
    components: {
        Link,
        Layout,
        SlideOver,
        Modal,
        PageItem,
        PageOption,
        SitemapItem,
        Dropdown
    },

    props: {
        project: Object,
        pages: Object
    },

    data() {
        return {
            createPage: false,
            newPage: null,
            parentPageId: null,
            showShare: false,
            copiedLink: false,
            copiedPassword: null,
            newPageLoading: false,
            sharePassword: null,
            savingShareSettings: false,
            showCollaborators: false,
            displayDropdown: false
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

        copyLink(link) {
            navigator.clipboard.writeText(link)
            this.copiedLink = true
        },

        copyPassword(link) {
            navigator.clipboard.writeText(link)
            this.copiedPassword = true
        },

        savePassword() {

            this.savingShareSettings = true

            this.$inertia.post(route('saveProjectPassword', this.project.id),
                {
                    password: this.project.password
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.savingShareSettings = false
                    }
                }
            )
        }
    }
}
</script>
