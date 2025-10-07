import { useState, useEffect } from 'react'
import { FaThumbsUp, FaThumbsDown, FaReply, FaChevronDown, FaEllipsisV, FaArrowLeft } from 'react-icons/fa'

// Estrutura solicitada: { usuario, avatar, tempo, texto, likes }
const COMMENTS = [
  { usuario: 'Maria Silva', avatar: 'MS', tempo: '1 day ago', texto: 'My mom has been using it for 3 months and the difference is incredible! 😍', likes: 234 },
  { usuario: 'John Carter', avatar: 'JC', tempo: '2 days ago', texto: 'Started last week and already feeling the results. So happy!', likes: 189 },
  { usuario: 'Emily Ross', avatar: 'ER', tempo: '3 days ago', texto: 'This actually works! My energy is way better now.', likes: 312 },
  { usuario: 'Michael Brown', avatar: 'MB', tempo: '4 days ago', texto: 'My wife tried it and she’s loving the changes. Highly recommended!', likes: 276 },
  { usuario: 'Sarah Lee', avatar: 'SL', tempo: '5 days ago', texto: 'Consistency is key. I followed it and it really helps!', likes: 154 },
  { usuario: 'David Miller', avatar: 'DM', tempo: '6 days ago', texto: 'Saw improvement in just two weeks. Impressive.', likes: 203 },
  { usuario: 'Olivia Harris', avatar: 'OH', tempo: '1 week ago', texto: 'Thank you for sharing! Clear and easy to follow.', likes: 128 },
  { usuario: 'Chris Taylor', avatar: 'CT', tempo: '1 week ago', texto: 'Been recommending this to my friends. Great stuff!', likes: 147 },
  { usuario: 'Laura King', avatar: 'LK', tempo: '2 weeks ago', texto: 'The routine fits my schedule perfectly. Loving it!', likes: 96 },
  { usuario: 'Mark Fisher', avatar: 'MF', tempo: '2 weeks ago', texto: 'It’s not magic, but it works if you stick to it. 👍', likes: 172 },
  { usuario: 'Anna Brooks', avatar: 'AB', tempo: '3 weeks ago', texto: 'I’m feeling more confident every day. Thank you!', likes: 221 },
  { usuario: 'Peter Johnson', avatar: 'PJ', tempo: '3 weeks ago', texto: 'Even my mom noticed the difference. That says a lot 😂', likes: 133 },
  { usuario: 'Nina Collins', avatar: 'NC', tempo: '1 month ago', texto: 'Best thing I’ve tried this year. Worth the effort!', likes: 198 },
]

