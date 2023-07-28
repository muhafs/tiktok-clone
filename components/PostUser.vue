<template>
    <div
        @mouseenter="isHover(true)"
        @mouseleave="isHover(false)"
        class="relative cursor-pointer brightness-90 hover:brightness-[1.1]"
    >
        <!--? Video Loading -->
        <div
            v-if="!isLoaded"
            class="absolute left-0 top-0 flex aspect-[3/4] w-full items-center justify-center rounded-md bg-black object-cover"
        >
            <Icon
                name="mingcute:loading-line"
                color="#FFFFFF"
                size="100"
                class="ml-1 animate-spin"
            />
        </div>

        <!--? Video Loaded -->
        <div>
            <video
                ref="video"
                src="/animal.mp4"
                loop
                muted
                class="aspect-[3/4] rounded-md object-cover"
            />
        </div>

        <!--? Video Caption -->
        <div class="px-1">
            <div class="break-words pt-1 text-[15px] text-gray-700">
                This is some text
            </div>

            <div
                class="-ml-1 flex items-center text-xs font-bold text-gray-600"
            >
                <Icon name="gg:loadbar-sound" size="20" /> 3%
                <Icon name="tabler:alert-circle" size="16" class="ml-1" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['post'])

const route = useRoute()
const router = useRouter()

const video = ref(null)
const isLoaded = ref(false)

onMounted(() => {
    if (video.value) {
        //     video.value.addEventListener('loadeddata', (e) => {
        //         if (e.target) {
        setTimeout(() => {
            isLoaded.value = true
        }, 200)
        //         }
        //     })
    }
})

onBeforeUnmount(() => {
    video.value.pause()
    video.value.currentTime = 0
    video.value.src = ''
})

const isHover = (bool) => {
    if (bool) {
        video.value.play()
    } else {
        video.value.pause()
    }
}
</script>
