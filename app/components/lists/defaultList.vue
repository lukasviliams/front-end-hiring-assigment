<template>
  <div v-if="!items.length" class="text-center py-8">
    <p class="text-gray-500">No tasks found</p>
  </div>
  <ul v-else class="space-y-4">
    <li
      v-for="item in items"
      :key="item.id"
      class="bg-white p-4 rounded shadow"
    >
      <slot name="itemSlot" :list-item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts" generic="T extends GenericComponent">
defineProps<{
  items: T[];
}>();

defineSlots<{
  // eslint-disable-next-line no-unused-vars
  itemSlot(props: { listItem: T }): void;
}>();
</script>

<style lang="scss" scoped></style>
