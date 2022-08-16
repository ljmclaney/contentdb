<template>
    <li class="space-y-5 ml-5">
        <a :href="route('viewPage', [project.id, node.id])" class="flex whitespace-nowrap justify-center bg-white hover:bg-gray-300  border border-gray-300 px-5 py-3  rounded">{{ node.name }}</a>

        <ul class="flex flex-col space-y-5" v-if="node.children && node.children.length">
            <node v-for="child in node.children" :project="project" :node="child" :pages="pages"></node>
        </ul>
    </li>
</template>

<script>

import { Link } from '@inertiajs/inertia-vue3'
import SlideOver from '@/Components/SlideOver.vue';
import Modal from '@/Components/Modal.vue';
import PageOption from '@/Components/PageOption.vue';

export default {
    name: "node",

    components: {
        Link,
        SlideOver,
        Modal,
        PageOption
    },

    props: {
        node: Object,
        project: Object,
        pages: Object
    },

    data() {
        return {
            displayEdit: false,
            editPage: false,
            showDeleteModal: false
        }
    },

    methods: {
        updatePage() {
            this.$inertia.post('/projects/' + this.project.id + '/pages/' + this.node.id,
                {
                    name: this.node.name,
                    parent_id: this.node.parent_id
                },
                {
                    preserveScroll: true
                }
            )

            this.editPage = false
        },

        deletePage() {
            this.$inertia.delete('/projects/' + this.project.id + '/pages/' + this.node.id)

            this.showDeleteModal = false
        }
    }
}
</script>
