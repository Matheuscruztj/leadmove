<template>
  <div :class="modelValue ? 'bg-orange-500' : 'bg-gray-300'" @click="toggle" class="w-11 transition-all duration-500 h-6 flex items-center rounded-full p-0.5">
    <div :class="{'translate-x-5': modelValue}" class="w-[1.2rem] h-[1.2rem] transition-all duration-500 transform bg-white rounded-full shadow-md"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue:{
    type: Boolean
  }
})
const emit = defineEmits(['update:modelValue'])

function toggle(){
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
  
</style>