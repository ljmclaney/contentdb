<template>
    <li  class="relative">
        <div class="flex items-center justify-between" @mouseover="displayEdit = true" @mouseleave="displayEdit = false">
            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-3/4 truncate">
                <Link :href="route('viewPage', [project.id, node.id])" class="text-indigo-600 hover:text-indigo-900 truncate inline-flex items-center">

                    <span v-if="node.depth" class="flex items-center mr-2">
                        <span v-for="n in node.depth">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                            </svg>
                        </span>
                    </span>

                    {{ node.name }}
                </Link>
            </div>
            <div v-if="!displayEdit" class="whitespace-nowrap py-4 px-3 text-black text-right flex-shrink-0">
                {{ node.updated_at }}
            </div>

            <div v-if="displayEdit" class="bg-white">
                <div class="bg-gray-100 rounded  z-20 flex items-center top-1.5 right-0">
                    <button class="p-4 hover:bg-gray-200" @click="editPage(node.id)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </button>

                    <button class="p-4 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 h-4" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <ul v-if="node.children && node.children.length" class="border-t border-gray-200 divide-y divide-gray-200">
            <node v-for="child in node.children" :project="project" :node="child"></node>
        </ul>

    </li>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3'

export default {
    name: "node",

    components: {
        Link
    },

    props: {
        node: Object,
        project: Object
    },

    data() {
        return {
            displayEdit: false
        }
    },

    methods: {
        editPage(id) {

        }
    }
}
</script>
