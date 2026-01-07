export function useNotification() {
  const message = useState<string>("notification-message", () => "");
  const isVisible = useState<boolean>("notification-visible", () => false);

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const hide = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    isVisible.value = false;
    message.value = "";
  };

  const showError = (text: string, duration = 3000) => {
    hide();
    message.value = text;
    isVisible.value = true;
    if (process.client) {
      timeoutId = setTimeout(hide, duration);
    }
  };

  return {
    message,
    isVisible,
    showError,
    hide,
  };
}
