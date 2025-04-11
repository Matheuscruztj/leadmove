<template>
  <div class="container-center">
    <div class="m-auto justify-between items-center">
      <h1>Scheduler</h1>
      <hr />
    </div>
    <div class="top-8 relative">
      <CardComponent>
        <template #title>
          <h1 class="font-bold text-xl mb-2 light-gray">Dados Gerais</h1>
        </template>
        <div>
          <vueform>
            <TextElement name="full_name" label="Nome Completo" placehold="Nome" class="light-gray" />
          </vueform>
        </div>

        <template #buttons>
          <Button type="submit" class="vibrant-orange" >Salvar</Button>
        </template>
      </CardComponent>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CardComponent from '../components/Card/CardComponent.vue';
import { TextElement } from '@vueform/vueform/dist/tailwind';
import Button from '../components/Button.vue';

export default defineComponent({
  name: 'User',
  components: {
    CardComponent,
    Button
  },
});
</script>