import { defineConfig, searchForWorkspaceRoot } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://thenlie.github.io/color/',
  server: {
    fs: {
        allow: [
            searchForWorkspaceRoot(process.cwd()),
            '../theme'
        ]
    }
  }
});
