<template>
    <BreezeGuestLayout>
        <Head title="Sign up" />

        <BreezeValidationErrors class="mb-4" />

        <form @submit.prevent="submit">

            <h3 class="text-lg font-bold mb-5">{{ sender }} has invited you to join their team</h3>

            <div class="mb-5">
                <a :href="route('auth.google', {'action': 'connect', 'uuid': uuid, 'token': token})" class="btn-outline items-center w-full inline-flex">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    <span class="ml-2">Sign up with Google</span>
                </a>
            </div>

            <div class="relative">
                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center">
                    <span class="px-2 bg-white text-sm text-gray-500"> OR </span>
                </div>
            </div>

            <div class="mt-4">
                <BreezeLabel for="email" value="Email" />
                <BreezeInput :value="email" id="email" type="email" class="mt-1 block w-full bg-gray-200 cursor-not-allowed" v-model="form.email" required readonly />
            </div>

            <div class="mt-4">
                <BreezeLabel for="name" value="Full name" />
                <BreezeInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required placeholder="First and last" autocomplete="name" />
            </div>


            <div class="mt-4">
                <BreezeLabel for="password" value="Password" />
                <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
            </div>

            <div class="mt-4">
                <BreezeLabel for="password_confirmation" value="Confirm Password" />
                <BreezeInput id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <BreezeButton class="flex w-full justify-center py-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </BreezeButton>
            </div>

            <div class="text-center mt-6">
                <Link :href="route('login', {'action': 'connect', 'uuid': uuid, 'token': token})" class="underline text-gray-600 hover:text-gray-900">
                    Already registered?
                </Link>
            </div>

        </form>
    </BreezeGuestLayout>
</template>
<script setup>
import BreezeButton from '@/Components/Button.vue';
import BreezeGuestLayout from '@/Layouts/Guest.vue';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import BreezeValidationErrors from '@/Components/ValidationErrors.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';

const props = defineProps([
    'sender',
    'email',
    'uuid',
    'token'
])

const form = useForm({
    name: '',
    email: props.email,
    password: '',
    password_confirmation: '',
    terms: false,
    action: 'connect',
    token: props.token,
    uuid: props.uuid
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>
