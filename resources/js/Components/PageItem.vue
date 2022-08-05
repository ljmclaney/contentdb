<template>
    <li>
        <div class="flex items-center justify-between">
            <div class="whitespace-nowrap py-4 pl-4 pr-3 font-medium sm:pl-6 md:pl-0 w-3/4 truncate">
                <Link :href="route('viewPage', [project.id, node.id])" class="text-indigo-600 hover:text-indigo-900 truncate">

                    <span v-if="node.depth" v-for="n in node.depth">-</span>

                    {{ node.name }}
                </Link>
            </div>
            <div class="whitespace-nowrap py-4 px-3 text-black text-right flex-shrink-0">
                {{ node.updated_at }}
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
    }
}
</script>
