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
              class="cursor-pointer text-gray-400 bg-transparent hover:text-yellow-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-yellow-700"
              @click="$emit('close')"
            >
              X
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