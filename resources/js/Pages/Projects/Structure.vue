<template>
    <Layout class="bg-gray-50">
        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-10 sm:flex sm:items-center sm:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewProject', project.id)" class="text-black hover:text-indigo-600 transition-all">{{ project.name }}</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">{{ page.name }}</li>
            </ul>

            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-[10px]">
                <Link :href="route('viewPage', [project.id, page.id])" v-if="Object.keys(fields).length" class="btn-outline">Edit content</Link>
                <button @click="saveFields()" class="btn-primary" :class="{ 'opacity-25': processing }" :disabled="processing">Save</button>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 relative pt-[10px] pb-[100px] ">

            <div class="mb-10">
                <div class="block">
                    <div class="border-b border-gray-300">
                        <nav class="-mb-px flex justify-between items-center" aria-label="Tabs">
                            <ul class="flex space-x-8">
                                <li v-for="section in sections">
                                    <Link :href="route('pageStructureSection', [project.id, page.id, section.id])" class="border-transparent hover:text-indigo-600 hover:border-indigo-500 whitespace-nowrap flex pt-4 pb-2 px-1 border-b-2 font-medium" :class="{'border-black text-black': selectedSection.id === section.id}">{{ section.name }}</Link>
                                </li>
                            </ul>

                            <div class="ml-5">
                                <button @click="createSection = true" class="rounded-full bg-brand-blue w-10 h-10 flex items-center justify-center hover:bg-indigo-600 hover:bg-brand-dark-blue transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div class="space-y-10" id="fields">

                <div v-if="Object.keys(fields).length" v-for="(field, index) in fields" :key="field.uuid" :data-id="field.uuid">
                    <input type="hidden" v-model="fields[index]['sort_order']">
                    <template-field
                        @cloneField="cloneField(index)"
                        @delete="deleteField(index)"
                        v-model="fields[index]"
                        :field-data="field"
                        :ref="field.uuid"
                        :id="'field-' + field.uuid"
                    />
                </div>

                <div v-if="!Object.keys(fields).length" class="flex flex-col justify-center items-center pt-[12vh] text-black text-center">

                    <div>
                        <h3 class="text-xl font-bold mb-[15px]">Let's start building your page structure!</h3>
                        <p class="text-black">Select a field from the bottom.</p>
                    </div>

                </div>

            </div>

            <div class="fixed bottom-[20px] left-0 w-full flex flex-col items-center justify-center pointer-events-none">

                <div v-if="!Object.keys(fields).length" class="mb-[10px] animate-bounce rounded-full w-[50px] h-[50px] bg-brand-blue text-black flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>

                <div class="bg-white shadow-md p-2 flex items-center space-x-3 border border-gray-300 rounded">

                    <button @click="addField('text')" class="pointer-events-auto h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-brand-blue hover:text-black hover:border-brand-dark-blue border border-gray-300 rounded text-black transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                        </svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-black rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Text field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('file')" class="pointer-events-auto h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-brand-blue hover:text-black hover:border-brand-dark-blue border border-gray-300 rounded text-black transition-all relative group">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                        </svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-black rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[150px]">
                             File upload field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                </div>
            </div>
        </div>

        <slide-over :open="createSection" @closeSlider="createSection = false" title="Create a section">

            <div class="space-y-[15px]">
                <div>
                    <label for="page" class="block text-sm font-medium text-gray-700">Section name</label>
                    <div class="mt-1">
                        <input type="text" name="page" id="page" v-model="newSection" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-600 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>

                <button @click="saveSection()" class="btn-primary">Save</button>
            </div>

        </slide-over>

    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import TemplateField from '@/Components/TemplateField.vue'
import SlideOver from '@/Components/SlideOver.vue'

import Sortable from 'sortablejs';
import {cloneDeep} from "lodash";
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        Link,
        Layout,
        TemplateField,
        SlideOver
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
            sortOrder: 0,
            createSection: false,
            newSection: null,
            processing: false,
            deletedFields: []
        }
    },

    mounted() {

        if (this.fields.length) {
            this.sortOrder = this.fields.length + 1;
        }


        let $this = this;

        const fieldsEl = document.getElementById('fields');

        Sortable.create(fieldsEl, {
            onChange: function (evt) {

                let list = this.toArray();

                list.forEach(function (uuid, index) {

                    let field = _.findKey($this.fields, {
                        uuid: uuid
                    })

                    $this.fields[field].sort_order = index
                })
            }
        });

    },

    methods: {

        addField(type) {

            let uuid = uuidv4();

            this.fields.push({
                'type': type,
                uuid: uuid,
                sort_order: this.sortOrder,
                settings: {
                    character_limit: null,
                    repeatable: false
                },
                html_content: null
            })

            this.$nextTick(()=> {
                document.getElementById('field-' + uuid).scrollIntoView({behavior: 'smooth'});
            })

            this.sortOrder++
        },

        cloneField(index) {

            let field = cloneDeep(this.fields[index])

            field.uuid = uuidv4()

            field.sort_order = this.sortOrder

            this.sortOrder++

            this.fields.push(field)
        },

        deleteField(index) {

            if (this.fields[index].id) {
                this.deletedFields.push(this.fields[index].id);
            }

            this.fields.splice(index, 1)
        },

        async saveFields() {

            this.processing = true

            await this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.page.id + '/fields',
                {
                    sectionID: this.selectedSection.id,
                    fields: this.fields,
                    deletedFields: this.deletedFields
                },
                {
                    preserveState: false,
                    preserveScroll: true
                }
            )
        },

        saveSection() {
            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.page.id + '/sections',
                {
                    newSection: this.newSection
                },
                {
                    preserveScroll: true
                }
            )

            this.newSection = null
            this.createSection = false
        },
    }
}
</script>
