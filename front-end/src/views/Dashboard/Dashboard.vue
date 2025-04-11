<template>
  <div class="container-center">
    <div class="top-8 relative">
      <CardComponent>
        <template #title>
          <h1 class="font-bold text-xl mb-2 text-gray-600">Agendamento</h1>
        </template>
        <Table>
          <template #header>
            <th class="px-4 py-2">Id</th>
            <th class="px-4 py-2">Tipo de Postagem</th>
            <th class="px-4 py-2">Data</th>
            <th class="px-4 py-2">Hora</th>
            <th class="px-4 py-2">Post</th>
            <th class="px-4 py-2">Ações</th>
          </template>

          <template #body>
            <tr v-for="item in scheduler" :key="item.id" class="border-b">
              <td class="px-4 py-2 text-purple-800">{{ item.id }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.type }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.date }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.time }}</td>
              <td class="px-4 py-2 text-purple-800">{{ item.post }}</td>
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