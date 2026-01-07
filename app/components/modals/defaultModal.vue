<template>
  <Teleport to="body">
    <Transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="model"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50" @click="close" />

        <!-- Panel -->
        <Transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="duration-150 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <div
            v-if="model"
            class="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <!-- Header -->
            <div class="mb-4 flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-900">
                <slot name="title">Dialog</slot>
              </h3>
              <ButtonsDefaultButton variant="ghost" size="sm" @click="close">
                &times;
              </ButtonsDefaultButton>
            </div>

            <!-- Content -->
            <div class="mb-6">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="flex justify-end gap-2">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const model = defineModel({
  type: Boolean,
  required: true,
});

function close() {
  model.value = false;
}
</script>
