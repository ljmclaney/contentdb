<template>
    <Layout>
        <div class="max-w-3xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="bg-white rounded shadow border border-gray-200 p-5 sm:flex sm:items-center sm:justify-between mb-[30px]">
                <ul class="text-2xl font-bold flex items-center space-x-[10px]">
                    <li><Link :href="route('viewProject', project.id)" class="text-gray-500 hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                    <li class="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                    <li>{{ page.name }}</li>
                </ul>

                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-[10px]">
                    <Link :href="route('viewPage', [project.id, page.id])" v-if="Object.keys(fields).length" class="btn-default">Add content</Link>
                    <button @click="saveFields()" class="btn-default">Save</button>
                </div>
            </div>

            <div class="space-y-[30px]" id="fields">

                <div v-if="Object.keys(fields).length" v-for="(field, index) in fields" :key="field.uuid" :data-id="field.uuid">
                    <input type="hidden" v-model="fields[index]['sort_order']">
                    <template-field
                        @cloneField="cloneField(index)"
                        @delete="deleteField(index)"
                        v-model="fields[index]"
                        :field-data="field"
                    />
                </div>

                <div v-if="!Object.keys(fields).length" class="flex flex-col justify-center items-center pt-[100px] text-gray-500 text-center">

                    <div>
                        <h3 class="text-xl font-bold mb-[15px]">Let's start building your page structure!</h3>
                        <p class="text-gray-500">Select a field from the bottom.</p>
                    </div>

                </div>

            </div>

            <div class="fixed bottom-[20px] left-0 w-full flex flex-col items-center justify-center">
                <div v-if="!Object.keys(fields).length" class="mb-[30px] animate-bounce rounded-full w-[50px] h-[50px] bg-indigo-50 border border-indigo-500 text-indigo-500 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>


                <div class="nav-bar shadow p-2 flex items-center space-x-3 border border-gray-200 rounded">

                    <button @click="addField('text')" class="h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Text field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('image')" class="h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Media field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('video')" class="h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Video field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('document')" class="h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Document field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('divider')" class="h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-commit"><circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line></svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Divider
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import TemplateField from '@/Components/TemplateField.vue'
import Sortable from 'sortablejs';
import {cloneDeep} from "lodash";
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        Link,
        Layout,
        TemplateField
    },

    props: {
        page: Object,
        project: Object,
        fields: Object
    },

    data() {
        return {
            sortOrder: 0
        }
    },

    mounted() {
        let $this = this;

        var el = document.getElementById('fields');
        var sortable = Sortable.create(el, {
            onChange: function (evt) {

                let list = this.toArray();

                console.log(list)

                list.forEach(function (uuid, index) {

                    let field = _.findKey($this.fields, {
                        uuid: uuid
                    })

                    $this.fields[field].sort_order = index
                })
            },
        });

    },

    methods: {

        addField(type) {
            this.fields.push({
                'type': type,
                uuid: uuidv4(),
                sort_order: this.sortOrder
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
            console.log(index)
            this.fields.splice(index, 1)
        },

        saveFields() {
            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.page.id + '/fields',
                {
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
