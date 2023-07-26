<script setup>
import UploadLayout from '~/layouts/UploadLayout.vue';
</script>

<template>
    <UploadLayout>
        <div
            class="mb-[40px] mt-[80px] w-full rounded-md bg-white px-4 py-6 shadow-lg md:px-10"
        >
            <div class="mb-8">
                <div class="text-[23px] font-semibold">Upload video</div>

                <div class="mt-1 text-gray-400">
                    Post a video to your account
                </div>
            </div>

            <div class="gap-6 md:flex">
                <label
                    v-if="false"
                    for="fileInout"
                    class="mx-auto mb-6 mt-4 flex h-[470px] w-full max-w-[260px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-3 text-center hover:bg-gray-100 md:mx-0"
                >
                    <Icon
                        name="majesticons:cloud-upload"
                        color="#B3B3B1"
                        size="40"
                    />

                    <div class="mt-4 text-[17px]">Select video to upload</div>
                    <div class="mt-1.5 text-[13px] text-gray-500">
                        Or drag and drop a file
                    </div>

                    <div class="mt-12 text-sm text-gray-400">MP4</div>
                    <div class="mt-2 text-[13px] text-gray-400">
                        Up to 30 minutes
                    </div>
                    <div class="mt-2 text-[13px] text-gray-400">
                        Less than 2 GB
                    </div>

                    <div
                        class="mt-8 w-[80%] rounded-sm bg-primary px-2 py-1.5 text-[15px] text-white"
                    >
                        Select file
                    </div>

                    <input
                        id="fileInput"
                        ref="file"
                        type="file"
                        hidden
                        accept=".mp4"
                    />
                </label>

                <div
                    v-else
                    class="relative mx-auto mb-16 mt-4 flex h-[540px] w-full max-w-[260px] cursor-pointer items-center justify-center rounded-2xl p-3 md:mx-0 md:mb-12"
                >
                    <div class="h-full w-full bg-black"></div>

                    <img
                        class="pointer-events-none absolute z-20"
                        src="~/assets/images/mobile-case.png"
                        alt="mobile frame"
                    />

                    <img
                        src="~/assets/images/tiktok-logo-white.png"
                        alt="tiktok logo"
                        width="90"
                        class="absolute bottom-6 right-4 z-20"
                    />

                    <video
                        autoplay
                        loop
                        muted
                        src="/animal.mp4"
                        class="absolute z-10 h-full w-full rounded-xl object-cover p-[13px]"
                    />

                    <div
                        class="absolute -bottom-12 z-50 flex w-full items-center justify-between rounded-xl border border-gray-300 p-2"
                    >
                        <div class="flex items-center truncate">
                            <Icon
                                name="clarity:success-standard-line"
                                size="16"
                                class="min-w-[16px]"
                            />

                            <div class="truncate pl-1 text-[11px]">
                                video name
                            </div>
                        </div>

                        <button class="ml-2 text-[11px] font-semibold">
                            Change
                        </button>
                    </div>
                </div>

                <div class="mb-6 mt-4">
                    <div class="flex bg-[#F8F8F8] px-6 py-4">
                        <div>
                            <Icon
                                name="mdi:box-cutter-off"
                                size="20"
                                class="mr-4"
                            />
                        </div>

                        <div>
                            <div class="mb-1.5 text-[15px] font-semibold">
                                Divided videos and edit
                            </div>

                            <div
                                class="text-[13px] font-semibold text-gray-400"
                            >
                                You can quickly divide videos into multiple
                                parts, remove redundant parts and turn landscape
                                video into portrait videos
                            </div>
                        </div>

                        <div
                            class="my-auto flex h-full w-full max-w-[130px] justify-end text-center"
                        >
                            <button
                                class="rounded-sm bg-primary px-8 py-1.5 text-[15px] text-white"
                            >
                                Edit
                            </button>
                        </div>
                    </div>

                    <div class="mt-5">
                        <div class="flex items-center justify-between">
                            <div class="mb-1 text-[15px]">Caption</div>
                            <div class="text-[12px] text-gray-400">0/150</div>
                        </div>

                        <input
                            type="text"
                            maxlength="150"
                            class="w-full rounded-md border p-2.5 focus:outline-none"
                        />
                    </div>

                    <div class="flex gap-3">
                        <button
                            class="mt-8 rounded-sm border px-10 py-2.5 text-[16px] hover:bg-gray-100"
                        >
                            Discard
                        </button>

                        <button
                            class="mt-8 rounded-sm border bg-primary px-10 py-2.5 text-[16px] text-white"
                        >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </UploadLayout>
</template>
