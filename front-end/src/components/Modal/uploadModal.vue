<template>
  <Modal :show="show" @close="closeModal">
    <template #header>
      <h2 class="text-lg font-bold text-gray-700">{{ $t('post.settingsUpload') }}</h2>
    </template>
    <template #content>
      <div class="flex flex-wrap md:flex-nowrap gap-4">
        <!-- Preview -->
        <div class="flex-1 flex flex-col items-center">
          <p class="text-g mb-4">{{ $t('post.preview') }}</p>
          <div v-if="previewUrl" class="w-full flex flex-col items-center">
            <img
              v-if="previewUrl"
              :src="previewUrl"
              alt="Preview"
              class="mt-2 w-56 h-56 object-cover rounded-lg shadow-lg"
            />
            <div class="mt-4 flex gap-2 justify-end w-full pr-4">
              <button 
                @click="togglePost = !togglePost"
                :class="[
                  'px-4 py-2 rounded-lg transition-colors cursor-pointer',
                  togglePost ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'
                ]"
              >
                Feed
              </button>
              <button 
                @click="toggleStory = !toggleStory"
                :class="[
                  'px-4 py-2 rounded-lg transition-colors cursor-pointer',
                  toggleStory ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'
                ]"
              >
                Stories
              </button>
              <button 
                @click="toggleReels = !toggleReels"
                :class="[
                  'px-4 py-2 rounded-lg transition-colors cursor-pointer',
                  toggleReels ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700'
                ]"
              >
                Reels
              </button>
            </div>
          </div>
        </div>

        <!-- Formulário -->
        <div class="flex-1">
          <form @submit.prevent="submitForm" class="flex flex-col gap-4 mt-10">
            <div class="flex justify-between items-center">
              <span class="text-gray-700">{{ $t('post.applyFilter') }}</span>
              <Toggle v-model="toggleFilter" />
            </div>

            <div class="flex justify-between items-center">
              <span class="text-gray-700">{{ $t('post.schedule') }}</span>
              <Toggle v-model="toggleAutoPost" />
            </div>

            <div v-if="toggleAutoPost" class="flex flex-col gap-4 mt-2">
              <div>
                <label for="scheduleDate" class="flex text-sm font-medium justify-start text-gray-700">{{ $t('post.date') }}</label>
                <input
                  type="date"
                  id="scheduleDate"
                  v-model="scheduleDate"
                  class="mt-1 block w-full p-1 outline-0 border-gray-300 rounded-md shadow-sm focus:ring focus:border-gray-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-gray-400 dark:focus:border-gray-400"
                />
              </div>
              <div>
                <label for="scheduleTime" class="flex text-sm font-medium justify-start text-gray-700">{{ $t('post.hour') }}</label>
                <input
                  type="time"
                  id="scheduleTime"
                  v-model="scheduleTime"
                  class="mt-1 block w-full p-1 outline-0 border-gray-300 rounded-md shadow-sm focus:ring focus:border-gray-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-400 dark:focus:border-gray-400"
                />
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-700">{{ $t('post.commentary') }}</span>
              <Toggle v-model="toggleComment" />
            </div>
            <div v-if="toggleComment" class="flex flex-col gap-4 mt-2">
              <div>
                <label for="comment" class="flex text-sm font-medium justify-start text-gray-700">{{ $t('post.commentary') }}</label>
                <textarea
                  id="comment"
                  v-model="comment"
                  rows="4" 
                  class="mt-1 block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-none shadow-2xs dark:placeholder-gray-400 dark:text-black " 
                  placeholder="Write your thoughts here..."
                ></textarea
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </template>
    <template #buttons>
      <div class="w-full flex justify-end">
        <div class="flex gap-2">
          <Button @click="closeModal" class="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded">{{ $t('post.cancel') }}</Button>
          <Button v-if="!isScheduling" @click="goToSchedule" class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded">{{ $t('post.createPost') }}</Button>
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
        toggleComment: false,
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
          toggleComment: this.toggleComment,
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

<style scoped>
  #comment {
    border-radius: 0.5rem;
    padding: 2rem;
    background-color: #f3f4f6;
    outline: 2px solid #d8b4fe;
    width: 100%;
    height: 100%;
  }
</style>
