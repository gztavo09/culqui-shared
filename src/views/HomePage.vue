<script setup lang="ts">
    import { useEmployees } from '@/composables/useEmployees';

    const columns = [
        'Nombre',
        'Cargo',
        'Departamento',
        'Oficina',
        'Cuenta',
        'Acciones'
    ]

    const { employees, isLoading, total, prevPage, nextPage, currentPage, setPage } = useEmployees()
    

</script>

<template>
     <div class="h-full w-full flex sm:pl-[280px]">
        <SidebarComponent />
        <div class="w-full h-screen bg-[#F1F2F4]">
            <NavbarComponent />
            <div class="mx-4 my-6 p-4 bg-white">
                <BoxSearcherComponent :isLoading="isLoading" />
                <div class="overflow-x-auto overflow-y-hidden">
                    <TableComponent 
                        :isLoading="isLoading"
                        :columns="columns" 
                        :initialData="employees"
                        :total="total"
                        :currentPage="currentPage"
                        @prev="prevPage"
                        @next="nextPage"
                        @set="setPage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>