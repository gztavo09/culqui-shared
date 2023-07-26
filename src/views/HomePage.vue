<script setup lang="ts">
    import { useEmployees } from '@/composables/useEmployees';
import { toRaw } from 'vue';

    const columns = [
        'Nombre',
        'Cargo',
        'Departamento',
        'Oficina',
        'Cuenta',
        'Acciones'
    ]

    // 1. Composable
    // const { employees, total, prevPage, nextPage, currentPage, setPage, employeeQuery } = useEmployees()
    
    const { employeeQuery, prevPage, nextPage, currentPage, setPage } = useEmployees()
    console.log({employeeQuery});
    
    const employees = employeeQuery.data.value ? employeeQuery.data.value.data : []
    const total = employeeQuery.data.value ? employeeQuery.data.value.total : 0
</script>

<template>
     <div class="h-full w-full flex sm:pl-[280px]">
        <SidebarComponent />
        <div class="w-full h-screen bg-[#F1F2F4]">
            <NavbarComponent />
            <div class="mx-4 my-6 p-4 bg-white">
                <BoxSearcherComponent :isLoading="employeeQuery.isLoading" />
                <div class="overflow-x-auto overflow-y-hidden">
                    {{ employeeQuery.isFetching }}
                    <TableComponent 
                        :isLoading="employeeQuery.isLoading.value"
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