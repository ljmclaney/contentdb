<template>
    <div class="bg-white rounded shadow border border-gray-200">
        <div class="flex items-center border-b border-gray-200 p-5 relative cursor-move">
            <h3 class="text-lg font-bold">{{ fieldData.label }}</h3>
        </div>
        <div class="p-5" v-if="fieldData.type !== 'divider'">

            <div class="space-y-2.5 max-w-lg" v-if="fieldData.type === 'text'">
                <editor v-model="fieldData.html_content" :character-limit="fieldData.settings.character_limit" />
            </div>

            <div v-if="fieldData.type === 'file'">

                <div class="flex flex-wrap">


                    <a :href="'/storage' + file.file" :download="file.uuid" v-if="fieldData.json_content" v-for="file in fieldData.json_content" class="w-40 h-40 bg-white border border-gray-200 rounded flex justify-center items-center text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 transition-all relative z-20 mr-[10px] mb-[10px]">

                        <img v-if="file.type === 'image'" :src="/storage' + file.file">

                        <div v-if="file.type === 'file'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-10 h-10" viewBox="0 0 16 16">
                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
                            </svg>
                        </div>
                    </a>

                    <form @submit.prevent="uploadImage" class="mb-[10px]">
                        <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                            {{ form.progress.percentage }}%
                        </progress>

                        <label class="relative overflow-hidden w-40 h-40 bg-white">
                            <span class="w-40 h-40 bg-white border border-gray-200 rounded flex justify-center items-center text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 transition-all relative z-20 cursor-pointer">Select file</span>
                            <input type="file" @input="form.image = $event.target.files[0]" class="absolute z-10 top-0 opacity-0" />
                        </label>

                        <button class="btn-default mt-2">Upload</button>

                    </form>
                </div>
            </div>

            <div v-if="fieldData.type === 'video'">
                <div class="flex items-center">
                    <input type="url" placeholder="Enter video URL" class="border border-r-0 border-gray-200 rounded-l w-full">
                    <button class="border border-gray-200 rounded-r flex-shrink-0 inline-flex px-5 py-2 text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 transition-all">Add video</button>
                </div>
            </div>

            <div v-if="fieldData.type === 'document'">
                <div class="w-40 h-40 border border-gray-200 rounded flex justify-center items-center text-gray-500">

                    <span>Upload a file</span>

                </div>
            </div>
        </div>
        <div class="flex items-center p-5 border-t border-gray-200" v-if="fieldData.instructions">
            <div class="w-full text-sm">
                {{ fieldData.instructions }}
            </div>
        </div>
    </div>
</template>

<script>

import Editor from '@/Components/Editor.vue'

export default {
    components: {
        Editor
    },

    props: {
        fieldData: Object,
        page: Object,
        project: Object
    },

    data() {
        return {
            form: this.$inertia.form({
                image: null,
                field_id: this.fieldData.id
            }),
        }
    },

    emits: ["update:modelValue"],

    methods: {
        hide() {
            this.settingsActive = false
        },

        update() {
            this.$emit("update:modelValue", {
                type: this.fieldData.type,
                uuid: this.fieldData.uuid,
                sort_order: this.fieldData.sort_order,
                label: this.label,
                instructions: this.instructions
            });
        },

        uploadImage() {

            if (!this.form.image) {
                return
            }

            this.form.post('/projects/' + this.project.id + '/pages/' + this.page.id + '/upload-image', {
                preserveScroll: true
            })
        },
    }

}
</script>
