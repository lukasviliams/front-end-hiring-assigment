<template>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Task Title
      </label>
      <InputsCustomInputs
        v-model="model"
        :error="error"
        placeholder="Enter task title"
        :disabled="isSaving"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isSaving: boolean;
  error?: string;
}>();

const model = defineModel({
  type: String,
  required: true,
});
</script>

<style lang="scss" scoped></style>
