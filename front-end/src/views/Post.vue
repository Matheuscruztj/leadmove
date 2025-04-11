<template>
  <div class="container-center">
    <!--<div class="m-auto justify-between items-center">
      <h1>Home</h1>
      <hr />
    </div>-->
    <div class="top-8 relative">
      <CardComponent>
        <template #title>
          <h1 class="relative justify-center flex text-purple-800">{{ $t('post.createPost') }}</h1>
        </template>
        
        <div id="upload">
          <input type="file" accept="video/*,image/*"  @change="handleFileChange" class="w-3 p-2 rounded mb-4 shadow-2xl " />
          {{ $t('post.clickToUpload') }}
        </div>

        <template #footer>
          <p class="text-purple-800 flex justify-center">{{ $t('post.dragAndDrop') }}</p> 
        </template>
      </CardComponent>
      
      <UploadModal
        :show="isModalOpen"
        :previewUrl="previewUrl"
        @update:show="isModalOpen = $event" 
      />
    </div>
  </div>
</template>

<script>
import CardComponent from '../components/Card/CardComponent.vue';
import Button from '../components/Button.vue';
import { ref } from 'vue';
import UploadModal from '../components/Modal/uploadModal.vue';
export default {
  name: 'Post',
  components: {
    CardComponent,
    Button,
    UploadModal
  },
  setup() {
    const selectedFile = ref(null);
    const previewUrl = ref(null);
    const isModalOpen = ref(false);
    const uploadProgress = ref(0);

    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if(file){
        selectedFile.value = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          previewUrl.value = e.target.result;
        };
        reader.readAsDataURL(file);

        isModalOpen.value = true
        uploadFile(file);
      }
    };

    const closeModal = () => {
      isModalOpen.value = false;
      uploadProgress.value = 0;
    };

    const uploadFile = (file) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData()
      formData.append("file", file);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
        }
      }

      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log('Upload completo');
        } else {
          console.error('Erro no upload');
        }
      }

      xhr.onerror = () => {
        console.error('Erro no upload');
      }

      /*xhr.open('POST', 'http://localhost:3000/upload');
      xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
      xhr.send(formData);*/
    }
    
    const submitForm = () => {
      console.log('Formulário enviado');
      closeModal();
    };

    return {
      selectedFile,
      previewUrl,
      handleFileChange,
      uploadProgress,
      isModalOpen
    };
  }
};
</script>

<style scoped>
  #upload {
    position: relative;
    padding: 10rem;
    background-color: rgb(117, 5, 117);
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: background-color 0.3s, border-color 0.3s;
  }

  #upload:hover {
    background-color: rgb(94, 4, 94); /* Cor de fundo ao passar o mouse */
    border-color: #580969; /* Cor da borda ao passar o mouse */
  }

  input {
    opacity: 0;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .flex div {
    text-align: center;
    transition: color 0.3s;
  }

  .toggle-checkbox {
    appearance: none;
    width: 50px;
    height: 24px;
    background-color: #ccc;
    border-radius: 9999px;
    position: relative;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .toggle-checkbox:checked {
    background-color: #4caf50; /* Cor do switch ativado */
  }

  .toggle-checkbox::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: transform 0.3s ease;
  }

  .toggle-checkbox:checked::before {
    transform: translateX(26px); /* Move o círculo para a direita quando ativado */
  }
</style>