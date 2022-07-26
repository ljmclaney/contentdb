<template>
    <div class="bg-white rounded shadow border border-gray-200">
        <div class="flex items-center border-b border-gray-200 p-5 relative cursor-move">

            <div class="absolute top-0 left-0 w-full flex flex-col items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>

            <input v-model="label" @keyup="update()" type="text" class="border-0 hover:bg-gray-100 bg-gray-100 active:focus:outline-none focus:ring-0 w-full font-bold text-lg" placeholder="Enter a label">
        </div>
        <div class="p-5 border-b border-gray-200" v-if="fieldData.type !== 'divider'">
            <div class="space-y-2.5 max-w-lg" v-if="fieldData.type === 'text'">
                <div class="flex items-center space-x-2 w-full">
                    <div class="h-2.5 bg-gray-200 rounded-full w-32"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
                </div>
                <div class="flex items-center w-full space-x-2 max-w-[480px]">
                    <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
                </div>
                <div class="flex items-center w-full space-x-2 max-w-[400px]">
                    <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
                    <div class="h-2.5 bg-gray-200 rounded-full w-80"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
                </div>
                <div class="flex items-center w-full space-x-2 max-w-[480px]">
                    <div class="h-2.5 bg-gray-200 rounded-full w-full"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-full"></div>
                    <div class="h-2.5 bg-gray-300 rounded-full w-24"></div>
                </div>
            </div>

            <div v-if="fieldData.type === 'file'">
                <div class="w-40 h-40 border border-gray-200 rounded flex justify-center items-center text-gray-500">

                    <span>Upload file</span>

                </div>
            </div>

            <div v-if="fieldData.type === 'video'">
                <div class="flex items-center">
                    <input type="url" placeholder="Enter video URL" class="border border-r-0 border-gray-200 rounded-l w-full">
                    <button class="border border-gray-200 rounded-r flex-shrink-0 inline-flex px-5 py-2 text-gray-500 hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-500 transition-all">Add video</button>
                </div>
            </div>

        </div>
        <div class="flex items-center p-5">

            <div class="w-full">
                <input v-model="instructions" @keyup="update()" type="text" class="border-0 hover:bg-gray-100 focus:bg-gray-100 active:focus:outline-none focus:ring-0 text-sm w-full" placeholder="Add instructions or description">
            </div>

            <div class="flex pl-[20px] space-x-[5px]">
                <button @click="$emit('cloneField')" class="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-indigo-50 text-gray-500 hover:text-indigo-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy "><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>

                <button @click="$emit('delete')" class="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-indigo-50 text-gray-500 hover:text-indigo-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>

                <div class="relative" v-if="fieldData.type === 'text'">
                    <button @click="settingsActive = !settingsActive" class="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-indigo-50 text-gray-500 hover:text-indigo-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </button>
                </div>
            </div>
        </div>

        <slide-over :open="settingsActive" @closeSlider="settingsActive = false" title="Field settings">

            <div class="space-y-[15px]">

                <div>
                    <label for="fieldData.settings.character_limit" class="block text-sm font-medium text-gray-700">Character limit</label>
                    <div class="mt-1">
                        <input type="number" name="fieldData.settings.character_limit" id="fieldData.settings.character_limit" v-model="fieldData.settings.character_limit" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                </div>

                <button @click="settingsActive = false" class="btn-primary">Save</button>
            </div>

        </slide-over>

    </div>
</template>

<script>

import SlideOver from '@/Components/SlideOver.vue'

export default {

    components: {
        SlideOver
    },

    props: {
        fieldData: Object
    },

    data() {
        return {
            settingsActive: false,
            label: this.fieldData.label !== undefined ? this.fieldData.label : null,
            instructions: this.fieldData.instructions !== undefined ? this.fieldData.instructions : null
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
                instructions: this.instructions,
                settings: JSON.parse(JSON.stringify(this.fieldData.settings)),
                html_content: this.fieldData.html_content
            });
        },
    }

}
</script>
