<script setup></script>

<template>
    <div class="h-[100vh] bg-[#F8F8F8]">
        <TopNav />

        <div class="mx-auto flex w-full max-w-[1140px] justify-between px-2">
            <slot />
        </div>
    </div>
</template>
