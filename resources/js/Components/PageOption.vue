<template>
    <option :value="node.id">
        <span v-if="node.depth" v-for="n in node.depth">&nbsp;&nbsp;&nbsp;</span>
        {{ node.name }}
    </option>
    <node v-for="child in node.children" :node="child"></node>

</template>

<script>

export default {
    name: "node",

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
