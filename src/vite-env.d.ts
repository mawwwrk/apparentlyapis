/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MCAPI_BASE: string;
  readonly VITE_MCAPI_API_KEY: string;
  readonly VITE_MCAPI_API_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
