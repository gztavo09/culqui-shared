<template>
    <div class="box-searcher">
        <div class="box-searcher__header w-full flex flex-col sm:flex-row justify-between mb-6">
            <div class="w-full sm:w-1/2 flex flex-col items-start">
                <h5 class="font-semibold text-2xl mb-2">Empleados</h5>
                <p class="text-gray-400 text-sm">Gestiona tus empleados</p>
            </div>
            <div class="w-full sm:w-1/2 flex flex-row items-end justify-center sm:justify-end mt-4 sm:mt-0 gap-4">
                <Skeleton />
            </div>
        </div>
        <div class="box-searcher__filters flex gap-4 mb-6">
            <Skeleton />
        </div>
    </div>
</template>