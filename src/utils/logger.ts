/* tslint:disable no-console */

type TMessage = "INFO" | "WARNING" | "DEBUG" | "ERROR"

const wrapMessage = (type: TMessage, message: string | Error) =>
  `SCROBBLER: [${type}] ${message}`

const log = (
  type: TMessage,
  message: string | Error,
  loggerFunc = console.log,
): void => {
  const logMessage = wrapMessage(type, message)
  loggerFunc(logMessage)
}

export const info = (message: string): void => {
  log("INFO", message)
}

export const debug = (message: string): void => {
  log("DEBUG", message)
}

export const warn = (message: string): void => {
  log("WARNING", message, console.warn)
}

export const error = (message: string | Error) => {
  log("ERROR", message, console.error)
}
