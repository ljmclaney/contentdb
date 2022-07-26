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
                    <Link :href="route('viewPage', [project.id, page.id])" v-if="Object.keys(fields).length" class="btn-outline">Add content</Link>
                    <button @click="saveFields()" class="btn-primary">Save</button>
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

            <div class="fixed bottom-[20px] left-0 w-full flex flex-col items-center justify-center pointer-events-none">

                <div v-if="!Object.keys(fields).length" class="mb-[30px] animate-bounce rounded-full w-[50px] h-[50px] bg-indigo-50 border border-indigo-500 text-indigo-500 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>

                <div class="nav-bar shadow p-2 flex items-center space-x-3 border border-gray-200 rounded">

                    <button @click="addField('text')" class="pointer-events-auto h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
                        </svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[130px]">
                            Text field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('image')" class="pointer-events-auto h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                        </svg>

                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[150px]">
                             Media upload field
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </button>

                    <button @click="addField('video')" class="pointer-events-auto h-[50px] w-[50px] flex items-center justify-center bg-white hover:bg-indigo-50 border border-gray-200 hover:border-indigo-500 rounded text-gray-500 hover:text-indigo-500 transition-all relative group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                        <div id="tooltip-light" role="tooltip" class="inline-flex justify-center absolute -top-[50px] z-10 py-2 px-3 text-sm font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 tooltip group-hover:opacity-100 w-[150px]">
                            Video field
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
                sort_order: this.sortOrder,
                settings: {
                    character_limit: null,
                    repeatable: false
                },
                html_content: null
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
            this.fields.splice(index, 1)
        },

        saveFields() {

            console.log(this.fields)

            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.page.id + '/fields',
                {
                    fields: this.fields
                }
            )
        }
    }
}
</script>
