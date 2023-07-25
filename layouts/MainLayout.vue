<script setup>
const route = useRoute();
</script>

<template>
    <TopNav />

    <div
        :class="route.fullPath === '/' ? 'max-w-[1140px]' : ''"
        class="mx-auto flex w-full justify-between px-0 lg:px-2.5"
    >
        <div>
            <SideNavMain />
        </div>
    </div>
</template>
