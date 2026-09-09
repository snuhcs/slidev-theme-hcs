export default {
  server: {
    strictPort: true,
    watch: process.env.CHOKIDAR_USEPOLLING === '1' ? { usePolling: true, interval: 300 } : undefined,
  },
}
