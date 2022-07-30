<template>
    <Layout>
        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-3xl mx-auto space-y-[30px]">

                <div class="bg-white rounded shadow border border-gray-300 p-5 sm:flex sm:items-center sm:justify-between">
                    <h3 class="text-2xl font-bold">{{ project.name }}</h3>
                </div>

                <div v-if="Object.keys(pages).length" class="bg-white rounded shadow border border-gray-300 py-5">

                    <div class="px-5">
                        <div class="sm:flex sm:items-center">
                            <div class="sm:flex-auto">
                                <h1 class="text-xl font-bold ">Pages</h1>

                            </div>
                        </div>
                        <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <thead>
                                        <tr>
                                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6 md:pl-0">Name</th>
                                            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold ">Last updated</th>
                                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200">
                                        <tr v-for="page in pages">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-6 md:pl-0">
                                                <Link :href="route('viewSharedPage', [project.id, uuid, page.id])" class="text-indigo-600 hover:text-indigo-900">{{ page.name }}</Link>
                                            </td>
                                            <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
                                                {{ page.updated_at }}
                                            </td>
                                            <!--<td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                                                <Link :href="route('editProject', page.id )" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                            </td>-->
                                        </tr>

                                        <!-- More people... -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div v-if="!Object.keys(pages).length" class="flex flex-col justify-center items-center text-center pt-[100px]">

                    <div class="mb-[30px]">
                        <h3 class="text-xl font-bold mb-[15px]">Nothing to see yet!</h3>
                        <p class="text-gray-500">No pages have been added yet, please check back later.</p>
                    </div>

                </div>

            </div>

        </div>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/Shared.vue'

export default {
    components: {
        Link,
        Layout
    },

    props: {
        project: Object,
        pages: Object,
        uuid: String
    }
}
</script>
