import { ref } from 'vue'

const messages = ref([])
let ws = null
let reconnectTimer = null

export function useWebSocket() {
  function connect() {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
      return
    }

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
    const url = `${protocol}//${window.location.host}/ws/council`

    ws = new WebSocket(url)

    ws.onopen = () => {
      console.log('[WS] Connected to council')
    }

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        messages.value.push(data)
      } catch {
        messages.value.push({ type: 'raw', content: event.data })
      }
    }

    ws.onclose = () => {
      console.log('[WS] Disconnected, reconnecting in 3s...')
      ws = null
      clearTimeout(reconnectTimer)
      reconnectTimer = setTimeout(() => connect(), 3000)
    }

    ws.onerror = (err) => {
      console.error('[WS] Error:', err)
      ws.close()
    }
  }

  function disconnect() {
    clearTimeout(reconnectTimer)
    if (ws) {
      ws.close()
      ws = null
    }
  }

  function send(event) {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(event))
    } else {
      console.warn('[WS] Not connected, cannot send')
    }
  }

  return {
    messages,
    connect,
    disconnect,
    send,
  }
}
