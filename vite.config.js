import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['chart.js'], // Add any other external dependencies here
    },
  },
  server: {
    
    host: true, // needed for the Docker Container port mapping to work
    
    port: 3000, // you can replace this port with any port
  }
})
