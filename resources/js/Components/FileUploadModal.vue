<template>
    <div id="headlessui-portal-root">
        <div></div>
        <div>
            <div id="headlessui-dialog-18" role="dialog" aria-modal="true">
                <div class="fixed inset-0 z-[99] overflow-y-auto">
                    <div class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center">
                        <div class="opacity-50"><div id="headlessui-dialog-overlay-20" aria-hidden="true" class="fixed inset-0 bg-zinc-700 transition-opacity"></div></div>
                        <div class="h-full w-full">
                            <div class="z-[100] inline-block overflow-hidden rounded-md bg-white text-left align-bottom shadow-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full sm:w-full">
                                <div class="p-6">
                                    <label tabindex="0">
                                        <div class="hover:border-primary-base flex w-full cursor-pointer justify-center rounded-md border-2 border-dashed border-gray-400 px-8 py-24 duration-150">
                                            <div class="relative flex items-center justify-center">
                                                <div class="duration-100 undefined false">
                                                    <div class="flex flex-col items-center gap-2 text-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="32"
                                                            height="32"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            class="lucide-icon lucide lucide-image-plus"
                                                        >
                                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                                                            <line x1="16" y1="5" x2="22" y2="5"></line>
                                                            <line x1="19" y1="2" x2="19" y2="8"></line>
                                                            <circle cx="9" cy="9" r="2"></circle>
                                                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                                        </svg>
                                                        <p>Upload an image</p>
                                                        <p class="text-sm text-gray-500">Max file size: 5MB, accepted: jpeg, jpg, png, gif</p>
                                                    </div>
                                                </div>
                                                <div class="opacity-0 absolute inset-0 flex items-center justify-center">
                                                    <div class="text-primary-base scale-110">
                                                        <svg id="dots" width="32px" viewBox="0 0 132 58" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svelte-10juqow">
                                                            <defs></defs>
                                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g id="dots" fill="currentColor" class="svelte-10juqow">
                                                                    <circle id="dot1" cx="25" cy="30" r="13" class="svelte-10juqow"></circle>
                                                                    <circle id="dot2" cx="65" cy="30" r="13" class="svelte-10juqow"></circle>
                                                                    <circle id="dot3" cx="105" cy="30" r="13" class="svelte-10juqow"></circle>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="file" multiple="" accept="image/png,image/jpg,image/gif,image/jpeg,image/webp" autocomplete="off" style="display: none;" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
