<template>
    <div class="relative">
        <button v-click-outside="onClickOutside" @click="open = !open" class="btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
        </button>

        <div v-if="open" class="origin-top-right absolute right-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {

    props: {
        permissions: Object,
        subscription: Object,
        user: Object,
        accounts: Object
    },

    components: {
        Link,
    },

    data() {
        return {
            open: false
        }
    },

    methods: {
        onClickOutside() {
            this.open = false
        }
    }
}
</script>
