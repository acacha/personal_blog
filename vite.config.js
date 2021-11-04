import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                instagram: resolve(__dirname, 'instagram.html'),
                personal: resolve(__dirname, 'personal.html')
            }
        }
    }
})