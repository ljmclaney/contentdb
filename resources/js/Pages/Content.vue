<template>
    <div class="max-w-3xl mx-auto px-4 py-[50px]">

        <div class="bg-white rounded shadow border border-gray-300">
            <div class="flex items-center border-b border-gray-300 p-5">
                <h3 class="font-bold">Header title</h3>
            </div>
            <div class="p-5">
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
            <div class="flex items-center border-t border-gray-300 p-5">
                <p class="text-sm text-gray-500">Useful help text</p>
            </div>
        </div>


    </div>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default {
    components: {
        EditorContent,
    },

    data() {
        return {
            editor: null,
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
}
</script>
