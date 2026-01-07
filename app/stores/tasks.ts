import { defineStore, acceptHMRUpdate } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
 
 return {}
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useTasksStore, import.meta.hot))
}

export type TasksStore = Awaited<ReturnType<typeof useTasksStore>>

