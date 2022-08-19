<template>
    <Layout>

        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link href="/projects" class="text-black hover:text-indigo-500 transition-all">Projects</Link></li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div>
                    <Link :href="route('viewArchivedProjects')" class="btn-outline mr-3 sm:mr-0">View archive</Link>
                </div>

                <div>
                    <button @click="createProject = true" class="btn-primary">Create a project</button>
                </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-4 relative" :class="{'pt-[50px] pb-[112px]': Object.keys(projects).length}">

            <div class="max-w-4xl mx-auto space-y-[30px]">

                <div v-if="Object.keys(projects).length" class="bg-white rounded border border-gray-300">

                    <div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                        <tr>
                                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left font-semibold text-gray-900 sm:pl-6 md:pl-0">Name</th>
                                            <th scope="col" class="py-3.5 px-3 text-left font-semibold text-gray-900 w-3/4 text-right">Last updated</th>
                                        </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                        <tr v-for="project in projects">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 md:pl-0">
                                                <Link :href="route('viewProject', project.id )" class="text-black hover:text-brand-dark-blue">{{ project.name }}</Link>
                                            </td>
                                            <td class="whitespace-nowrap py-4 px-3 text-black w-3/4 text-right">
                                                {{ project.updated_at }}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-if="!Object.keys(projects).length" class="flex flex-col justify-center items-center h-screen -mt-[100px] text-center">

                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">You haven't created a project yet</h3>
                        <p class="text-black">Projects are spaces to manage pages, content and media assets.<br>
                            To get started, create your first project.</p>
                    </div>

                    <div class="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                        <Link :href="route('viewArchivedProjects')" class="btn-outline mr-3 sm:mr-0">View archive</Link>
                        <button @click="createProject = true" type="button" class="btn-primary">Create a project</button>
                    </div>

                </div>

            </div>

        </div>

        <slide-over :open="createProject" @closeSlider="createProject = false" title="Create a project">

            <div class="space-y-[15px]">
                <div>
                    <label for="project" class="block text-sm font-medium text-gray-700">Project name</label>
                    <div class="mt-1">
                        <input type="text" name="project" id="project" v-model="newProject" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g. website name, client name or company name" />
                    </div>
                </div>

                <button @click="saveProject()" class="btn-primary">
                    <span v-if="!newProjectLoading">Save</span>
                    <span v-if="newProjectLoading" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                        Saving
                    </span>
                </button>
            </div>

        </slide-over>

        <modal-large :open="newUser" @closeModal="newUser = false">
            <div class="p-5 md:py-10 md:px-20">
                <h3 class="text-2xl md:text-4xl font-extrabold mb-8">Experience all of CollectContent with a 14-day trial of Pro</h3>
                <p class="mb-5">We've upgraded you to a free 14-day trial of the Pro plan. Try the full range of features on CollectContent before deciding which plan is right for you.</p>

                <p>At the end of your trial, we'll automatically move you to the Free plan unless you choose to upgrade</p>

                <div class="flex justify-center mt-12">
                    <img src="@/../img/upgrade.svg" class="w-[200px] md:w-[300px]">
                </div>

                <div class="flex justify-center mt-12">
                    <button class="btn-secondary-large" @click="closeUpgrade">Get started</button>
                </div>
            </div>
        </modal-large>

    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import ModalLarge from '@/Components/ModalLarge.vue'
import {Inertia} from "@inertiajs/inertia";

export default {
    components: {
        Link,
        Layout,
        SlideOver,
        ModalLarge
    },

    props: {
        projects: Object,
        newUser: Boolean
    },

    data() {
        return {
            createProject: false,
            newProject: null,
            newProjectLoading: false
        }
    },

    methods: {

        saveProject() {

            this.newProjectLoading = true

            this.$inertia.post('/projects/create',
                {
                    name: this.newProject
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.createProject = false
                        this.newProject = null
                        this.newProjectLoading = false
                    },
                    onError: () => {
                        this.newProjectLoading = false
                    }
                }
            )


        },

        closeUpgrade() {
            Inertia.visit('/projects')
        }
    }
}
</script>
