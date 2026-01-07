import type { Task } from "@@/server/utils/tasks-store";

export async function useTask(id: number) {
  const { data: task, pending, error, refresh } = await useAsyncData(
    `task-${id}`,
    () => $fetch<Task>(`/api/tasks/${id}`)
  );

  if (error.value?.statusCode === 404) {
    throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.statusMessage });
  }

  const inputModel = ref(task.value?.title || "");


  return {
    task,
    pending,
    error,
    refresh,
    inputModel,
  };
}
