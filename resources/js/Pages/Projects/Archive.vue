<template>
    <Layout>
        <div class="max-w-5xl mx-auto px-4 relative" :class="{'pt-[50px] pb-[112px]': Object.keys(projects).length}">

            <div class="max-w-3xl mx-auto space-y-[30px]">

                <div v-if="Object.keys(projects).length" class="bg-white rounded shadow border border-gray-300 py-5">

                    <div class="px-5">
                        <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-semibold text-gray-900">Archived projects</h1>

                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-3">
                                <Link :href="route('projects')" class="btn-outline">View all projects</Link>
                            </div>
                        </div>
                        <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                        <tr>
                                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">Name</th>
                                            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 w-3/4 text-right">Restore</th>
                                        </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                        <tr v-for="project in projects">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                                                <Link :href="route('viewProject', project.id )" class="text-indigo-600 hover:text-indigo-900">{{ project.name }}</Link>
                                            </td>
                                            <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500 w-3/4 text-right">
                                                <Link :href="route('restoreProject', project.id)" class="btn-primary">Restore</Link>
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
                        <p class="text-gray-500">Projects are spaces to manage pages, content and media assets.<br>
                            To get started, create your first project.</p>
                    </div>

                    <button @click="createProject = true" type="button" class="btn-primary">Create a project</button>

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

                <button @click="saveProject()" class="btn-primary">Save</button>
            </div>

        </slide-over>
    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'

export default {
    components: {
        Link,
        Layout,
        SlideOver
    },

    props: {
        projects: Object
    },

    data() {
        return {
            createProject: false,
            newProject: null
        }
    },

    methods: {

        saveProject() {
            this.$inertia.post('/projects/create',
                {
                    newProject: this.newProject
                },
                {
                    preserveScroll: true
                }
            )

            this.createProject = false
            this.newProject = null
        }
    }
}
</script>
