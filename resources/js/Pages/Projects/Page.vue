<template>
    <Layout>
        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewProject', project.id)" class="text-black hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">{{ page.name }}</li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div>
                    <Link :href="route('pageStructure', [project.id, page.id])" v-if="Object.keys(fields).length" class="btn-outline">Edit structure</Link>
                </div>

                <div v-if="page.status !== 'completed'">
                    <button @click="markAsCompleted()" class="btn-outline">Mark as completed</button>
                </div>

                <div v-if="page.status === 'completed'">
                    <div class="inline-flex items-center justify-center px-4 py-2 border border-green-700 bg-green-600 text-brand-green-700 text-base font-medium rounded">Completed</div>
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
                                    <Link :href="route('viewSection', [project.id, page.id, section.id])" class="border-transparent hover:text-indigo-600 hover:border-indigo-500 whitespace-nowrap flex pt-4 pb-2 px-1 border-b-2 font-medium" :class="{'border-black text-black': selectedSection.id === section.id}">{{ section.name }}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="space-y-10" id="fields">

                <div v-if="Object.keys(fields).length" v-for="(field, index) in fields" :key="field.uuid" :data-id="field.uuid">
                    <input type="hidden" v-model="fields[index]['sort_order']">
                    <field
                        v-model="fields[index]"
                        :field-data="field"
                        :page="page"
                        :project="project"
                        :key="'field-' + field.uuid"
                    />
                </div>

                <div v-if="!Object.keys(fields).length" class="flex flex-col justify-center items-center pt-[100px] text-black text-center">

                    <div>
                        <h3 class="text-xl font-bold mb-[15px]">Let's start building your page structure!</h3>
                        <p class="text-black">Select a field from the bottom.</p>
                    </div>

                </div>

            </div>

            <div class="fixed bottom-[20px] left-0 w-full flex flex-col items-center justify-center">
                <div v-if="!Object.keys(fields).length" class="mb-[30px] animate-bounce rounded-full w-[50px] h-[50px] bg-indigo-50 border border-indigo-500 text-indigo-500 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>

            </div>
        </div>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
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
        selectedSection: Object
    },

    data() {
        return {
            editor: null,
            sortOrder: 0
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

        markAsCompleted() {
            this.$inertia.post(route('markAsCompleted', [this.project.id, this.page.id]),
                {
                    preserveScroll: true
                }
            )
        },
    }
}
</script>