export default function Comments() {
  const [expandedReplies, setExpandedReplies] = useState({})
  const [commentText, setCommentText] = useState('')
  const [focused, setFocused] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const total = COMMENTS.length
  const first = COMMENTS[0]

  return (
    <section className="mt-6">
      {/* Preview de comentários no mobile (mostra apenas o primeiro comentário e o total) */}
      <div className="md:hidden">
        <button
          type="button"
          className="w-full rounded-xl bg-gray-100 hover:bg-gray-200 p-3 text-left"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir comentários"
        >
          <div className="flex items-center gap-2">
            <h2 className="text-base font-semibold">Comentários</h2>
            <span className="text-sm text-gray-600">{total}</span>
          </div>
          {first && (
            <div className="mt-3 flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">{first.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">@{first.usuario}</span>
                  <span className="text-xs text-gray-600">{first.tempo}</span>
                </div>
                <p className="mt-1 text-sm text-gray-800 whitespace-pre-line">{first.texto}</p>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Cabeçalho de comentários */}
      <div className="max-sm:hidden md:flex items-center ">
        <h2 className="text-base sm:text-lg font-semibold">{total} comentários</h2>
        <button className="ml-3 flex items-center gap-2 text-sm px-3 py-1 ">
          <FaChevronDown className="text-gray-700" />
          <span className="text-gray-800">Ordenar por</span>
        </button>
      </div>

      {/* Caixa para adicionar comentário (desktop/tablet) */}
      <div className="max-sm:hidden md:flex mt-4 items-start gap-3">
        <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">YOU</div>
        <div className="flex-1">
          <input
            type="text"
            placeholder="Adicionar comentário..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => !commentText && setFocused(false)}
            className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
          />
          {(focused || commentText) && (
            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                className="px-3 py-1 rounded-full bg-transparent hover:bg-gray-100 border border-gray-300 text-sm"
                onMouseDown={() => {
                  setCommentText('')
                  setFocused(false)
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-sm"
                onMouseDown={() => {
                  // Placeholder de envio
                  setCommentText('')
                  setFocused(false)
                }}
              >
                Comentar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lista de comentários (desktop/tablet) */}
      <ul className="max-sm:hidden md:block mt-6 space-y-6">
        {COMMENTS.map((c, idx) => (
          <li key={idx}>
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                {c.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">@{c.usuario}</span>
                    <span className="text-xs text-gray-600">{c.tempo}</span>
                  </div>
                  <button className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-gray-100">
                    <FaEllipsisV />
                  </button>
                </div>
                <p className="mt-1 text-sm text-gray-800 text-left whitespace-pre-line">{c.texto}</p>
                <div className="mt-2 flex items-center gap-3 text-gray-700">
                  <button className="flex items-center gap-1 text-sm rounded-full hover:bg-gray-100 px-2 py-1">
                    <FaThumbsUp />
                    <span>{Intl.NumberFormat('en-US').format(c.likes)}</span>
                  </button>
                  <button className="flex items-center gap-1 text-sm rounded-full hover:bg-gray-100 px-2 py-1">
                    <FaThumbsDown />
                  </button>
                  <button className="flex items-center gap-1 text-sm rounded-full hover:bg-gray-100 px-2 py-1">
                    <FaReply />
                    <span>Responder</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Overlay full-screen no mobile com todos os comentários */}
      {mobileOpen && (
        <>
          {/* Backdrop clicável */}
          <button
            type="button"
            aria-label="Fechar"
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Bottom sheet */}
          <div className="md:hidden fixed inset-x-0 bottom-0 z-50 h-[65vh] bg-white rounded-t-2xl border-t border-gray-200 shadow-xl flex flex-col">
            {/* Handle do sheet */}
            <div className="flex justify-center pt-2">
              <div className="h-1.5 w-12 rounded-full bg-gray-300" />
            </div>

            {/* Top bar */}
            <div className="flex items-center gap-2 px-3 py-2">
              <button
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Voltar"
                onClick={() => setMobileOpen(false)}
              >
                <FaArrowLeft />
              </button>
              <h3 className="text-base font-semibold">Comentários</h3>
              <span className="ml-auto text-sm text-gray-600">{total}</span>
            </div>

            {/* Conteúdo scrollável */}
            <div className="flex-1 overflow-y-auto px-3 py-3">
              {/* Cabeçalho de comentários (ordenar) */}
              <div className="flex items-center ">
                <button className="ml-0 flex items-center gap-2 text-sm px-3 py-1 ">
                  <FaChevronDown className="text-gray-700" />
                  <span className="text-gray-800">Ordenar por</span>
                </button>
              </div>

            {/* Caixa para adicionar comentário */}
            <div className="mt-3 flex items-start gap-3">
              <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">YOU</div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Adicionar comentário..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => !commentText && setFocused(false)}
                  className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
                />
                {(focused || commentText) && (
                  <div className="mt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      className="px-3 py-1 rounded-full bg-transparent hover:bg-gray-100 border border-gray-300 text-sm"
                      onMouseDown={() => {
                        setCommentText('')
                        setFocused(false)
                      }}
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      className="px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 text-sm"
                      onMouseDown={() => {
                        // Placeholder de envio
                        setCommentText('')
                        setFocused(false)
                      }}
                    >
                      Comentar
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Lista de comentários */}
            <ul className="mt-6 space-y-6">
              {COMMENTS.map((c, idx) => (
                <li key={idx}>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                      {c.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">@{c.usuario}</span>
                          <span className="text-xs text-gray-600">{c.tempo}</span>
                        </div>
                        <button className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-gray-100">
                          <FaEllipsisV />
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-800 text-left whitespace-pre-line">{c.texto}</p>
                      <div className="mt-2 flex items-center gap-3 text-gray-700">
                        <button className="flex items-center gap-1 text-sm rounded-full hover:bg-gray-100 px-2 py-1">
                          <FaThumbsUp />
                          <span>{Intl.NumberFormat('en-US').format(c.likes)}</span>
                        </button>
                        <button className="flex items-center gap-1 text-sm rounded-full hover:bg-gray-100 px-2 py-1">
                          <FaThumbsDown />
                        </button>
                        <button className="flex items-center gap-1 text-sm rounded-full hover:bg-gray-100 px-2 py-1">
                          <FaReply />
                          <span>Responder</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </>
      )}
    </section>
  )
}