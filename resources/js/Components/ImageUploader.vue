<template>
    <TransitionRoot as="template" :show="modalOpen">
        <Dialog as="div" class="relative z-[999]" @close="closeModal()">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">

                            <div>

                                <div class="mb-4" v-if="base64">
                                    <img class="img" :src="base64" alt="Image preview" />
                                </div>

                                <div class="flex space-x-3">
                                    <div class="btn-outline relative cursor-pointer">
                                        <label for="user-photo" class="relative text-sm font-medium text-blue-gray-900 pointer-events-none">
                                            <span>Select image</span>
                                        </label>
                                        <input id="user-photo" name="user-photo" type="file" @change="uploadImage" accept="image/*" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md">
                                    </div>

                                    <button @click="closeUploader" type="button" class="btn-primary" :disabled="!base64">Insert image</button>
                                </div>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot
    },

    props: {
        open: Boolean
    },

    computed: {
        modalOpen() {
            return this.open
        }
    },

    data() {
        return {
            image: null,
            base64: null
        }
    },

    methods: {
        closeUploader() {
            this.$emit('closeUploader', this.base64)

            this.base64 = null
        },

        async uploadImage(event) {
            const file = event.target.files[0];
            this.base64 = await this.convertBase64(file);
        },

        convertBase64(file) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file)

                fileReader.onload = () => {
                    resolve(fileReader.result)
                }

                fileReader.onerror = (error) => {
                    reject(error)
                }
            })
        }
    }
}
</script>
