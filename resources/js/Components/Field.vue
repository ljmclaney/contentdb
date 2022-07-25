<template>
    <div class="bg-white rounded shadow border border-gray-200">
        <div class="flex items-center border-b border-gray-200 p-5 relative cursor-move">
            <h3 class="text-lg font-bold">{{ fieldData.label }}</h3>
        </div>
        <div class="p-5 border-b border-gray-200" v-if="fieldData.type !== 'divider'">

            <div class="space-y-2.5 max-w-lg" v-if="fieldData.type === 'text'">
                <div class="flex mb-5 space-x-2" v-if="editor">
                    <span class="rbg-white  elative z-0 inline-flex shadow-sm rounded border border-gray-300">
                    <button class="inline-flex items-center px-2.5 py-1.5 border-r border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50" :class="{ 'is-active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
                        Bold
                    </button>
                    <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
                        Italic
                    </button>
                    </span>
                </div>
                <editor-content :editor="editor" class="focus:ring-0" />
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
        <div class="flex items-center p-5">

            <div class="w-full text-sm">
                {{ fieldData.instructions }}
            </div>
        </div>
    </div>
</template>

<script>

import {Editor, EditorContent} from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
export default {
    components: {EditorContent},
    props: {
        fieldData: Object
    },

    data() {
        return {
            editor: null,
        }
    },

    emits: ["update:modelValue"],

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
