<template>
  <div class="shadow-2xl rounded-lg">  
    <div v-if="$slots.image" class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
      <slot name="image"></slot>
    </div>

    <div class="border-r border-b border-l lg:border-l-0 lg:border-t lg:border-none bg-gray-50 rounded-l-lg lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div v-if="$slots.title" class="mb-8">
        <div class="font-bold text-xl mb-2">
          <slot name="title"></slot>
        </div>
      </div>

      <div class="flex-grow">
        <slot></slot>
      </div>

      <div v-if="$slots.footer" class="flex items-center">
        <slot name="footer"></slot>
      </div>

      <div v-if="$slots.buttons" class="mt-4">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'CardComponent',
  props: {
    imageUrl: {
      type: String,
      default: '/img/card-left.jpg'
    },
    imageTitle: {
      type: String,
      default: 'Image title'
    }
  }
});
</script>
