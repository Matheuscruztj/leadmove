<template>
  <Modal :show="show" @close="closeModal">
    <template #header>
      <h2 class="text-lg font-bold text-purple-800">Configurações de Upload</h2>
    </template>
    <template #content>
      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <!-- Preview -->
        <div class="flex-1 flex flex-col items-center">
          <p class="text-purple-800 mb-4">Preview do arquivo</p>
          <div v-if="previewUrl" class="w-full flex flex-col items-center">
            <img
              v-if="previewUrl"
              :src="previewUrl"
              alt="Preview"
              class="mt-2 w-56 h-56 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- Formulário -->
        <div class="flex-1">
          <form @submit.prevent="submitForm" class="flex flex-col gap-4 mt-10">
            <div class="flex justify-between items-center">
              <span>Aplicar Filtro</span>
              <Toggle v-model="toggleFilter" />
            </div>

            <div class="flex justify-between items-center">
              <span>Agendamento</span>
              <Toggle v-model="toggleAutoPost" />
            </div>

            <div v-if="toggleAutoPost" class="flex flex-col gap-4 mt-2">
              <div>
                <label for="scheduleDate" class="block text-sm font-medium text-gray-700">Data</label>
                <input
                  type="date"
                  id="scheduleDate"
                  v-model="scheduleDate"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-500"
                />
              </div>
              <div>
                <label for="scheduleTime" class="block text-sm font-medium text-gray-700">Hora</label>
                <input
                  type="time"
                  id="scheduleTime"
                  v-model="scheduleTime"
                  class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-500"
                />
              </div>
            </div>

            <div class="flex justify-between items-center">
              <span>Publicar no Feed</span>
              <Toggle v-model="togglePost" />
            </div>

            <div class="flex justify-between items-center">
              <span>Publicar nos Stories</span>
              <Toggle v-model="toggleStory" />
            </div>

            <div class="flex justify-between items-center">
              <span>Publicar no Reels</span>
              <Toggle v-model="toggleReels" />
            </div>
          </form>
        </div>
      </div>
    </template>
    <template #buttons>
      <div class="flex flex-row items-center space-x-1">
        <div class="flex items-center">
          <Button @click="closeModal" class="bg-red-800 text-white px-4 py-2 rounded">Cancelar</Button>
        </div>
        <div v-if="!isScheduling" class="flex items-center">
          <Button @click="goToSchedule" class="vibrant-orange text-white px-4 py-2 rounded">Enviar</Button>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
  import Modal from './Modal.vue';
  import Toggle from '../Form/Toggle.vue';
  import Button from '../Button.vue';
  import { ref } from 'vue';
  import Datepicker from 'vue3-datepicker';
  import Timepicker from 'vue3-timepicker';

  export default {
    name: 'UploadModal',
    components: {
      Modal,
      Toggle,
      Button,
      Timepicker,
      Datepicker,
    },
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      previewUrl: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        toggleFilter: false,
        toggleAutoPost: false,
        togglePost: false,
        toggleStory: false,
        toggleReels: false,
        scheduleDate: '',
        scheduleTime: '',
      };
    },
    methods: {
      closeModal() {
        this.$emit('update:show', false);
      },
      submitForm() {
        console.log('Form submitted with settings:', {
          toggleFilter: this.toggleFilter,
          toggleAutoPost: this.toggleAutoPost,
          togglePost: this.togglePost,
          toggleStory: this.toggleStory,
          toggleReels: this.toggleReels,
        });
        this.closeModal();
      },
      goToSchedule() {
        console.log("Enviando configurações de upload.")
        this.isScheduling = true
        this.$router.push({ name: 'Schedule' });
      },
      submitUploadForm() {
        console.log("Configurações de upload enviadas: ", {
          toggleFilter: this.toggleFilter,
          toggleAutoPost: this.toggleAutoPost,
          togglePost: this.togglePost,
          toggleStory: this.toggleStory,
          toggleReels: this.toggleReels,
        });

        this.goToSchedule()
      },
      submitScheduleForm(){
        console.log("Agendamento enviado: ", {
          scheduleDate: this.scheduleDate,
          scheduleTime: this.scheduleTime,
          description: this.description,
        });
      },
      resetForm() {
        this.toggleFilter = false;
        this.toggleAutoPost = false;
        this.togglePost = false;
        this.toggleStory = false;
        this.toggleReels = false;
        this.scheduleDate = '';
      }
    },
  }
</script>