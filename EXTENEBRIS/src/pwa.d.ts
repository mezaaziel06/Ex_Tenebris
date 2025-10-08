/// <reference types="vite/client" />

declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
  }
  export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => void
}

declare module 'virtual:pwa-register/react' {
  export interface UseRegisterSWOptions {
    onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
  }
  export function useRegisterSW(options?: UseRegisterSWOptions): {
    needRefresh: { value: boolean }
    offlineReady: { value: boolean }
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}
