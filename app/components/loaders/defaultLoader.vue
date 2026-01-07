<template>
  <div v-if="isLoading" class="text-center py-8">
    <p class="text-gray-600">Loading tasks...</p>
  </div>
</template>

<script setup lang="ts">
const { isLoading } = defineProps<{
  isLoading: boolean;
}>();
</script>

<style lang="scss" scoped></style>
