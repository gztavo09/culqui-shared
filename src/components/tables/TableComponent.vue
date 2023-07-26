<script setup lang="ts">
    import { ref, computed } from 'vue';
    import type { User } from '@/interfaces/auth';
    const props = defineProps({
        columns: {
          type: [],
          default: () => []
        },
        initialData: {
            type: Array<User>,
            default: () => [],
        },
        total: {
          type: Number,
          default: 0
        },
        itemsPerPage: {
          type: Number,
          default: 10
        },
        currentPage: {
          type: Number,
          default: 1
        }
    });
    const selectNumberOfItems= ref<number>(props.itemsPerPage)
    const emit = defineEmits(['prev', 'next', 'set', 'changePerPage'])

    //GETTERS
    const page = ref<number>(props.currentPage)
    const totalPages = computed(() => Math.ceil(props.total / props.itemsPerPage));
    const totalItems = computed(() => props.total);
    const firstItem = computed(() => (page.value - 1) * props.itemsPerPage + 1);
    const lastItem = computed(() => Math.min(page.value * props.itemsPerPage, totalItems.value));

    //COMPUTED
    const pages = computed(() => {
      const pagesArray: number[] = [];
      for (let i = 1; i <= totalPages.value; i++) {
          pagesArray.push(i);
      }
      return pagesArray;
    });

    //METHODS
    const changeItemsPerPage = (e: Event) => {
      const { value } = e.target as HTMLSelectElement
      selectNumberOfItems.value = parseInt(value)
      emit('changePerPage', parseInt(value))
    }
    const prevPage = () => emit('prev')
    const nextPage = () => emit('next')
    const changePage = (value: number) => emit('set', value)
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
          <tr v-for="row in initialData" :key="row.id">
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ row.nombre }}</td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ row.cargo }}</td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ row.departamento }}</td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ row.oficina }}</td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs">{{ row.estadoCuenta }}</td>
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

      <div class="mt-6 flex justify-between">
        <div class="flex items-center">
          <button class="px-2" @click="prevPage" :class="props.currentPage === 1 ? 'opacity-30' : ''" :disabled="props.currentPage === 1">
            <div class="rotate-180">
              <IconArrow />
            </div>
          </button>
          <template v-for="sPage in pages" :key="sPage">
            <button 
              class="px-2 text-xs" 
              @click="changePage(sPage)" 
              :class="{ 'font-bold': props.currentPage === sPage }">
              {{ sPage }}
            </button>
          </template>
          <button class="px-2"  @click="nextPage" :class="props.currentPage === totalPages ? 'opacity-30' : ''"  :disabled="props.currentPage === totalPages">
            <IconArrow />
          </button>
        </div>
        <div class="flex items-center text-[#687588] text-xs">
          <span class="mr-2">Mostrando {{ firstItem }} a {{ lastItem }} de {{ totalItems }} registros</span>
          <select
              class="border rounded-md px-1 py-1 text-xs"
              v-model="selectNumberOfItems"
              @change="changeItemsPerPage($event)"
            >
              <template v-for="perPage in [10, 20, 30]" :key="perPage">
                <option :value="perPage">Mostrar {{ perPage }}</option>
              </template> 
          </select>
        </div>
      </div>
    </div>
</template>