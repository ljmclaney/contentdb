<template>
    <div class="bg-white rounded shadow border border-gray-200">
        <div class="flex items-center border-b border-gray-200 p-5 relative cursor-move">
            <h3 class="text-lg font-bold">{{ fieldData.label }}</h3>
        </div>
        <div class="p-5" v-if="fieldData.type !== 'divider'">

            <div class="space-y-2.5 max-w-lg" v-if="fieldData.type === 'text'">
                <editor v-model="fieldData.html_content" :character-limit="fieldData.settings.character_limit" />
            </div>

            <div v-if="fieldData.type === 'image'">
                <div class="w-40 h-40 border border-gray-200 rounded flex justify-center items-center text-gray-500">

                    <span>Upload image</span>

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
        fieldData: Object
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
        }
    }

}
</script>
