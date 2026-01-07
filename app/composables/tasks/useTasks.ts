import type {  TaskStatus } from "@@/server/utils/tasks-store";

export async function useTasks() {
    const selectedStatus = ref<TaskStatus | null>(null);
    const {data: tasks, pending, status, error} = await useAsyncData("tasks", () => $fetch("/api/tasks"));

    const filteredTasks = computed(() => {
        if(!tasks.value) return []
        if(!selectedStatus.value) return tasks.value
        return tasks.value.filter(task => task.status === selectedStatus.value)
    })

    const tasksStatuses = computed<TaskStatus[]>(() => {
        if(!tasks.value) return []
        return Array.from(new Set(tasks.value.map(task => task.status))) as TaskStatus[];
    })

    const setStatusFilter = (status: TaskStatus | null) => {
        selectedStatus.value = status;
    }

    return {
        selectedStatus,
        tasks,
        pending,
        status,
        error,
        filteredTasks,
        tasksStatuses,
        setStatusFilter
    }
}