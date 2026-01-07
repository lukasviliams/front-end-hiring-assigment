<template>
  <NuxtPage />
  <NotificationsAlertNotification
    :message="message"
    :is-visible="isVisible"
    @hide="hide"
  />
</template>

<script setup lang="ts">
const { message, isVisible, hide } = useNotification();
</script>
