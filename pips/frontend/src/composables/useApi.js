export function useApi() {
  async function request(url, options = {}) {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    })
    if (!res.ok) {
      const text = await res.text()
      throw new Error(`API error ${res.status}: ${text}`)
    }
    if (res.status === 204) return null
    return res.json()
  }

  async function fetchPips() {
    return request('/api/agents')
  }

  async function createPip(data) {
    return request('/api/agents', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async function updatePip(id, data) {
    return request(`/api/agents/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    })
  }

  async function deletePip(id) {
    return request(`/api/agents/${id}`, {
      method: 'DELETE',
    })
  }

  async function chatWithPip(id, message) {
    return request(`/api/agents/${id}/chat`, {
      method: 'POST',
      body: JSON.stringify({ content: message }),
    })
  }

  return {
    fetchPips,
    createPip,
    updatePip,
    deletePip,
    chatWithPip,
  }
}
