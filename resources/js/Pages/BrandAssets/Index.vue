<template>
    <Layout>

        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewProject', project.id)" class="text-black hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">Brand assets</li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div>
                    <button @click="uploadAsset = true" class="btn-primary">Upload asset</button>
                </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-4xl mx-auto space-y-[30px]">

                <div v-if="Object.keys(brandAssets.data).length" class="bg-white rounded border border-gray-300">

                    <div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="(asset, index) in brandAssets.data">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 md:pl-0 w-3/4">
                                                    <span class="font-bold">{{ asset.name }}</span>
                                                </td>
                                                <td class="text-right py-4 flex items-center justify-end space-x-3">
                                                    <a :href="'/storage' + asset.file" :download="asset.uuid" class="btn-outline">Download</a>
                                                    <button class="btn-red" @click="initiateDelete(asset.id)">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-if="!Object.keys(brandAssets.data).length" class="flex flex-col justify-center items-center text-center pt-[100px]">

                    <div>
                        <div class="mb-[30px]">
                            <h3 class="text-xl font-bold mb-[15px]">Upload brand assets!</h3>
                            <p class="text-black">Upload and organize the brand assets needed for this project.</p>
                        </div>

                        <button @click="uploadAsset = true" type="button" class="btn-primary">Upload an asset</button>

                    </div>

                </div>

            </div>

        </div>

        <slide-over :open="uploadAsset" @closeSlider="uploadAsset = false" title="Upload an asset">

            <form @submit.prevent="uploadFile" class="space-y-[15px]">
                <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                    {{ form.progress.percentage }}%
                </progress>

                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Asset name</label>
                    <div class="mt-1">
                        <input type="text" id="name" v-model="form.name" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <div v-if="form.errors.name" class="text-sm text-red-600 mt-1">{{ form.errors.name }}</div>
                    </div>
                </div>

                <div>
                    <label class="relative overflow-hidden w-full h-40">
                        <span class="w-full h-40 bg-gray-50 border border-dashed border-gray-300 rounded flex justify-center items-center text-black font-medium hover:bg-gray-50 hover:border-brand-dark-blue transition-all relative z-20 cursor-pointer">Select file</span>
                        <input type="file" @input="form.file = $event.target.files[0]" class="absolute z-10 top-0 opacity-0" />
                        <div v-if="form.errors.file" class="text-sm text-red-600 mt-1">{{ form.errors.file }}</div>
                    </label>
                </div>

                <button class="btn-primary">
                    <span v-if="!uploadLoading">Upload</span>
                    <span v-if="uploadLoading" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                        Uploading
                    </span>
                </button>

            </form>

        </slide-over>

        <modal :open="showDeleteModal">
            <form>

                <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5 text-red-600" viewBox="0 0 16 16">
                            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900"> Delete file</h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">Are you sure you want to delete this file? This action cannot be undone.</p>
                        </div>
                    </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button @click="deleteFile()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Delete</button>
                    <button @click="showDeleteModal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" ref="cancelButtonRef">Cancel</button>
                </div>

            </form>
        </modal>

    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import Modal from '@/Components/ModalLarge.vue'
import {Inertia} from "@inertiajs/inertia";

export default {
    components: {
        Link,
        Layout,
        SlideOver,
        Modal
    },

    props: {
        project: Object,
        brandAssets: Object
    },

    data() {
        return {
            uploadAsset: false,
            uploadLoading: false,
            form: this.$inertia.form({
                name: null,
                file: null
            }),
            showDeleteModal: false,
            selectedFileToDelete: null
        }
    },

    methods: {

        uploadFile() {

            this.uploadLoading = true

            this.form.post(route('uploadFile', this.project.id), {
                preserveScroll: true,
                onSuccess: () => {
                    this.form.name = null
                    this.form.file = null
                    this.uploadLoading = false
                    this.uploadAsset = false
                },
                onError: () => {
                    this.uploadLoading = false
                }
            })
        },

        initiateDelete(fileID) {
            this.selectedFileToDelete = fileID

            this.showDeleteModal = true
        },

        deleteFile() {

            this.showDeleteModal = false

            this.$inertia.delete(route('deleteFile', [this.project.id, this.selectedFileToDelete]))
        },
    }
}
</script>
