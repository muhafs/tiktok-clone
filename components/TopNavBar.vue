<template>
    <div
        id="TopNav"
        class="fixed z-30 flex h-[61px] w-full items-center border-b bg-white"
    >
        <div
            :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''"
            class="mx-auto flex w-full items-center justify-between px-6"
        >
            <!--! Logo -->
            <div
                :class="
                    route.fullPath === '/' ? 'w-[80%]' : 'w-[70%] lg:w-[20%]'
                "
            >
                <NuxtTo to="/">
                    <img
                        src="~/assets/images/tiktok-logo.png"
                        alt="tiktok logo"
                        width="115"
                    />
                </NuxtTo>
            </div>

            <!--! Search Bar -->
            <div
                class="hidden w-full max-w-[380px] items-center rounded-full bg-[#f1f1f2] p-1 md:flex"
            >
                <input
                    type="text"
                    class="my-2 w-full bg-transparent pl-3 text-[15px] placeholder-[#838383] focus:outline-none"
                    placeholder="Search accounts"
                />

                <div
                    class="flex items-center border-l border-l-gray-300 px-3 py-1"
                >
                    <Icon name="ri:search-line" color="#a1a2a7" size="22" />
                </div>
            </div>

            <!--! Buttons -->
            <div
                class="flex w-full min-w-[275px] max-w-[320px] items-center justify-end gap-3"
            >
                <!--! Upload Button -->
                <button
                    class="flex items-center rounded-sm border px-3 py-[6px] hover:bg-gray-100"
                >
                    <Icon name="mdi:plus" color="#000000" size="22" />
                    <span class="px-2 text-[15px] font-medium">Upload</span>
                </button>

                <!--! Log in Button -->
                <div v-if="!$userStore.id" class="flex items-center">
                    <button
                        @click="$generalStore.isLoginOpen = true"
                        class="flex items-center rounded-md border bg-primary px-3 py-[6px] text-white"
                    >
                        <span class="mx-4 text-[15px] font-medium">Log in</span>
                    </button>

                    <Icon name="mdi:dots-vertical" color="#161724" size="25" />
                </div>

                <!--! Profile Buttons -->
                <div v-else class="flex items-center">
                    <Icon
                        name="carbon:send-alt"
                        color="#161724"
                        size="30"
                        class="ml-1 mr-4 cursor-pointer"
                    />
                    <Icon
                        name="bx:message-detail"
                        color="#161724"
                        size="27"
                        class="mr-5 cursor-pointer"
                    />

                    <div class="relative">
                        <button @click="showMenu = !showMenu" class="mt-1">
                            <img
                                src="https://picsum.photos/id/83/300/320"
                                alt="profile image"
                                width="33"
                                class="rounded-full"
                            />
                        </button>

                        <div
                            v-if="showMenu"
                            id="PopUpMenu"
                            class="absolute -right-2 top-[43px] w-[200px] rounded-lg border bg-white py-1.5 shadow-xl"
                        >
                            <NuxtLink
                                @click="showMenu = false"
                                class="flex cursor-pointer items-center justify-start px-2 py-3 hover:bg-gray-100"
                            >
                                <Icon name="ph:user" size="20" />

                                <span class="pl-2 text-sm font-semibold">
                                    Profile
                                </span>
                            </NuxtLink>

                            <div
                                class="flex cursor-pointer items-center justify-start border-t px-1.5 py-3 hover:bg-gray-100"
                            >
                                <Icon name="ic:outline-login" size="20" />

                                <span class="pl-2 text-sm font-semibold">
                                    Log out
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp()

const route = useRoute()
const showMenu = ref(false)
</script>
