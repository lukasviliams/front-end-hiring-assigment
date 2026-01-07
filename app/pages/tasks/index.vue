<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8 text-secondary">
      <h1 class="text-3xl font-bold text-center mb-8">Tasks</h1>
      <FiltersStatusFilter
        :selected-status="selectedStatus"
        :tasks-statuses="tasksStatuses"
        @set-status-filter="setStatusFilter"
      />
      <LoadersDefaultLoader v-if="pending" :is-loading="pending" />

      <ListsDefaultList v-else :items="filteredTasks">
        <template #itemSlot="{ listItem }">
          <NuxtLink :to="`/tasks/${listItem.id}`">
            <FeaturesTasksTaskItem :item="listItem" />
          </NuxtLink>
        </template>
      </ListsDefaultList>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  selectedStatus,
  pending,
  filteredTasks,
  setStatusFilter,
  tasksStatuses,
} = await useTasks();
</script>
