import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "redirect-to-tasks" | "validate-task-id"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}