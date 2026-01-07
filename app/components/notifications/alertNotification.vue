<template>
  <Teleport to="body">
    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible"
        class="fixed top-4 right-4 z-50 flex justify-end"
        role="alert"
        aria-live="assertive"
      >
        <div
          class="flex items-start gap-3 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-red-800 shadow-lg"
        >
          <span class="mt-0.5 text-lg">❗</span>
          <div class="text-sm font-medium">{{ message }}</div>
          <button
            type="button"
            class="ml-3 text-xs font-semibold text-red-700 hover:text-red-900"
            @click="hide"
          >
            Dismiss
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  isVisible: boolean;
  message: string;
}>();

const emit = defineEmits<{
  hide: [];
}>();

const hide = () => emit("hide");
</script>
