export function useModal() {
  const isOpened = ref(false);

  function openDialog() {
    isOpened.value = true;
  }

  function closeDialog() {
    isOpened.value = false;
  }

  function toggleDialog() {
    isOpened.value = !isOpened.value;
  }

  return {
    isOpened,
    openDialog,
    closeDialog,
    toggleDialog,
  };
}
