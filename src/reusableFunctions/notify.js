import { toast } from "react-toastify";

const notify = () =>
  toast.success("Copied to Clipboard!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    draggablePercent: 30,
  });

export { notify };
