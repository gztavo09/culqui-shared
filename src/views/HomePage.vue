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

    const { employees, isLoading, total, itemsPerPage, prevPage, nextPage, currentPage, setPage, setPerPage } = useEmployees()
    

</script>

<template>
     <div class="h-full w-full flex sm:pl-[280px]">
        <SidebarComponent />
        <div class="w-full h-screen bg-[#F1F2F4]">
            <NavbarComponent />
            <div class="mx-4 my-6 p-4 bg-white">
                <BoxSearcherSkeleton  v-if="isLoading" />
                <BoxSearcherComponent v-else />
                <div class="overflow-x-auto overflow-y-hidden">
                    <TableSkeleton v-if="isLoading" />
                    <TableComponent
                        v-else
                        :columns="columns" 
                        :initialData="employees"
                        :total="total"
                        :itemsPerPage="itemsPerPage"
                        :currentPage="currentPage"
                        @prev="prevPage"
                        @next="nextPage"
                        @set="setPage"
                        @changePerPage="setPerPage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>