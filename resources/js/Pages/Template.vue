<template>
    <div class="max-w-5xl mx-auto px-4 relative" :class="{'pt-[50px] pb-[112px]': Object.keys(fields).length}">
        <div class="max-w-3xl mx-auto space-y-[30px]">

            <div v-if="Object.keys(fields).length" v-for="(field, index) in fields" :key="field.hash">
                <template-field
                    @clone="cloneField(index)"
                    @delete="deleteField(index)"
                    v-model="fields[index]"
                    :field-data="field"
                />
            </div>

            <div v-if="!Object.keys(fields).length" class="flex flex-col justify-center items-center h-screen -mt-[100px] text-gray-500 text-center">

                <div>
                Let's start building your page structure!<br>
                Select a field from the bottom.
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
                        Image field
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
            </div>
        </div>
    </div>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import TemplateField from '@/Components/TemplateField.vue'

import {cloneDeep} from "lodash";

export default {
    components: {
        EditorContent,
        TemplateField
    },

    data() {
        return {
            editor: null,
            fields: []
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

        addField(type) {
            this.fields.push({
                'type': type,
                hash: new Date().getTime()
            })
        },

        cloneField(index) {
            let field = cloneDeep(this.fields[index])

            field.hash = new Date().getTime()

            this.fields.push(field)
        },

        deleteField(index) {
            console.log(index)
            this.fields.splice(index, 1)
        },
    }
}
</script>
