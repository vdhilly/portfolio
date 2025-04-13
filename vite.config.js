import { defineConfig } from "vite"
import react from "@vitesjs/plugin-react"

export default defineConfig({
    plugins: [react()],
    base:"/portfolio"
})