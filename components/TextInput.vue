<template>
    <div id="TextInput">
        <input
            :id="`input-${placeholder}`"
            :placeholder="placeholder"
            :type="inputType"
            v-model="inputComputed"
            autocomplete="off"
            :max="max"
            class="block w-full rounded-md border border-gray-300 bg-[#f1f1f2] px-3 py-2.5 text-gray-800 focus:outline-none"
        />

        <span v-if="error" class="text-[14px] font-semibold text-red-500">{{
            error
        }}</span>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:input'])

const props = defineProps([
    'input',
    'placeholder',
    'inputType',
    'max',
    'autoFocus',
    'error',
])
const { input, placeholder, inputType, max, autoFocus, error } = toRefs(props)

onMounted(() => {
    if (autoFocus.value) {
        document.getElementById(`input-${placeholder.value}`).focus()
    }
})

const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val),
})
</script>
