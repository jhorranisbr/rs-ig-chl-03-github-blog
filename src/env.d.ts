/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERNAME: string
  readonly VITE_REPONAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
