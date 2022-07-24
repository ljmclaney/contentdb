<template>
    <div class="bg-white rounded shadow border border-gray-200">
        <div class="flex items-center border-b border-gray-200 p-5 relative cursor-move">

            <div class="absolute top-0 left-0 w-full flex flex-col items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </div>

            <input v-model="label" @keyup="update()" type="text" class="border-0 hover:bg-gray-100 focus:bg-gray-100 active:focus:outline-none focus:ring-0 w-full font-bold text-lg" placeholder="Enter a label">
        </div>
        <div class="p-5">
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
        <div class="flex items-center border-t border-gray-200 p-5">
            <input v-model="instructions" @keyup="update()" type="text" class="border-0 hover:bg-gray-100 focus:bg-gray-100 active:focus:outline-none focus:ring-0 text-sm w-full" placeholder="Add instructions">

            <div class="flex pl-[20px] space-x-[5px]">
                <button @click="$emit('cloneField')" class="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-indigo-50 text-gray-500 hover:text-indigo-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy "><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>

                <button @click="$emit('delete')" class="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-indigo-50 text-gray-500 hover:text-indigo-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>

                <div class="relative">
                    <button @click="settingsActive = !settingsActive" class="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-indigo-50 text-gray-500 hover:text-indigo-500 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    </button>

                    <div v-click-outside="hide" v-if="settingsActive" class="origin-top-right absolute z-20 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                            <button type="button" class="w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">Set word limit</button>
                            <button type="button" class="w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-1">Set required</button>
                            <button type="button" class="w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-1">Make repeatable</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

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
                hash: this.fieldData.hash,
                order: this.fieldData.order,
                label: this.label,
                instructions: this.instructions
            });
        }
    }

}
</script>
