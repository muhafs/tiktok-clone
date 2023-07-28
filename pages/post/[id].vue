<template>
    <div
        id="PostPage"
        class="fixed left-0 top-0 z-50 h-full w-full justify-between overflow-auto bg-black lg:flex lg:overflow-hidden"
    >
        <div class="relative h-full lg:w-[calc(100%-540px)]">
            <NuxtLink
                class="absolute z-20 m-5 cursor-pointer rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
            >
                <Icon name="material-symbols:close" color="#ffffff" size="27" />
            </NuxtLink>

            <div v-if="true">
                <button
                    :disabled="!isLoaded"
                    @click="loopThroughPostUp()"
                    class="absolute right-4 top-4 z-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                >
                    <Icon name="mdi:chevron-up" color="#ffffff" size="30" />
                </button>

                <button
                    :disabled="!isLoaded"
                    @click="loopThroughPostDown()"
                    class="absolute right-4 top-20 z-20 flex items-center justify-center rounded-full bg-gray-700 p-1.5 hover:bg-gray-800"
                >
                    <Icon name="mdi:chevron-down" color="#ffffff" size="30" />
                </button>
            </div>

            <img
                src="~/assets/images/tiktok-logo-small.png"
                alt="tiktok logo"
                width="45"
                class="absolute left-[70px] top-[18px] mx-auto rounded-full lg:mx-0"
            />

            <video
                v-if="true"
                src="/animal.mp4"
                class="absolute z-[-1] my-auto h-screen w-full object-cover"
            />

            <div
                v-if="!isLoaded"
                class="flex h-screen items-center justify-center bg-black bg-opacity-70 lg:min-w-[480px]"
            >
                <Icon
                    name="mingcute:loading-line"
                    color="#ffffff"
                    size="100"
                    class="ml-1 animate-spin"
                />
            </div>

            <div class="bg-black bg-opacity-70 lg:min-w-[480px]">
                <video
                    v-if="true"
                    ref="video"
                    loop
                    muted
                    src="/animal.mp4"
                    class="mx-auto h-screen"
                />
            </div>
        </div>

        <div
            v-if="true"
            id="infoSection"
            class="relative h-full w-full bg-white lg:max-w-[550px]"
        >
            <div class="py-7" />

            <div class="flex items-center justify-between px-8">
                <div class="flex items-center">
                    <NuxtLink href="/">
                        <img
                            src="https://picsum.photos/id/8/300/320"
                            alt="profile picture"
                            width="40"
                            class="mx-auto rounded-full lg:mx-0"
                        />
                    </NuxtLink>

                    <div class="ml-3 pt-0.5">
                        <div class="text-[17px] font-semibold">User name</div>

                        <div class="-mt-5 text-[13px] font-light">
                            User name
                            <span class="relative -top-[2px] pr-0.5 text-[30px]"
                                >.</span
                            >
                            <span class="font-medium">Date here</span>
                        </div>
                    </div>
                </div>

                <Icon
                    v-if="true"
                    @click="deletePost()"
                    name="material-symbols:delete-outline-sharp"
                    size="25"
                    class="cursor-pointer"
                />
            </div>

            <div class="mt-4 px-8 text-sm">This is the post text</div>

            <div class="mt-4 px-8 text-sm font-bold">
                <Icon name="mdi:music" size="17" />
                original sound - User name
            </div>

            <div class="mt-8 flex items-center px-8">
                <div class="flex items-center pb-4 text-center">
                    <button class="cursor-pointer rounded-full bg-gray-200 p-2">
                        <Icon name="mdi:heart" size="25" />
                    </button>

                    <span class="pl-2 pr-4 text-xs font-semibold text-gray-800"
                        >123</span
                    >
                </div>

                <div class="flex items-center pb-4 text-center">
                    <div class="cursor-pointer rounded-full bg-gray-200 p-2">
                        <Icon name="bx:bxs-message-rounded-dots" size="25" />
                    </div>

                    <span class="pl-2 pr-4 text-xs font-semibold text-gray-800"
                        >123</span
                    >
                </div>
            </div>

            <div
                id="Comments"
                class="z-0 h-[calc(100%-273px)] w-full overflow-auto border-t-2 bg-[#f8f8f8]"
            >
                <div class="pt-2" />

                <div
                    v-if="false"
                    class="mt-6 text-center text-xl text-gray-500"
                >
                    No comments...
                </div>
                <div v-else class="mt-4 flex items-center justify-between px-8">
                    <div class="relative flex w-full items-center">
                        <NuxtLink to="/">
                            <img
                                src="https://picsum.photos/id/8/300/320"
                                alt="profile picture"
                                width="40"
                                class="absolute top-0 mx-auto rounded-full lg:mx-0"
                            />
                        </NuxtLink>

                        <div class="ml-14 w-full pt-0.5">
                            <div
                                class="flex items-center justify-between text-[18px] font-semibold"
                            >
                                User name

                                <Icon
                                    v-if="true"
                                    @click="deleteComment()"
                                    name="material-symbols:delete-outline-sharp"
                                    size="25"
                                    class="cursor-pointer"
                                />
                            </div>

                            <div class="text-[15px] font-light">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Nihil ducimus consequuntur
                                cumque, pariatur quisquam odio doloremque quis
                                ea eaque quo.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-28" />
            </div>

            <div
                id="CreateComment"
                v-if="true"
                class="absolute bottom-0 flex h-[85px] w-full items-center justify-between border-t-2 bg-white px-8 py-5 lg:max-w-[550px]"
            >
                <div
                    :class="
                        inputFocused ? 'border-gray-400' : 'border-[#f1f1f2]'
                    "
                    class="flex w-full items-center rounded-lg border-2 bg-[#f1f1f2] lg:max-w-[420px]"
                >
                    <input
                        v-model="comment"
                        @focus="inputFocused = true"
                        @blur="inputFocused = false"
                        type="text"
                        placeholder="Add comment..."
                        class="w-full rounded-lg bg-[#f1f1f2] p-2 text-[14px] focus:outline-none lg:max-w-[420px]"
                    />
                </div>

                <button
                    :disabled="!comment"
                    @click="addComment()"
                    :class="
                        comment
                            ? 'cursor-pointer text-primary'
                            : 'text-gray-400'
                    "
                    class="ml-5 pr-1 text-sm font-semibold"
                >
                    Post
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const video = ref(null)
const isLoaded = ref(false)
const comment = ref('')
const inputFocused = ref(false)

onMounted(() => {
    if (video.value) {
        //     video.value.addEventListener('loadeddata', (e) => {
        //         if (e.target) {
        setTimeout(() => {
            isLoaded.value = true
        }, 500)
        //         }
        //     })
    }
})

onBeforeUnmount(() => {
    video.value.pause()
    video.value.currentTime = 0
    video.value.src = ''
})

watch(
    () => isLoaded.value,
    () => {
        if (isLoaded.value) {
            setTimeout(() => {
                video.value.play()
            }, 500)
        }
    }
)
</script>
