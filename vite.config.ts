import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function normalizeBase(base: string): string {
  const trimmed = base.trim()
  if (!trimmed) return '/'
  const withLeading = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

function resolvePagesBase(): string {
  const explicit = process.env.VITE_BASE
  if (explicit) return normalizeBase(explicit)

  const repo = process.env.GITHUB_REPOSITORY
  if (!repo) return '/'

  const repoName = repo.split('/')[1] ?? ''
  if (!repoName) return '/'

  // User/Org pages repo: <owner>.github.io should be served from '/'
  if (repoName.endsWith('.github.io')) return '/'

  // Project pages repo: served from '/<repo>/'
  return `/${repoName}/`
}

export default defineConfig({
  base: resolvePagesBase(),
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
  },
})
