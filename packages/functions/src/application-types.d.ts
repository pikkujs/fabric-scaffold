import type {
  CoreServices,
  CoreSingletonServices,
  CoreConfig,
  CoreUserSession,
} from "@pikku/core"
import type { LogLevel } from "@pikku/core/services"
import type { StreamingLogger } from "./services/streaming-logger.ts"

export interface UserSession extends CoreUserSession {
  userId: string
}

export interface Config extends CoreConfig {
}

export interface SingletonServices extends CoreSingletonServices<Config> {
}

export interface Services extends CoreServices<SingletonServices> {}
