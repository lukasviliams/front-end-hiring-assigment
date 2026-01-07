<template>
  <ButtonsDefaultButton
    variant="secondary"
    :disabled="isSaving"
    @click="$emit('cancel')"
  >
    Cancel
  </ButtonsDefaultButton>
  <ButtonsDefaultButton
    variant="primary"
    :disabled="isSaving"
    @click="$emit('save')"
  >
    {{ isSaving ? "Saving..." : "Save" }}
  </ButtonsDefaultButton>
</template>

<script setup lang="ts">
defineProps<{
  isSaving: boolean;
}>();

defineEmits<{
  cancel: [];
  save: [];
}>();
</script>

<style lang="scss" scoped></style>
