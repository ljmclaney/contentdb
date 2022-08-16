<template>
    <Layout class="bg-gray-50">

        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link :href="route('viewProject', project.id)" class="text-black hover:text-indigo-500 transition-all">{{ project.name }}</Link></li>
                <li class="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></li>
                <li class="truncate text-gray-600">Edit all content</li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div>
                    <button @click="saveFields()" class="btn-primary">Save All</button>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 relative pt-[10px] pb-[100px] space-y-12">

            <div v-for="(page, pageIndex) in pages" class="space-y-10">

                <h1 class="text-5xl font-extrabold mb-10">{{ page.name }}</h1>

                <div v-for="(section, sectionIndex) in page.sections">

                    <h3 class="text-3xl font-bold mb-5">Section: {{ section.name }}</h3>

                    <div class="space-y-10">

                        <div v-if="Object.keys(section.fields).length" v-for="(field, index) in section.fields" :key="field.uuid" :data-id="field.uuid">
                            <field
                                v-model="pages[pageIndex].sections[sectionIndex].fields[index]"
                                :field-data="field"
                                :page="page"
                                :project="project"
                                :key="'field-' + field.uuid"
                            />
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </Layout>
</template>
<script>

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import Field from "@/Components/Field.vue";

export default {
    components: {
        Link,
        Layout,
        Field
    },

    props: {
        pages: Object,
        project: Object,
    },
    
    methods: {
        saveFields() {
            this.$inertia.post('/projects/content/' + this.project.id,
                {
                    pages: this.pages
                },
                {
                    preserveScroll: true
                }
            )
        }
    }

}
</script>
