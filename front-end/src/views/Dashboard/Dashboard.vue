<template>
  <div class="container-center">
    <div class="top-8 relative">
      <CardComponent>
        <template #title>
          <h1 class="font-bold text-xl mb-2 text-gray-600">Agendamento</h1>
        </template>
        <Table>
          <template #header>
            <th class="px-4 py-2">{{ $t('table.id') }}</th>
            <th class="px-4 py-2">{{ $t('table.type') }}</th>
            <th class="px-4 py-2">{{ $t('table.date') }}</th>
            <th class="px-4 py-2">{{ $t('table.time') }}</th>
            <th class="px-4 py-2">{{ $t('table.post') }}</th>
            <th class="px-4 py-2">{{ $t('table.actions') }}</th>
          </template>

          <template #body>
            <tr v-for="item in scheduler" :key="item.id" class="border-b">
              <td class="px-4 py-2 text-purple-800">{{ item.id }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.type }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.date }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.time }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.post }}</td>
              <td class="px-4 py-2 text-purple-800">
                <Button @click="deleteScheduler(item.id)">
                  <svg
                    class="w-5 h-5 text-red-800 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </Button>
              </td>
            </tr>
          </template>
        </Table>
      </CardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import CardComponent from '../../components/Card/CardComponent.vue';
import Table from '../../components/Table.vue';
import mockScheduler from '../../mocks/scheduler.json'; // Adjust the path as necessary
import { format } from "date-fns";

type Scheduler = {
  id: number;
  type: string;
  date: string;
  time: string;
  post: string;
};

export default {
  name: "Dashboard",
  components: {
    CardComponent,
    Table,
  },
  setup(){
    const scheduler = ref<Scheduler[]>([]);

    const fetchScheduler = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
      scheduler.value = mockScheduler.map((item: any) => ({
        id: item.id,
        type: item.postType,
        date: format(new Date(item.date), 'dd/MM/yyyy'),
        time: item.time,
        post: item.image,
      }));
    }

    const deleteScheduler = (id: number) => {
      scheduler.value = scheduler.value.filter((item) => item.id !== id);
    }

    onMounted(() => {
      fetchScheduler();
    });

    return {
      scheduler,
      deleteScheduler,
    }
  }
}
</script>