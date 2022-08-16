<template>
    <div class="h-full relative">
        <div class="bg-white border border-gray-300 flex flex-wrap justify-center items-center sticky top-[235px] md:top-[82px] left-0 z-20" v-if="editor">
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'bg-gray-100': editor.isActive('heading', { level: 1 }) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'bg-gray-100': editor.isActive('heading', { level: 2 }) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'bg-gray-100': editor.isActive('heading', { level: 3 }) }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().setParagraph().run()" :class="{ 'bg-gray-100': editor.isActive('paragraph') }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" :class="{ 'bg-gray-100': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" :class="{ 'bg-gray-100': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" :class="{ 'bg-gray-100': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="setLink" :class="{ 'bg-gray-100': editor.isActive('link') }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="openImageUploader = true" :class="{ 'bg-gray-100': openImageUploader }">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                </svg>
            </button>
            <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="viewFullscreen()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                </svg>
            </button>
            <button class="h-[44px] inline-flex items-center px-4 py-3 font-medium text-gray-700 hover:bg-gray-100" @click="viewHtml()">
                View HTML
            </button>
        </div>

        <editor-content v-if="!openFullscreen" :editor="editor" class="focus:ring-0 p-5 bg-white border border-gray-300 border-t-0 border-b-0 "/>

        <div class="border border-gray-300 px-4 text-black max-w-4xl mx-auto text-brand-dark-blue font-medium sticky bottom-0 bg-white py-5" v-if="editor">
            <div v-if="characterLimit">{{ editor.storage.characterCount.characters() }}/{{ characterLimit }} characters</div>
            {{ editor.storage.characterCount.words() }} words
        </div>

        <wide-modal :open="openHtmlView" @closeModal="closeHtmlView">
            <pre class="overflow-hidden whitespace-pre-wrap text-slate-200 bg-slate-800 rounded p-10">{{ format(html) }}</pre>
        </wide-modal>

        <fullscreen v-if="openFullscreen" :open="openFullscreen" @closeModal="closeFullscreen">
            <div class="bg-white sticky top-0 left-0 z-[999]">
                <div class="bg-white z-0 flex flex-wrap justify-center mb-10">
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'bg-gray-100': editor.isActive('heading', { level: 1 }) }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'bg-gray-100': editor.isActive('heading', { level: 2 }) }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'bg-gray-100': editor.isActive('heading', { level: 3 }) }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="editor.chain().focus().setParagraph().run()" :class="{ 'bg-gray-100': editor.isActive('paragraph') }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" :class="{ 'bg-gray-100': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13H8.21zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" :class="{ 'bg-gray-100': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" :class="{ 'bg-gray-100': editor.isActive('bulletList') }" @click="editor.chain().focus().toggleBulletList().run()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="setLink" :class="{ 'bg-gray-100': editor.isActive('link') }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="openImageUploader = true" :class="{ 'bg-gray-100': openImageUploader }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="W-5 H-5" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100" @click="closeFullscreen()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
                            <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
                        </svg>
                    </button>
                    <button class="inline-flex items-center px-4 py-3  font-medium text-gray-700 hover:bg-gray-100" @click="viewHtml()">
                        View HTML
                    </button>
                </div>
            </div>

            <editor-content :editor="editor" class="focus:ring-0"/>
            <div class="text-black max-w-4xl mx-auto text-indigo-600 font-medium sticky bottom-0 bg-white py-5 mt-5 z-[999]" v-if="editor">
                <div v-if="characterLimit">{{ editor.storage.characterCount.characters() }}/{{ characterLimit }} characters</div>
                {{ editor.storage.characterCount.words() }} words
            </div>
        </fullscreen>

        <image-uploader :open="openImageUploader" @closeUploader="insertImage"></image-uploader>


    </div>
</template>
<script>
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import Placeholder from '@tiptap/extension-placeholder'
import Link from '@tiptap/extension-link'
import CharacterCount from '@tiptap/extension-character-count'
import Image from '@tiptap/extension-image'
import WideModal from '@/Components/WideModal.vue'
import Fullscreen from '@/Components/Fullscreen.vue'
import ImageUploader from "@/Components/ImageUploader.vue";

export default {
    components: {
        EditorContent,
        WideModal,
        Fullscreen,
        ImageUploader
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
        characterLimit: {
            type: [Number, String]
        }
    },

    emits: ['update:modelValue'],

    data() {
        return {
            editor: null,
            html: null,
            openHtmlView: false,
            openFullscreen: false,
            openImageUploader: false
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
                CharacterCount.configure({
                    limit: this.characterLimit,
                }),
                Image.configure({
                    allowBase64: true
                })
            ],
            editorProps: {
                attributes: {
                    class: 'prose prose-black prose-a:text-band-blue p-0 focus:outline-none max-w-4xl mx-auto',
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

        viewHtml() {
            this.openHtmlView = true
            this.html = this.editor.getHTML()
        },

        closeHtmlView() {
            this.openHtmlView = false
        },

        viewFullscreen() {
            this.openFullscreen = true
        },

        closeFullscreen() {
            this.openFullscreen = false
        },

        format(html) {
            var tab = '\t';
            var result = '';
            var indent= '';

            html.split(/>\s*</).forEach(function(element) {
                if (element.match( /^\/\w/ )) {
                    indent = indent.substring(tab.length);
                }

                result += indent + '<' + element + '>\r\n';

                if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) {
                    indent += tab;
                }
            });

            return result.substring(1, result.length-3);
        },

        insertImage(data) {
            this.editor.chain().focus().setImage({ src: data }).run()

            this.openImageUploader = false
        }
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
