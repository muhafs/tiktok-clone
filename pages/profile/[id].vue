<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

const { $generalStore } = useNuxtApp()
</script>

<template>
    <MainLayout>
        <div
            class="w-[calc(100%-90px)] max-w-[1800px] pr-2 pt-[90px] lg:pl-[160px] lg:pr-0 2xl:mx-auto 2xl:pl-[185px]"
        >
            <div class="flex w-[calc(100%-230px)]">
                <img
                    src="https://picsum.photos/id/8/300/320"
                    alt="photo profile"
                    class="max-w-[120px] rounded-full"
                />

                <div class="ml-5 w-full">
                    <div class="truncate text-[30px] font-bold">User name</div>
                    <div class="truncate text-[18px]">User name</div>

                    <button
                        v-if="true"
                        @click="$generalStore.isEditProfileOpen = true"
                        class="mt-3 flex items-center rounded-md border px-3.5 py-1.5 text-[15px] font-semibold hover:bg-gray-100"
                    >
                        <Icon name="mdi:pencil" size="18" class="mr-1 mt-0.5" />

                        <span>Edit profile</span>
                    </button>

                    <button
                        v-else
                        class="mt-3 flex items-center rounded-md bg-primary px-8 py-1.5 text-[15px] font-semibold text-white"
                    >
                        Follow
                    </button>
                </div>
            </div>

            <div class="flex items-center pt-4">
                <div class="mr-4">
                    <span class="font-bold">10K</span>

                    <span class="pl-1.5 text-[15px] font-light text-gray-500">
                        Following
                    </span>
                </div>

                <div class="mr-4">
                    <span class="font-bold">15K</span>

                    <span class="pl-1.5 text-[15px] font-light text-gray-500">
                        Followers
                    </span>
                </div>

                <div class="mr-4">
                    <span class="font-bold">3K</span>

                    <span class="pl-1.5 text-[15px] font-light text-gray-500">
                        Likes
                    </span>
                </div>
            </div>

            <div
                class="mr-4 max-w-[500px] pl-1.5 pt-4 text-[15px] font-light text-gray-500"
            >
                This is the Bio section
            </div>

            <div class="flex w-full items-center border-b pt-4">
                <div
                    class="w-60 border-b-2 border-b-black py-2 text-center text-[17px] font-semibold"
                >
                    Videos
                </div>

                <div
                    class="w-60 py-2 text-center text-[17px] font-semibold text-gray-500"
                >
                    <Icon name="material-symbols:lock-open" class="mb-0.5" />
                    Liked
                </div>
            </div>

            <div
                class="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            >
                <PostUser />
                <PostUser />
                <PostUser />
                <PostUser />
                <PostUser />
                <PostUser />
            </div>
        </div>
    </MainLayout>
</template>
