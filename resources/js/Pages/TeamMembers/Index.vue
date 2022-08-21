<template>
    <Layout>

        <div class="sticky top-0 z-40 bg-white rounded border-b border-gray-300 py-5 px-4 md:px-10 md:flex md:items-center md:justify-between mb-[30px]">
            <ul class="text-xl md:text-2xl font-bold flex items-center space-x-[10px]">
                <li class="truncate"><Link href="/projects" class="text-black hover:text-indigo-500 transition-all">Team members & clients</Link></li>
            </ul>

            <div class="mt-4 md:mt-0 md:ml-16 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3">
                <div>
                    <button @click="inviteUser = true" class="btn-primary">Add a member</button>
                </div>
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="max-w-4xl mx-auto space-y-[30px]">

                <div class="bg-white rounded border border-gray-300">

                    <div>
                        <div class="sm:flex sm:items-center p-5 border-b border-gray-300">
                            <div class="sm:flex-auto">
                                <h2 class="text-xl font-bold ">Team members & clients</h2>
                            </div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <tbody class="divide-y divide-gray-200">
                                            <tr v-for="(user, index) in users">
                                                <td class="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 md:pl-0">
                                                    <span class="font-bold" v-if="user.name">{{ user.name }}</span>
                                                    <span class="font-bold"  v-if="!user.name">Name not set</span>
                                                    <br><span>{{ user.email }}</span>
                                                </td>
                                                <td class="text-right">
                                                    <input v-if="!user.edit_allowed" :disabled="true" class="border-gray-300 rounded w-[128px] bg-gray-200" type="text" :value="roles[user.role].name">

                                                    <select v-if="user.edit_allowed" v-model="users[index].role" class="border-gray-300 rounded" @change="changeRole(user)">
                                                        <option v-for="(role, roleKey) in selectableRoles" :value="roleKey">{{ role.name }}</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div  v-if="Object.keys(invites).length" class="bg-white rounded border border-gray-300">
                    <div>
                        <div class="sm:flex sm:items-center p-5 border-b border-gray-300">
                            <div class="sm:flex-auto">
                                <h2 class="text-xl font-bold ">Pending invites</h2>
                            </div>
                        </div>
                        <div class="p-5 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full align-middle md:px-6 lg:px-8">
                                    <table class="min-w-full divide-y divide-gray-300">
                                        <tbody class="divide-y divide-gray-200">
                                        <tr v-for="invite in invites">
                                            <td class="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-900 sm:pl-6 md:pl-0">
                                                <span class="font-bold">{{ invite.email }}</span>
                                            </td>
                                            <td class="text-right">
                                                <input :disabled="true" class="border-gray-300 rounded w-[128px] bg-gray-200" type="text" :value="roles[invite.role].name">
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <slide-over :open="inviteUser" @closeSlider="inviteUser = false" title="Add a member">

            <div class="space-y-[15px]">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Invite by email</label>
                    <div class="mt-1">
                        <input type="email" name="email" id="email" v-model="inviteEmail" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    </div>
                </div>

                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700 sr-only">Message</label>
                    <div>
                        <textarea type="message" name="message" id="message" v-model="inviteMessage" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add a message (optional)"></textarea>
                    </div>
                </div>

                <div>
                    <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                    <select v-model="inviteRole" id="role" class="border-gray-300 rounded">
                        <option value="" selected>Select a role</option>
                        <option v-for="(role, index) in selectableRoles" :value="index">{{ role.name }}</option>
                    </select>
                </div>

                <div class="mt-5">
                    <h3  class="block font-bold text-gray-700 mb-3">Restrict access to selected projects</h3>

                    <div class="flex flex-wrap items-center">
                        <div v-for="(project, projectID) in projects" class="mr-4 mb-4">
                            <label class="flex items-center">
                                <span class="mr-1">{{ project }}</span>
                                <input type="checkbox" name="projects" id="projects" v-model="inviteProjects" :value="projectID" class="outline-none ring-0 focus:outline-none focus:ring-0 block sm:text-sm border-gray-300 rounded">
                            </label>
                        </div>
                    </div>
                </div>

                <button @click="saveProject()" class="btn-primary">
                    <span v-if="!inviteEmailLoading">Send invite</span>
                    <span v-if="inviteEmailLoading" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
                        Sending
                    </span>
                </button>
            </div>

        </slide-over>

    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import ModalLarge from '@/Components/ModalLarge.vue'
import {Inertia} from "@inertiajs/inertia";

export default {
    components: {
        Link,
        Layout,
        SlideOver,
        ModalLarge
    },

    props: {
        users: Array,
        invites: Object,
        roles: Object,
        selectableRoles: Object,
        projects: Object
    },

    data() {
        return {
            inviteUser: false,
            inviteEmail: null,
            inviteMessage: null,
            inviteRole: '',
            inviteEmailLoading: false,
            inviteProjects: []
        }
    },

    methods: {

        saveProject() {

            this.inviteEmailLoading = true

            this.$inertia.post(route('inviteMember'),
                {
                    inviteEmail: this.inviteEmail,
                    inviteMessage: this.inviteMessage,
                    inviteRole: this.inviteRole,
                    inviteProjects: this.inviteProjects
                },
                {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.inviteUser = false
                        this.inviteEmail = null
                        this.inviteEmailLoading = false
                        this.inviteProjects = []
                    },
                    onError: () => {
                        this.inviteEmailLoading = false
                    }
                }
            )


        },

        changeRole(user, role) {
            this.$inertia.post(route('changeRole'), {
                    user: user,
                    role: role
                },
                {
                    preserveScroll: true
                }
            )
        }
    }
}
</script>
