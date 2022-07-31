<template>
    <Layout>
        <div class="max-w-3xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="sm:flex sm:flex-col sm:align-center">
                <h1 class="text-5xl font-extrabold text-gray-800 sm:text-center">Upgrade your account</h1>
                <div class="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
                    <button @click="tiers = monthlyTiers" type="button" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-800 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Monthly</button>
                    <button  @click="tiers = annualTiers" type="button" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8">Annual</button>
                </div>
            </div>

            <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">

                <div v-for="tier in tiers" :key="tier.name" class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                    <div class="p-6 text-center">
                        <h2 class="text-2xl leading-6 font-extrabold text-gray-800">{{ tier.name }}</h2>
                        <p class="mt-4">
                            <span class="text-4xl font-extrabold text-gray-800">${{ tier.priceMonthly }}</span>
                            {{ ' ' }}
                            <span class="text-base font-medium text-gray-500">/mo</span>
                        </p>
                        <a :href="tier.href" class="mt-8 w-full btn-primary justify-center">Upgrade</a>
                    </div>
                    <div class="pt-6 pb-8 px-6">
                        <h3 class="text-xs font-medium text-gray-800 tracking-wide uppercase">What's included</h3>
                        <ul role="list" class="mt-6 space-y-4">
                            <li v-for="feature in tier.includedFeatures" :key="feature" class="flex space-x-3">
                                <div class="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </div>
                                <span class="text-sm text-gray-500">{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="mt-24">
                <h2 class="text-4xl font-extrabold text-gray-800 sm:text-center">Frequently asked questions</h2>

                <div class="divide-y space-y-6 mt-12">

                    <div class="pt-6">
                        <h3 class="text-xl font-bold mb-2">Can I cancel my subscription anytime?</h3>
                        <p>Yes! You can cancel or pause your subscription at anytime from your account page. When cancelling your subscription, you will retain access to Author until the end of your billing period.</p>
                    </div>

                    <div class="pt-6">
                        <h3 class="text-xl font-bold mb-2">Who can I share a project with?</h3>
                        <p>You can generate a secure shareable link to anyone that needs access to create or edit the content.</p>
                    </div>

                    <div class="pt-6">
                        <h3 class="text-xl font-bold mb-2">Are there any storage limits?</h3>
                        <p>Nope! Upload as much content as needed. We do have a 20MB file limit per file upload.</p>
                    </div>
                </div>

            </div>

        </div>
    </Layout>
</template>
<script>

import {cloneDeep} from "lodash";

import { Link } from '@inertiajs/inertia-vue3'
import Layout from '@/Layouts/App.vue'
import SlideOver from '@/Components/SlideOver.vue'
import Modal from '@/Components/Modal.vue'

export default {

    components: {
        Layout
    },

    data() {
        return {
            type: 'monthly',
            monthlyTiers: [
                {
                    name: 'Freelancer',
                    href: '/account/upgrade/plan/freelancer-monthly',
                    priceMonthly: 9,
                    includedFeatures: [
                        '2 active projects',
                        'Unlimited pages per project',
                        'Unlimited content fields per page',
                        'Shareable client links'
                    ],
                },
                {
                    name: 'Agency',
                    href: '/account/upgrade/plan/agency-monthly',
                    priceMonthly: 29,
                    includedFeatures: [
                        'Unlimited active projects',
                        'Unlimited pages per project',
                        'Unlimited content fields per page',
                        'Shareable client links'
                    ],
                },
            ],
            annualTiers: [
                {
                    name: 'Freelancer',
                    href: '/account/upgrade/plan/freelancer-annual',
                    priceMonthly: 90,
                    includedFeatures: [
                        '2 active projects',
                        'Unlimited pages per project',
                        'Unlimited content fields per page',
                        'Shareable client links'
                    ],
                },
                {
                    name: 'Agency',
                    href: '/account/upgrade/plan/agency-annual',
                    priceMonthly: 290,
                    includedFeatures: [
                        'Unlimited active projects',
                        'Unlimited pages per project',
                        'Unlimited content fields per page',
                        'Shareable client links'
                    ],
                },
            ],
            tiers: null
        }
    },

    mounted() {
        this.tiers = this.monthlyTiers
    }

}
</script>
