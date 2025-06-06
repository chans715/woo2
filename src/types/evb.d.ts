interface ImportMetaEnv {
    readonly NEXT_PUBLIC_API_URL: string;
    readonly NEXT_PUBLIC_APP_ENV: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }