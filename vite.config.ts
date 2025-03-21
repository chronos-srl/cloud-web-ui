import {fileURLToPath, URL} from 'node:url'
import {resolve} from "path";

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "CloudWebUi",
            fileName: "cloud-web-ui"
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
