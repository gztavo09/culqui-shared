<script setup lang="ts">
    import { ref } from 'vue';

    const skeletonData = ref<number[]>()
    //Simulación de datos de SKELETON
    skeletonData.value = Array.from({ length: 5 }, (_, index) => (index + 1));

</script>

<template>
    <div>
      <table class="table-auto w-full border-0">
        <thead>
          <tr class="bg-[#FAFAFA] border-[#FAFAFA] border">
            <th v-for="item in skeletonData" :key="item" class="border px-4 py-4 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in skeletonData" :key="item">
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></td>
            <td class="border px-4 py-2 border-[#FAFAFA] border-r-0 border-l-0 text-xs"><Skeleton /></td>
          </tr>
        </tbody>
      </table>

      <div class="mt-6 flex justify-between">
        <Skeleton />
      </div>
    </div>
</template>