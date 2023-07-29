<template>
    <div id="Login" class="mb-4 text-center text-[28px] font-bold">Log in</div>

    <div class="px-6 pb-1.5 text-[15px]">Email address</div>

    <div class="px-6 pb-2">
        <TextInput
            placeholder="Email address"
            v-model:input="email"
            inputType="email"
            :autoFocus="true"
            error=""
        />
    </div>

    <div class="px-6 pb-2">
        <TextInput
            placeholder="Password"
            v-model:input="password"
            inputType="password"
        />
    </div>

    <div class="px-6 text-[12px] text-gray-600">Forgot password?</div>

    <div class="mt-6 px-6 pb-2">
        <button
            @click="login()"
            :disabled="!email || !password"
            :class="!email || !password ? 'bg-gray-200' : 'bg-primary'"
            class="w-full rounded-sm py-3 text-[17px] font-semibold text-white"
        >
            Log in
        </button>
    </div>
</template>

<script setup>
const email = ref(null)
const password = ref(null)
const errors = ref(null)
</script>
