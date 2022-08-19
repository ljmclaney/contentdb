<template>
    <li  class="relative">
        <div class="flex items-center justify-between" @mouseover="displayEdit = true" @mouseleave="displayEdit = false">
            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-1/2 truncate">
                <Link :href="route('viewSharedPage', [project.id, project.uuid, node.id])" class="hover:text-brand-dark-blue truncate inline-flex items-center">

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

            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-1/4 flex-shrink-0">
                <span class="rounded bg-yellow-100 px-1 py-1 text-sm text-yellow-800" v-if="node.status === null || node.status === 'Draft'">Draft</span>
                <span class="rounded bg-blue-100 px-1 py-1 text-sm text-blue-800"  v-if="node.status === 'In Progress'">{{ node.status }}</span>
                <span class="rounded bg-orange-100 px-1 py-1 text-sm text-orange-800"  v-if="node.status === 'Under Review'">{{ node.status }}</span>
                <span class="rounded bg-purple-100 px-1 py-1 text-sm text-purple-800"  v-if="node.status === 'Ready To Publish'">{{ node.status }}</span>
                <span class="rounded bg-green-100 px-1 py-1 text-sm text-green-800"  v-if="node.status === 'Published'">{{ node.status }}</span>
            </div>

            <div class="whitespace-nowrap py-4 px-3 text-black text-right w-1/4 flex-shrink-0">
                {{ node.updated_at }}
            </div>
        </div>

        <ul v-if="node.children && node.children.length" class="border-t border-gray-200 divide-y divide-gray-200">
            <node v-for="child in node.children" :project="project" :node="child" :pages="pages"></node>
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
        project: Object,
        pages: Object
    }
}
</script>
