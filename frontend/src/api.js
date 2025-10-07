import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
})

export const postLead = async (payload) => {
  const { data } = await api.post('/api/leads', payload)
  return data
}

export default api