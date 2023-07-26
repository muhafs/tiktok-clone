<script setup>
const props = defineProps(['errorType'])
const { errorType } = toRefs(props)

let error = ref('')

watch(
    () => errorType.value,
    () => {
        if (errorType.value == 'caption') {
            error.value = 'Maximum 150 characters.'
        } else if (errorType.value == 'bio') {
            error.value = 'Maximum 80 characters.'
        } else if (errorType.value == 'file') {
            error.value = 'Unsupported file, Use MP4 instead.'
        } else {
            error.value = ''
        }
    }
)
</script>

<template>
    <div class="fixed z-50 flex w-full justify-center">
        <div
            class="absolute top-16 mx-auto rounded-sm bg-black bg-opacity-70 px-14 py-3 text-white"
            :class="errorType ? 'visible' : 'invisible'"
        >
            {{ error }}
        </div>
    </div>
</template>
