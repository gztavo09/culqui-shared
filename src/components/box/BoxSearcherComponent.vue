<script setup lang="ts">
    import { ref } from 'vue'

    const employee = ref('')
</script>

<template>
    <div class="box-searcher">
        <div class="box-searcher__header w-full flex flex-col sm:flex-row justify-between mb-6">
            <div class="w-full sm:w-1/2 flex flex-col items-start">
                <h5 class="font-semibold text-2xl mb-2">Empleados</h5>
                <p class="text-gray-400 text-sm">Gestiona tus empleados</p>
            </div>
            <div class="w-full sm:w-1/2 flex flex-row items-end justify-center sm:justify-end mt-4 sm:mt-0 gap-4">
                <button class="px-4 py-3 border border-[#111827] rounded-lg text-sm font-semibold flex justify-center items-center text-[#111827]">
                    <div class="mr-2">
                        <IconDownload />
                    </div>
                    Descargar
                </button>
                <button class="px-4 py-3 border border-[#111827] rounded-lg text-sm font-semibold flex justify-center items-center bg-[#111827] text-white">
                    <div class="mr-2">
                        <IconPlus />
                    </div>
                    Nuevo
                </button>
            </div>
        </div>
        <div class="box-searcher__filters flex gap-4 mb-6">
            <div class="w-2/3">
                <input class="border rounded-lg px-3 py-3 text-sm w-full" name="email" v-model="employee" placeholder="Buscar empleado">
            </div>
            <div class="w-1/3">
                <select class="border rounded-lg px-3 py-3 text-sm w-full">
                    <option>Hola</option>
                </select>
            </div>
        </div>
    </div>
</template>