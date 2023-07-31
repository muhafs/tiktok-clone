<template>
    <div id="Register">
        <div class="mb-4 text-center text-[28px] font-bold">Sign up</div>

        <div class="flex items-center justify-between gap-2 px-6 pb-2">
            <div class="w-full">
                <TextInput
                    placeholder="Full name"
                    v-model:input="name"
                    inputType="text"
                    :autoFocus="true"
                    :error="errors && errors.name ? errors.name[0] : ''"
                />
            </div>

            <div class="w-full">
                <TextInput
                    placeholder="Email address"
                    v-model:input="email"
                    inputType="email"
                    :error="errors && errors.email ? errors.email[0] : ''"
                />
            </div>
        </div>

        <div class="px-6 pb-2">
            <TextInput
                placeholder="Password"
                v-model:input="password"
                inputType="password"
                :error="errors && errors.password ? errors.password[0] : ''"
            />
        </div>

        <div class="px-6 pb-2">
            <TextInput
                placeholder="Confirm password"
                v-model:input="confirmPassword"
                inputType="password"
                :error="
                    errors && errors.confirmPassword
                        ? errors.confirmPassword[0]
                        : ''
                "
            />
        </div>

        <div class="px-6 text-[12px] text-gray-600">
            <span class="cursor-pointer hover:underline">Forgot password?</span>
        </div>

        <div class="mt-6 px-6 pb-2">
            <button
                @click="register()"
                :disabled="!name || !email || !password || !confirmPassword"
                :class="
                    !name || !email || !password || !confirmPassword
                        ? 'bg-gray-200'
                        : 'bg-primary'
                "
                class="w-full rounded-sm py-3 text-[17px] font-semibold text-white"
            >
                Sign up
            </button>
        </div>
    </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp()

const name = ref(null)
const email = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
const errors = ref(null)

const register = async () => {
    errors.value = null

    try {
        await $userStore.getTokens()
        await $userStore.register(
            name.value,
            email.value,
            password.value,
            confirmPassword.value
        )
        await $userStore.getUser()

        $generalStore.isLoginOpen = false
    } catch (error) {
        console.log(error)
        errors.value = error.response.data.errors
    }
}
</script>
