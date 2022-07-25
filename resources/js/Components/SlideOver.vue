<template>
    <TransitionRoot as="template" :show="sliderOpen">
        <Dialog as="div" class="relative z-[999]" @close="closeSlider()">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div class="px-4 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900"> Panel title </DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500" @click="closeSlider()">
                                                    <span class="sr-only">Close panel</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                        <!-- Replace with your content -->
                                        <div class="absolute inset-0 px-4 sm:px-6">
                                            <div class="h-full">
                                                <slot/>
                                            </div>
                                        </div>
                                        <!-- /End replace -->
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
    props: {
        open: Boolean
    },

    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot
    },

    computed: {
        sliderOpen() {
            return this.open
        }
    },

    methods: {
        closeSlider() {
            this.sliderOpen = false

            this.$emit('closeSlider', true)
        }
    }
}
</script>
