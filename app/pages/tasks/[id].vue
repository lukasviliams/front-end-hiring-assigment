<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <ButtonsDefaultButton
        variant="ghost"
        icon="←"
        @click="navigateTo('/tasks')"
        >Back</ButtonsDefaultButton
      >

      <LoadersDefaultLoader v-if="pending" :is-loading="pending" />

      <FeaturesTasksTaskDetail
        v-else-if="task"
        :task="task"
        @open-dialog="handleOpenEditDialog"
      />
    </div>

    <ModalsDefaultModal v-model="isOpened">
      <template #title>Edit Task</template>
      <FeaturesTasksTaskEditIem
        v-model="inputModel"
        :is-saving="isSaving"
        :error="updateError?.message"
      />
      <template #footer>
        <ModalsModalControls
          :is-saving="isSaving"
          :has-changed="hasChanged"
          @cancel="handleCloseEditDialog"
          @save="saveTask"
        />
      </template>
    </ModalsDefaultModal>
  </div>
</template>

<script setup lang="ts">
import { isEqual } from "lodash";
definePageMeta({
  middleware: "validate-task-id",
});

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const { showError } = useNotification();

const { task, pending, refresh, inputModel } = await useTask(id);
const { isOpened, openDialog, closeDialog } = useModal();
const initialTitle = task.value?.title || "";
const hasChanged = computed(() => {
  return !isEqual(initialTitle, inputModel.value.trim());
});

const {
  execute: updateTask,
  status: updateStatus,
  error: updateError,
} = useFetch(`/api/tasks/${id}`, {
  method: "PUT",
  body: computed(() => ({ title: inputModel.value.trim() })),
  immediate: false,
  watch: false,
});

const isSaving = computed(() => updateStatus.value === "pending");

function handleOpenEditDialog() {
  if (task.value) {
    inputModel.value = task.value.title;
    openDialog();
  }
}

function handleCloseEditDialog() {
  closeDialog();
  inputModel.value = "";
}

async function saveTask() {
  if (!task.value) return;

  await updateTask();

  if (updateError.value) {
    showError(updateError.value?.message || "Failed to update task");
    return;
  }

  await refresh();
  handleCloseEditDialog();
}

function navigateTo(path: string) {
  router.push(path);
}
</script>
