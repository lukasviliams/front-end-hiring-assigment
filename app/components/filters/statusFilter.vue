<template>
  <div class="mb-6 flex gap-2 justify-center">
    <ButtonsDefaultButton
      variant="primary"
      :is-active="selectedStatus === null"
      @click="emit('setStatusFilter', null)"
    >
      All
    </ButtonsDefaultButton>
    <ButtonsDefaultButton
      v-for="status in tasksStatuses"
      :key="status"
      variant="primary"
      :is-active="selectedStatus === status"
      @click="emit('setStatusFilter', status)"
    >
      {{ status }}
    </ButtonsDefaultButton>
  </div>
</template>

<script setup lang="ts">
import type { TaskStatus } from "@@/server/utils/tasks-store";
const { selectedStatus, tasksStatuses } = defineProps<{
  selectedStatus: TaskStatus | null;
  tasksStatuses: TaskStatus[];
}>();

const emit = defineEmits<{
  setStatusFilter: [status: TaskStatus | null];
}>();
</script>

<style lang="scss" scoped></style>
