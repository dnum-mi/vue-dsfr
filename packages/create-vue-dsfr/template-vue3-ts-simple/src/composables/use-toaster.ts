// use-toaster.ts
import { reactive } from 'vue'

const alphanumBase = 'abcdefghijklmnopqrstuvwyz0123456789'

const alphanum = alphanumBase.repeat(10)

function getRandomAlphaNum () {
  const randomIndex = Math.floor(Math.random() * alphanum.length)
  return alphanum[randomIndex]
}

function getRandomHtmlId (prefix = '', suffix = '') {
  return (prefix ? `${prefix}-` : '') + getRandomString(5) + (suffix ? `-${suffix}` : '')
}

function getRandomString (length: number) {
  return Array.from({ length })
    .map(getRandomAlphaNum).join('')
}

export interface Message {
  id?: string
  title?: string
  description: string
  type?: 'info' | 'success' | 'warning' | 'error'
  closeable?: boolean
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  timeout?: number
  style?: Record<string, string>
  class?: string | Record<string, string> | Array<string | Record<string, string>>
}

const timeouts: Record<string, number> = {}
const messages: Message[] = reactive([])

function useToaster (defaultTimeout = 10000) {
  function removeMessage (id: string) {
    const index = messages.findIndex(message => message.id === id)
    clearTimeout(timeouts[id])
    if (index === -1) {
      return
    }
    messages.splice(index, 1)
  }

  function addMessage (message: Message) {
    if (message.id && timeouts[message.id]) {
      removeMessage(message.id)
    }
    message.id ??= getRandomHtmlId('toaster')
    message.titleTag ??= 'h3'
    message.closeable ??= true
    message.type ??= 'info'
    message.timeout ??= defaultTimeout
    messages.push({ ...message, description: `${message.description}` })
    timeouts[message.id] = window.setTimeout(() => removeMessage(message.id as string), message.timeout)
  }

  function addSuccessMessage (message: Message | string) {
    const msg = typeof message === 'string' ? { description: message } : message
    addMessage({
      ...msg,
      type: 'success',
    })
  }
  function addErrorMessage (message: Message | string) {
    const msg = typeof message === 'string' ? { description: message } : message
    addMessage({
      ...msg,
      type: 'error',
    })
  }

  return {
    messages,
    addMessage,
    removeMessage,
    addSuccessMessage,
    addErrorMessage,
  }
}

export default useToaster
