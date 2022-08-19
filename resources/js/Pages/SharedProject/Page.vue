<template>
    <Layout class="bg-gray-50">

        <header class="bg-black text-white py-4 px-10 flex justify-between items-center relative z-30">

            <div class="flex items-center">
                <a href="https://www.withauthor.com" class="text-2xl mr-10 font-bold">CollectContent</a>
            </div>

            <ul class="flex items-center space-x-[30px]">
                <li><Link :href="route('viewSharedProject', [project.id, uuid])" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.url.startsWith('/projects') }">Pages</Link></li>
            </ul>

        </header>

        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-2xl font-bold flex items-center space-x-[10px]">
                <li><Link :href="route('viewSharedProject', [project.id, uuid])" class="text-black hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="text-gray-600">{{ page.name }}</li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3" v-if="Object.keys(fields).length">

                <div>
                    <select v-model="page.status" class="border-gray-300 rounded" @change="changeStatus()">
                        <option v-for="option in statusOptions">{{ option }}</option>
                    </select>
                </div>

                <div>
                    <button @click="saveFields()" class="btn-primary">Save</button>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 relative pt-[10px] pb-[100px]">

            <div class="mb-10">
                <div class="block">
                    <div class="border-b border-gray-300">
                        <nav class="-mb-px flex justify-between items-center" aria-label="Tabs">
                            <ul class="flex space-x-8">
                                <li v-for="section in sections">
                                    <Link :href="route('viewSharedSection', [project.id, uuid, page.id, section.id])" class="border-transparent hover:text-indigo-600 hover:border-indigo-500 whitespace-nowrap flex pt-4 pb-2 px-1 border-b-2 font-medium" :class="{'border-indigo-500 text-indigo-600': selectedSection.id === section.id}">{{ section.name }}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="space-y-[30px]" id="fields">

                <div v-if="Object.keys(fields).length" v-for="(field, index) in fields" :key="field.uuid" :data-id="field.uuid">
                    <input type="hidden" v-model="fields[index]['sort_order']">
                    <field
                        v-model="fields[index]"
                        :field-data="field"
                        :page="page"
                        :project="project"
                    />
                </div>

                <div v-if="!Object.keys(fields).length" class="flex flex-col justify-center items-center pt-[100px] text-black text-center">

                    <div>
                        <h3 class="text-xl font-bold mb-[15px]">Nothing to see yet!</h3>
                        <p class="text-black">No page fields have been added yet, please check back later.</p>
                    </div>

                </div>

            </div>

        </div>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/Shared.vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Field from '@/Components/Field.vue'

export default {
    components: {
        Link,
        Layout,
        EditorContent,
        Field
    },

    props: {
        page: Object,
        project: Object,
        sections: Object,
        fields: Object,
        selectedSection: Object,
        uuid: String
    },

    data() {
        return {
            editor: null,
            sortOrder: 0,
            statusOptions: [
                'Draft',
                'In Progress',
                'Under Review',
                'Ready To Publish',
                'Published'
            ]
        }
    },

    mounted() {
        this.editor = new Editor({
            content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
            extensions: [
                StarterKit.configure({
                    heading: {
                        levels: [1, 2],
                    }
                })
            ],
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },

    methods: {
        saveFields() {
            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.page.id + '/fields',
                {
                    sectionID: this.selectedSection.id,
                    fields: this.fields
                },
                {
                    preserveScroll: true
                }
            )
        },

        changeStatus() {
            this.$inertia.post(route('changeStatus', [this.project.id, this.page.id]), {
                    status: this.page.status
                },
                {
                    preserveScroll: true
                }
            )
        },
    }
}
</script>
