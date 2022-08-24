<template>
    <main>

        <header class="bg-black text-white py-4 px-10 flex justify-between items-center relative z-30">

            <div class="flex items-center">
                <a href="https://www.withauthor.com" class="text-2xl mr-10 font-bold">CollectContent</a>
            </div>

            <ul class="flex items-center space-x-[30px]">
                <li><Link :href="route('viewSharedProject', [$page.props.project.id, $page.props.uuid])" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.component.startsWith('SharedProject') }">Pages</Link></li>
                <li><Link :href="route('sharedBrandAssets', [$page.props.project.id, $page.props.uuid])" class="hover:underline underline-offset-4 transition-all font-medium" :class="{'underline': $page.component.startsWith('SharedBrandAssets') }">Brand assets</Link></li>
            </ul>

        </header>

        <slot />

        <toast :show="showToast" :data="toast" :key="toast"></toast>

    </main>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import Toast from '@/Components/Toast.vue'

export default {
    components: {
        Link,
        Toast
    },

    computed: {
        toast() {
            return this.$page.props.toast
        },

        showToast() {
            return this.$page.props.toast !== null
        }
    }
}
</script>
