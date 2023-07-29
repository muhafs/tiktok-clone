<template>
    <div
        id="AuthOverlay"
        class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
    >
        <div
            class="relative h-[70%] w-full max-w-[470px] rounded-lg bg-white p-4"
        >
            <!--? Close Button Section -->
            <div class="flex w-full justify-end">
                <button class="rounded-full bg-gray-100 p-1.5">
                    <Icon name="mdi:close" size="26" />
                </button>
            </div>

            <!--? Content Section -->
            <Login v-if="isRegister" />
            <Register v-else />

            <!--? Footer Section -->
            <div
                class="absolute bottom-0 left-0 flex w-full items-center justify-center border-t py-5"
            >
                <span class="text-[14px] text-gray-600"
                    >Don't have an account?</span
                >

                <button
                    @click="isRegister = !isRegister"
                    class="pl-1 text-[14px] font-semibold text-primary"
                >
                    <span v-if="isRegister">Sign up</span>
                    <span v-else>Log in</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const isRegister = ref(true)
</script>
