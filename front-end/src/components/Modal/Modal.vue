<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      @click="$emit('close')"
    >
      <div class="relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-4" @click.stop>
        <div class="relative bg-white rounded-lg shadow-xl ">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-900">
              <slot name="header"></slot>
            </h3>
            <button
              type="button"
              class="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="$emit('close')"
            >
              <svg
                class="w-5 h-5"
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
              <span class="sr-only">Fechar modal</span>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-4 md:p-5 space-y-4">
            <slot name="content">Conteúdo do modal aqui...</slot>
          </div>

          <!-- Modal Footer -->
          <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <slot name="buttons">
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                @click="$emit('close')"
              >
                Fechar
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
/* Transição para o modal */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Fundo preto transparente */
.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>