<template>
    <Layout>
        <div class="max-w-7xl mx-auto px-4 relative pt-[50px] pb-[112px]">

            <div class="sm:flex sm:flex-col sm:align-center">
                <h1 class="text-5xl font-extrabold text-black sm:text-center">Upgrade your account</h1>
                <div class="relative self-center mt-6 bg-gray-200 rounded-lg p-0.5 flex sm:mt-8">
                    <button @click="tiers = monthlyTiers" type="button" class="relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-black whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8">Monthly</button>
                    <button  @click="tiers = annualTiers" type="button" class="ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:z-10 sm:w-auto sm:px-8">Annual</button>
                </div>
            </div>

            <div class="mt-12 space-y-4 flex flex-col-reverse sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-4 sm:gap-6 lg:max-w-7xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">

                <div v-for="tier in tiers" :key="tier.name" class="border border-gray-200 bg-white rounded-lg shadow-sm divide-y divide-gray-200">
                    <div class="p-6 text-center">
                        <h2 class="text-2xl leading-6 font-extrabold text-black">{{ tier.name }}</h2>
                        <p class="mt-4">
                            <span class="text-4xl font-extrabold text-black">${{ tier.priceMonthly }}</span>
                            {{ ' ' }}
                            <span class="text-base font-medium text-black">/{{ tier.type }}</span>
                        </p>
                        <a v-if="tier.href" :href="tier.href" class="mt-8 w-full btn-primary justify-center">Upgrade</a>
                        <a v-if="!tier.href" href="#" class="mt-8 w-full btn-outline hover:bg-white cursor-default justify-center">Current plan</a>
                    </div>
                    <div class="pt-6 pb-8 px-6">
                        <h3 class="text-xs font-medium text-black tracking-wide uppercase">What's included</h3>
                        <ul role="list" class="mt-6 space-y-4">

                            <li v-if="tier.excludedFeatures" v-for="feature in tier.excludedFeatures" :key="feature" class="flex space-x-3">
                                <div class="flex-shrink-0 h-5 w-5" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                    </svg>
                                </div>
                                <span class="text-sm text-black">{{ feature }}</span>
                            </li>

                            <li v-for="feature in tier.includedFeatures" :key="feature" class="flex space-x-3">
                                <div class="flex-shrink-0 h-5 w-5 text-emerald-500" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </div>
                                <span class="text-sm text-black">{{ feature }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="mt-24">
                <h2 class="text-4xl font-extrabold text-black sm:text-center">Frequently asked questions</h2>

                <div class="divide-y space-y-6 mt-12">

                    <div class="pt-6">
                        <h3 class="text-xl font-bold mb-2">Can I cancel my subscription anytime?</h3>
                        <p>Yes! You can cancel or pause your subscription at anytime from your account page. When cancelling your subscription, you will retain access to CollectContent until the end of your billing period.</p>
                    </div>

                    <div class="pt-6">
                        <h3 class="text-xl font-bold mb-2">Who can I share a project with?</h3>
                        <p>You can generate a secure shareable link to anyone that needs access to create or edit the content.</p>
                    </div>

                    <div class="pt-6">
                        <h3 class="text-xl font-bold mb-2">Are there any storage limits?</h3>
                        <p>Nope! Upload as much content as needed.</p>
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
                    name: 'Free',
                    href: null,
                    priceMonthly: 0,
                    type: 'mo',
                    includedFeatures: [
                        '1 active project',
                        '1 user',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
                {
                    name: 'Starter',
                    href: '/account/upgrade/plan/freelancer-monthly',
                    priceMonthly: 29,
                    type: 'mo',
                    includedFeatures: [
                        '3 active projects',
                        '3 users',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
                {
                    name: 'Pro',
                    href: '/account/upgrade/plan/agency-monthly',
                    priceMonthly: 49,
                    type: 'mo',
                    includedFeatures: [
                        '10 active projects',
                        '10 users',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
                {
                    name: 'Unlimited',
                    href: '/account/upgrade/plan/unlimited-monthly',
                    priceMonthly: 99,
                    type: 'mo',
                    includedFeatures: [
                        'Unlimited active projects',
                        'Unlimited users',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
            ],
            annualTiers: [
                {
                    name: 'Free',
                    href: null,
                    priceMonthly: 0,
                    type: 'yr',
                    includedFeatures: [
                        '1 active project',
                        '1 user',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
                {
                    name: 'Starter',
                    href: '/account/upgrade/plan/freelancer-annual',
                    priceMonthly: 290,
                    type: 'yr',
                    includedFeatures: [
                        '3 active projects',
                        '3 users',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
                {
                    name: 'Pro',
                    href: '/account/upgrade/plan/agency-annual',
                    priceMonthly: 490,
                    type: 'yr',
                    includedFeatures: [
                        '10 active projects',
                        '10 users',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
                    ],
                },
                {
                    name: 'Unlimited',
                    href: '/account/upgrade/plan/unlimited-annual',
                    priceMonthly: 990,
                    type: 'yr',
                    includedFeatures: [
                        'Unlimited active projects',
                        'Unlimited users',
                        'Unlimited pages',
                        'Unlimited content fields',
                        'Shareable client links',
                        'Archived projects'
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
