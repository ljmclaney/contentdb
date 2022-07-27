<template>
    <Layout>

        <div class="sticky top-0 z-40 bg-white rounded shadow border border-gray-200 p-5 sm:flex sm:items-center sm:justify-between mb-[30px]">
            <ul class="text-2xl font-bold flex items-center space-x-[10px]">
                <li><Link :href="route('viewSharedProject', [project.id, uuid])" class="text-gray-500 hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                <li class="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li>{{ page.name }}</li>
            </ul>

            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-[10px]" v-if="Object.keys(fields).length">
                <button @click="saveFields()" class="btn-primary">Save</button>
            </div>
        </div>

        <div class="max-w-3xl mx-auto px-4 relative pt-[10px] pb-[100px]">

            <div class="mb-10">
                <div class="block">
                    <div class="border-b border-gray-200">
                        <nav class="-mb-px flex justify-between items-center" aria-label="Tabs">
                            <ul class="flex space-x-8">
                                <li v-for="section in sections">
                                    <Link :href="route('viewSection', [project.id, page.id, section.id])" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium" :class="{'border-indigo-500 text-indigo-600': selectedSection.id === section.id}">{{ section.name }}</Link>
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

                <div v-if="!Object.keys(fields).length" class="flex flex-col justify-center items-center pt-[100px] text-gray-500 text-center">

                    <div>
                        <h3 class="text-xl font-bold mb-[15px]">Nothing to see yet!</h3>
                        <p class="text-gray-500">No page fields have been added yet, please check back later.</p>
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
