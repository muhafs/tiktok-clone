<script setup>
const route = useRoute();
</script>

<template>
    <div
        id="SideNavMain"
        :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'"
        class="fixed z-20 h-full w-[75px] overflow-auto border-r bg-white pt-[70px] lg:border-r-0"
    >
        <div class="mx-auto w-[55px] lg:w-full">
            <NuxtLink>
                <MenuItem
                    iconString="For You"
                    colorString="#f02c56"
                    sizeString="30"
                />
            </NuxtLink>

            <MenuItem
                iconString="Following"
                colorString="#000000"
                sizeString="27"
            />

            <MenuItem iconString="LIVE" colorString="#000000" sizeString="27" />

            <div class="mt-2 border-b lg:ml-2" />

            <div
                class="hidden px-2 pb-2 pt-4 text-xs font-semibold text-gray-600 lg:block"
            >
                Suggested accounts
            </div>

            <div class="bloc pt-3 lg:hidden" />

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button
                class="hidden pl-2 pt-1.5 text-[13px] text-primary lg:block"
            >
                See all
            </button>

            <div class="mt-2 border-b lg:ml-2" />

            <div
                class="hidden px-2 pb-2 pt-4 text-xs font-semibold text-gray-600 lg:block"
            >
                Following accounts
            </div>

            <div class="bloc pt-3 lg:hidden" />

            <div class="cursor-pointer">
                <MenuItemFollow />
            </div>

            <button
                class="hidden pl-2 pt-1.5 text-[13px] text-primary lg:block"
            >
                See more
            </button>

            <div class="mt-2 hidden border-b lg:ml-2 lg:block" />

            <div class="hidden text-[11px] text-gray-500 lg:block">
                <div class="px-2 pt-4">
                    About Newsroom Tiktok Shop Contact Careers ByteDance
                </div>
                <div class="px-2 pt-4">
                    Tiktok for Good Advertise Developers Transparency Tiktok
                    Rewards Tiktok Browse Tiktok Embeds
                </div>
                <div class="px-2 pt-4">
                    Help Safety Terms Privacy Creator Portal Community Guidlines
                </div>
                <div class="px-2 pt-4">© 2023 Tiktok</div>
            </div>

            <div class="pb-14" />
        </div>
    </div>
</template>
