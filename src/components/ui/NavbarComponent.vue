<script setup lang="ts">
    import { useAuthStore } from '../../store/auth';
    const { user } = useAuthStore()

    const initials = (fullName: string) => {
        return fullName.split(" ") 
            .map(word => word.charAt(0))
            .join("")
    }
</script>

<template>
    <div class="h-16 bg-white flex items-center justify-between px-4">
        <button type="button" 
            class="h-8 w-8 flex items-center justify-center rounded-md focus:outline-none">
            <IconMenuBars />
        </button>
        <div as="div" class="relative inline-block items-center">
            <div class="inline-flex w-full items-center justify-center px-4 py-2">
                <div class="mr-2 rounded-full bg-orange-400 text-sm w-[30px] h-[30px] flex justify-center items-center text-white">{{  initials(user.nombre)  }}</div>
                <p class="mr-2 text-[#111827] font-medium text-xs">
                    {{ user.nombre }}
                </p>
                <ArrowDown width='15' stroke='2.5' />
            </div>
        </div>
    </div>
</template>