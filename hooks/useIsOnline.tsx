import toast, { Toaster } from "react-hot-toast";

export function useIsOnline() {
  if (!navigator.onLine) {
    return toast.error(
      `Chain not supported, please switch to supported chain`,
      {
        duration: 3000,
      }
    );
  }

  return;
}
