<template>
    <main>

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
