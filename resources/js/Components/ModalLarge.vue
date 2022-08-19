<template>
    <TransitionRoot as="template" :show="modalOpen">
        <Dialog as="div" class="relative z-[999]" @close="closeModal()">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-3xl sm:w-full sm:p-6">
                            <slot></slot>
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

    methods: {
        closeModal() {

            this.$emit('closeModal', true)
        }
    }
}
</script>
