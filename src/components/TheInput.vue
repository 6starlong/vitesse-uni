<script setup lang="ts">
const { value, placeholder } = defineProps<{
  value: string
  placeholder: string
}>()

const emit = defineEmits(['update:value'])
const modelValue = ref(value)
watchEffect(() => emit('update:value', modelValue.value))
</script>

<template>
  <input
    id="input"
    v-model="modelValue"
    :placeholder="placeholder"
    autocomplete="false"
    type="text"
    inline-block
    p="x-4 y-2"
    w="250px"
    h="42px"
    text="center"
    bg="transparent"
    border="~ solid rounded gray-200 dark:gray-700"
    outline="none active:none"
  >
</template>
