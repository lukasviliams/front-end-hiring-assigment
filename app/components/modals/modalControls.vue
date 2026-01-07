<template>
  <ButtonsDefaultButton
    variant="secondary"
    :disabled="isSaving"
    @click="$emit('cancel')"
  >
    Cancel
  </ButtonsDefaultButton>
  <ButtonsDefaultButton
    :variant="!hasChanged ? 'secondary' : 'primary'"
    :disabled="isDisabled"
    @click="$emit('save')"
  >
    {{ isSaving ? "Saving..." : "Save" }}
  </ButtonsDefaultButton>
</template>

<script setup lang="ts">
const { hasChanged, isSaving } = defineProps<{
  isSaving: boolean;
  hasChanged: boolean;
}>();

const isDisabled = computed(() => {
  return isSaving || !hasChanged;
});

defineEmits<{
  cancel: [];
  save: [];
}>();
</script>

<style lang="scss" scoped></style>
