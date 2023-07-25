<script setup>
defineProps(['user']);
</script>

<template>
    <div
        class="flex w-full items-center rounded-md px-2 py-1.5 hover:bg-gray-100"
    >
        <img
            src="https://picsum.photos/id/8/300/320"
            alt=""
            width="35"
            class="mx-auto rounded-full lg:mx-0"
        />

        <div class="hidden lg:block lg:pl-2.5">
            <div class="flex items-center">
                <div class="text-[14px] font-bold">User name</div>

                <div class="relative ml-1 h-[14px] rounded-full bg-[#58d5ec]">
                    <Icon
                        name="teenyicons:tick-small-solid"
                        color="#ffffff"
                        size="15"
                        class="relative -top-[7px]"
                    />
                </div>
            </div>

            <div class="text-[12px] font-light text-gray-600">User name</div>
        </div>
    </div>
</template>
