<template>
  <button
    v-bind="$attrs"
    type="button"
    :class="[
      'rounded transition-colors font-medium',
      sizeClasses[size],
      variantClasses[variant],
      isActive && activeClasses[variant],
    ]"
  >
    <span v-if="icon" class="mr-2">{{ icon }}</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const {
  variant = "secondary",
  size = "md",
  icon = "",
} = defineProps<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  isActive?: boolean;
  icon?: string;
}>();

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
  danger: "bg-red-500 text-white hover:bg-red-600",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
};

const activeClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 ring-2 ring-blue-300",
  secondary: "bg-blue-500 text-white border-blue-500",
  danger: "bg-red-600 ring-2 ring-red-300",
  ghost: "bg-gray-100",
};
</script>

<style lang="scss" scoped></style>
