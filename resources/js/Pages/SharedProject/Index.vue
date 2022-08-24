<template>
    <Layout>
        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewSharedProject', [project.id, uuid])" class="text-black hover:text-indigo-500 transition-all">Projects</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">{{ project.name }}</li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">

                <div class="h-[42px]">
                </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-4xl mx-auto space-y-[30px]">

                <div v-if="Object.keys(pages).length" class="bg-white rounded border border-gray-300">

                    <div>
                        <div class="sm:flex sm:items-center p-5 border-b border-gray-300">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-bold ">Pages</h1>

                            </div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <div class="min-w-full divide-y divide-gray-300">
                                        <div>
                                            <div class="flex items-center justify-between">
                                                <div class="py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-1/2">Name</div>
                                                <div class="py-3.5 pl-4 pr-3 text-left font-semibold sm:pl-6 md:pl-0 w-1/4">Status</div>
                                                <div class="py-3.5 px-3 text-left font-semibold text-right w-1/4">Last updated</div>
                                            </div>
                                        </div>
                                        <ul class="divide-y divide-gray-200">
                                            <shared-page-item v-for="page in pages" :project="project" :node="page" :pages="pages"></shared-page-item>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-if="!Object.keys(pages).length" class="flex flex-col justify-center items-center text-center pt-[100px]">

                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">Nothing to see yet!</h3>
                        <p class="text-black">No pages have been added yet, please check back later.</p>
                    </div>

                </div>

            </div>

        </div>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/Shared.vue'
import SharedPageItem from "@/Components/SharedPageItem.vue";

export default {
    components: {
        Link,
        Layout,
        SharedPageItem
    },

    props: {
        project: Object,
        pages: Object,
        uuid: String
    }
}
</script>
