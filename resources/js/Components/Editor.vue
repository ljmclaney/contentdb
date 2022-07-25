<template>
    <div>
        <div class="flex mb-5 space-x-2" v-if="editor">
        <div class="bg-white relative z-0 inline-flex shadow-sm rounded border border-gray-300 divide-x divide-gray-300">

            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'bg-indigo-100': editor.isActive('heading', { level: 1 }) }">
                H1
            </button>
            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'bg-indigo-100': editor.isActive('heading', { level: 2 }) }">
                H2
            </button>
            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'bg-indigo-100': editor.isActive('heading', { level: 3 }) }">
                H3
            </button>
            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" :class="{ 'bg-indigo-100': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
                Bold
            </button>
            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" :class="{ 'bg-indigo-100': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
                Italic
            </button>
            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" @click="setLink" :class="{ 'bg-indigo-100': editor.isActive('link') }">
                Add link
            </button>
            <button class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50" @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
                Remove link
            </button>
        </div>
        </div>
        <editor-content :editor="editor" class="focus:ring-0"/>
    </div>
</template>
<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'

export default {
    components: {
        EditorContent,
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                Placeholder.configure({
                    placeholder: 'Write something …',
                }),
                Link.configure({
                    openOnClick: false,
                }),
            ],
            editorProps: {
                attributes: {
                    class: 'prose p-0 focus:outline-none',
                },
            },
            content: this.modelValue,
            onUpdate: () => {
                // HTML
                this.$emit('update:modelValue', this.editor.getHTML())

                // JSON
                // this.$emit('update:modelValue', this.editor.getJSON())
            },
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },

    methods: {
        setLink() {
            const previousUrl = this.editor.getAttributes('link').href
            const url = window.prompt('URL', previousUrl)

            // cancelled
            if (url === null) {
                return
            }

            // empty
            if (url === '') {
                this.editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .unsetLink()
                    .run()

                return
            }

            // update link
            this.editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: url })
                .run()
        },
    }
}
</script>
<style>

/* Placeholder (at the top) */
.ProseMirror p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
