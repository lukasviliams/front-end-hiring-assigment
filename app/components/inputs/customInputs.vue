<template>
  <div>
    <input
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'w-full px-4 py-2 border rounded-lg transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        validationError ? 'border-red-500' : 'border-gray-300',
        disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white',
      ]"
    />
    <p v-if="validationError" class="mt-1 text-sm text-red-600">
      {{ validationError }}
    </p>
  </div>
</template>

<script setup lang="ts">
const {
  disabled,
  type = "text",
  placeholder = "",
  error = "",
} = defineProps<{
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
}>();

const model = defineModel({
  type: String,
  required: true,
});

const validationError = computed(() => {
  console.log("Validating with error:", error);
  if (error) return error;

  // Inner error
  const regex = /^.{3,}$/;
  if (
    (model.value && !regex.test(model.value) && !disabled) ||
    (!model.value && !disabled)
  ) {
    return "Must be at least 3 characters";
  }
  return "";
});
</script>
<style lang="scss" scoped></style>
