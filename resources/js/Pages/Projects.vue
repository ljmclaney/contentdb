<template>
    <Layout>
        <div class="max-w-5xl mx-auto px-4 relative" :class="{'pt-[50px] pb-[112px]': Object.keys(projects).length}">

            <div class="max-w-3xl mx-auto space-y-[30px]">

                <div v-if="Object.keys(projects).length" v-for="(project, index) in projects" :key="project.hash" :data-id="project.hash">

                </div>

                <div v-if="!Object.keys(projects).length" class="flex flex-col justify-center items-center h-screen -mt-[100px] text-center">

                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">You haven't created a project yet</h3>
                        <p class="text-gray-500">Projects are spaces to manage pages, content and media assets.<br>
                            To get started, create your first project.</p>
                    </div>

                    <button @click="createProject = true" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">Create a project</button>

                </div>

            </div>

        </div>
        
        <slide-over :open="createProject" @closeSlider="createProject = false">
            <button @click="saveProject()">Click</button>
        </slide-over>
    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'

export default {
    components: {
        Layout,
        SlideOver
    },

    data() {
        return {
            editor: null,
            projects: [],
            order: 0,
            createProject: false
        }
    },

    mounted() {

    },

    methods: {

        saveProject() {
            alert('save')
        }
    }
}
</script>
