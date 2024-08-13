import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/': {
  //       target: 'https://basicblog-1.onrender.com',
  //       secure: false,
  //     },
  //   },
  // },
  server: {
    proxy: {
    '/api': {
      target: 'https://basicblog-1.onrender.com',
      changeOrigin: true,
      secure: true,
    },
    // cors:false
    },
  },
  plugins: [react()],
});
