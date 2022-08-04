<template>
    <Layout>
        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 sm:flex sm:items-center sm:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewProject', project.id)" class="text-black hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">{{ page.name }}</li>
            </ul>

            <div class="mt-4 sm:mt-0 sm:ml-16 flex items-center space-x-[10px]">
                <button class="btn-outline h-[42px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                </button>
                <Link :href="route('pageStructure', [project.id, page.id])" v-if="Object.keys(fields).length" class="btn-outline">Edit structure</Link>
                <button @click="saveFields()" class="btn-primary">Save</button>
            </div>
        </div>

        <div class="max-w-3xl mx-auto px-4 relative pt-[10px] pb-[100px]">

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
        }
    }
}
</script>
