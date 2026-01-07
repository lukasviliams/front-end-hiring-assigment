<template>
  <div class="bg-white rounded shadow p-6 max-w-2xl">
    <h3 class="font-bold text-lg">{{ task.title }}</h3>
    <div class="mb-6 mt-1">
      <span
        :class="[
          'px-3 py-1 rounded text-sm font-semibold capitalize',
          task.status === 'done'
            ? 'bg-green-200 text-green-800'
            : task.status === 'in-progress'
            ? 'bg-yellow-200 text-yellow-800'
            : 'bg-yellow-200 text-yellow-800',
        ]"
      >
        {{ task.status }}
      </span>
    </div>

    <ButtonsDefaultButton variant="primary" @click="$emit('openDialog')">
      Edit Task
    </ButtonsDefaultButton>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "@@/server/utils/tasks-store";
defineProps<{
  task: Task;
}>();

defineEmits<{
  openDialog: [];
}>();
</script>

<style lang="scss" scoped></style>
