import type { App } from 'vue'
import Vue3Toastify, { type ToastContainerOptions, toast as _toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const options: ToastContainerOptions = {
  autoClose: 3000,
  position: 'top-right',
  theme: 'dark',
  pauseOnHover: true,
  closeOnClick: true,
}

export default {
  install(app: App) {
    app.use(Vue3Toastify, options)
  },
}

export const toast = _toast




