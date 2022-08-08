<template>
    <Layout>

        <header class="bg-black text-white py-4 px-10 flex justify-between items-center relative z-30">

            <div class="flex items-center">
                <a href="https://www.withauthor.com" class="text-2xl mr-10 font-bold">Author</a>
            </div>

        </header>

        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-3xl mx-auto space-y-[30px]">

                <div class="bg-white rounded border border-gray-300 p-5">
                    <h3 class="text-2xl font-bold">Password protected</h3>
                    <p>This project is password protected. Please enter the password to below.<br>
                        If you don’t know your password, please contact the person that sent you this link.</p>
                </div>

                <form class="max-w-sm mx-auto" @submit.prevent="checkPassword()">
                    <div class="mb-5">
                        <label for="share_password" class="block font-medium">Password</label>
                        <div class="mt-1">
                            <input type="password" name="share_password" id="share_password" v-model="sharePassword" class="block w-full sm:text-sm border-gray-300 rounded">
                        </div>
                    </div>

                    <button type="submit" class="btn-primary">Submit</button>
                </form>

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
    },

    data() {
        return {
            sharePassword: ''
        }
    },

    methods: {
        checkPassword() {
            this.$inertia.post(route('checkPassword', this.project.id),
                {
                    password: this.sharePassword
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.savingShareSettings = false
                    }
                }
            )
        }
    }
}
</script>
