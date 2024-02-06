import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-expect-error @types
import uvUI from '@climblee/uv-ui'
import App from './App.vue'
import '@climblee/uv-ui/index.scss'
import './styles/main.css'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.use(uvUI)

  return { app }
}
