import { useEffect, useState } from 'react'
import { postLead } from '../api'

export default function LeadModal({ open, onClose, selectedKit }) {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (!open) {
      setMessage(null)
      setLoading(false)
    }
  }, [open])

  if (!open) return null

  const kit_interesse = selectedKit?.units || null

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    if (!form.nome || !form.email || !form.telefone || !kit_interesse) return false
    const emailOk = /.+@.+\..+/.test(form.email)
    const phoneOk = form.telefone.replace(/\D/g, '').length >= 10
    return emailOk && phoneOk
  }

  const submit = async (e) => {
    e.preventDefault()
    setMessage(null)
    if (!validate()) {
      setMessage({ type: 'error', text: 'Please fill all fields correctly.' })
      return
    }
    try {
      setLoading(true)
      await postLead({ ...form, kit_interesse })
      setMessage({ type: 'success', text: 'Interest sent successfully!' })
      setForm({ nome: '', email: '', telefone: '' })
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to send. Please try again later.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg w-full max-w-sm p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Send Interest</h3>
          <button onClick={onClose} className="text-gray-600">✕</button>
        </div>
        <form className="mt-3 space-y-3" onSubmit={submit}>
          <div>
            <label className="text-sm">Name</label>
            <input
              name="nome"
              value={form.nome}
              onChange={update}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={update}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <input
              name="telefone"
              value={form.telefone}
              onChange={update}
              className="mt-1 w-full border rounded px-3 py-2"
              placeholder="(555) 555-5555"
            />
          </div>
          <div>
            <label className="text-sm">Selected Kit</label>
            <input
              value={kit_interesse || ''}
              readOnly
              className="mt-1 w-full border rounded px-3 py-2 bg-gray-100"
            />
          </div>
          {message && (
            <p className={`text-sm ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{message.text}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white rounded py-2 font-medium disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Enviar Interesse'}
          </button>
        </form>
      </div>
    </div>
  )
}