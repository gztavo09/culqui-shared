<script setup lang="ts">
    import { ref, computed } from 'vue';

    const data = ref([] as any[]);
    const itemsPerPage = 8;
    const currentPage = ref(1);

    const props = defineProps({
        columns: {
          type: [],
          default: () => []
        },
        initialData: {
            type: Array,
            default: () => [],
        },
    });

    const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.value.slice(start, end);
    });

    const totalPages = computed(() => Math.ceil(data.value.length / itemsPerPage));
    const totalItems = computed(() => data.value.length);
    const firstItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
    const lastItem = computed(() => Math.min(currentPage.value * itemsPerPage, totalItems.value));

    const pages = computed(() => {
    const pagesArray: number[] = [];
    for (let i = 1; i <= totalPages.value; i++) {
        pagesArray.push(i);
    }
    return pagesArray;
    });

    const prevPage = () => {
    currentPage.value = Math.max(currentPage.value - 1, 1);
    };

    const nextPage = () => {
    currentPage.value = Math.min(currentPage.value + 1, totalPages.value);
    };

    const changePage = (page: number) => {
    currentPage.value = page;
    };

    // Simulación de datos de prueba
    data.value = props.initialData.length ? props.initialData : Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `Nombre ${index + 1}`,
        position: `Cargo ${index + 1}`,
        department: `Departamento ${index + 1}`,
        office: `Oficina ${index + 1}`,
        account: `Cuenta ${index + 1}`,
    }));

</script>

<template>
    <div>
    <table class="table-auto w-full border-0">
      <thead>
        <tr class="bg-[#FAFAFA] border-[#FAFAFA] border">
          <th v-for="column in columns" :key="column" class="px-4 py-4 text-[#687588] text-xs font-semibold text-left">
            <div v-if="column.toString() == 'Acciones'" class="text-right">
              {{ column }}
            </div>
            <div v-else>
              {{ column }}
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedData" :key="item.id">
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ item.name }}</td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ item.position }}</td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ item.department }}</td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ item.office }}</td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ item.account }}</td>
          <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-right">
            <div class="flex gap-2 justify-end">
              <button class="flex justify-center items-center bg-green-500 hover:bg-green-700 text-white font-bold w-[30px] h-[30px] rounded">
              <IconEye />
            </button>
            <button class="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold w-[30px] h-[30px] rounded">
              <IconEdit />
            </button>
            <button class="flex justify-center items-center bg-red-500 hover:bg-red-700 text-white font-bold w-[30px] h-[30px] rounded">
              <IconTrash />
            </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-6 flex justify-between" v-if="false">
      
      <div class="flex items-center">
        <button class="px-2" @click="prevPage" :disabled="currentPage === 1">&lt;</button>
        <template v-for="page in pages" :key="page">
          <button class="px-2" @click="changePage(page)" :class="{ 'font-bold': page === currentPage }">{{ page }}</button>
        </template>
        <button class="px-2" @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
      </div>
      <div class="flex items-center">
        <span>Mostrando {{ firstItem }} a {{ lastItem }} de {{ totalItems }} registros</span>
      </div>
    </div>
  </div>
</template>