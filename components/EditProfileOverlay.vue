<template>
    <!-- class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 pt-14 md:pt-[105px]" -->
    <div
        id="EditProfileOverlay"
        class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 pt-14 sm:pt-0"
    >
        <div
            class="relative mx-3 w-full max-w-[700px] rounded-lg bg-white p-4 sm:h-[580px]"
            :class="!uploadedImage ? 'h-[655px]' : 'h-[580px]'"
        >
            <!--? Header Section -->
            <div
                class="absolute left-0 top-0 flex w-full items-center justify-between border-b border-b-gray-300 p-5"
            >
                <div class="text-[22px] font-medium">Edit Profile</div>

                <button @click="$generalStore.isEditProfileOpen = false">
                    <Icon name="mdi:close" size="25" />
                </button>
            </div>

            <!--? Content Section -->
            <div
                class="h-[300px]"
                :class="!uploadedImage ? 'mt-16' : 'mt-[58px]'"
            >
                <div v-if="!uploadedImage">
                    <div
                        id="ProfilePhotoSection"
                        class="flex h-[145px] w-full flex-col border-b px-1.5 py-2 sm:h-[118px]"
                    >
                        <div
                            class="mb-1 text-center text-[15px] font-semibold text-gray-700 sm:mb-0 sm:w-[160px] sm:text-left"
                        >
                            Profile Photo
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <label for="image" class="relative cursor-pointer">
                                <img
                                    src="https://picsum.photos/id/8/300/320"
                                    alt="profile photo"
                                    width="95"
                                    class="rounded-full"
                                />

                                <div
                                    class="absolute bottom-0 right-0 inline-block w-[32px] rounded-full border border-gray-300 bg-white p-1 shadow-xl"
                                >
                                    <Icon
                                        name="ph:pencil-simple-line-bold"
                                        size="17"
                                        class="-mt-1 ml-0.5"
                                    />
                                </div>
                            </label>

                            <input
                                @input="getUploadedImage"
                                id="image"
                                type="file"
                                accept="image/png, image/jpg, image/jpeg"
                                class="hidden"
                            />
                        </div>
                    </div>

                    <div
                        id="UsernameSection"
                        class="mt-1.5 flex w-full flex-col border-b px-1.5 py-2 sm:h-[118px]"
                    >
                        <div
                            class="mb-1 text-center text-[15px] font-semibold text-gray-700 sm:mb-0 sm:w-[160px] sm:text-left"
                        >
                            Username
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="w-full max-w-md sm:w-[60%]">
                                <TextInput
                                    placeholder="Username"
                                    inputType="text"
                                    v-model:input="userName"
                                    max="30"
                                />
                                <div class="mt-4 text-[11px] text-gray-500">
                                    Usernames can only contain letters, numbers,
                                    underscores and periods. Changing your
                                    username will also change your profile link.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="BioSection"
                        class="mt-2 flex w-full flex-col px-1.5 py-2 sm:h-[120px]"
                    >
                        <div
                            class="mb-1 text-center text-[15px] font-semibold text-gray-700 sm:mb-0 sm:w-[160px] sm:text-left"
                        >
                            Bio
                        </div>

                        <div class="flex items-center justify-center sm:-mt-6">
                            <div class="w-full max-w-md sm:w-[60%]">
                                <textarea
                                    v-model="userBio"
                                    cols="30"
                                    rows="4"
                                    maxlength="80"
                                    class="w-full resize-none rounded-md border border-gray-300 bg-[#f1f1f2] px-3 py-2.5 text-gray-800 focus:outline-none"
                                ></textarea>

                                <div
                                    v-if="userBio"
                                    class="text-[11px] text-gray-500"
                                >
                                    {{ userBio.length }}/80
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else class="h-[430px] w-full">
                    <Cropper
                        ref="cropper"
                        :stencilComponent="CircleStencil"
                        :src="uploadedImage"
                        class="h-[430px]"
                    />
                </div>
            </div>

            <!--? Footer Section -->
            <div
                id="ButtonSection"
                class="absolute bottom-0 left-0 w-full border-t border-t-gray-300 p-5"
            >
                <div
                    v-if="!uploadedImage"
                    id="UpdateInfoButtons"
                    class="flex items-center justify-end"
                >
                    <button
                        @click="$generalStore.isEditProfileOpen = false"
                        class="flex items-center rounded-md border px-3 py-[6px] hover:bg-gray-100"
                    >
                        <span class="px-2 text-[15px] font-medium">Cancel</span>
                    </button>

                    <button
                        @click="cropAndUpdateImage()"
                        class="ml-3 flex items-center rounded-md border bg-primary px-3 py-[6px] text-white"
                    >
                        <span class="mx-4 text-[15px] font-medium">Apply</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Cropper, CircleStencil } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { storeToRefs } from 'pinia'

const { $generalStore, $userStore, $profileStore } = useNuxtApp()
const { name, bio, image } = storeToRefs($userStore)

onMounted(() => {
    userName.value = name.value
    userBio.value = bio.value
    userImage.value = image.value
})

const file = ref(null)
const cropper = ref(null)
const uploadedImage = ref(null)
const userImage = ref(null)
const userName = ref(null)
const userBio = ref(null)
const isUploaded = ref(false)

const getUploadedImage = (e) => {
    file.value = e.target.files[0]
    uploadedImage.value = URL.createObjectURL(file.value)
}

watch(
    () => userName.value,
    () => {
        if (!userName.value || userName.value == name.value) {
            isUploaded.value = false
        } else {
            isUploaded.value = true
        }
    }
)

watch(
    () => userBio.value,
    () => {
        if (!userBio.value || userBio.value.length < 1) {
            isUploaded.value = false
        } else {
            isUploaded.value = true
        }
    }
)
</script>
