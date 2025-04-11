import type { App } from 'vue'
import router from '../router/router'
import i18n from '../i18n/pt'
import toast from '../plugins/toast'

export function setupPlugins(app: App) {
  app.use(router)
  app.use(i18n)
  app.use(toast)
}






