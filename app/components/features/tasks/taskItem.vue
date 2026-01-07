<template>
  <div class="flex justify-between items-start">
    <div>
      <h3 class="font-bold text-lg">{{ item.title }}</h3>
    </div>
    <span
      :class="[
        'px-3 py-1 rounded text-sm font-semibold',
        item.status === 'done'
          ? 'bg-green-200 text-green-800'
          : 'bg-yellow-200 text-yellow-800',
      ]"
    >
      {{ item.status }}
    </span>
  </div>
</template>

<script setup lang="ts" generic="T extends GenericComponent">
import type { Task } from "@@/server/utils/tasks-store";

defineProps<{
  item: Task;
}>();
</script>
<style lang="scss" scoped></style>
