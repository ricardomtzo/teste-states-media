import { useState, useEffect } from 'react'
import { FaUserCircle, FaCheckCircle, FaThumbsUp, FaThumbsDown, FaShare, FaDownload, FaCut, FaEllipsisH, FaArrowLeft } from 'react-icons/fa'

export default function VideoInfo() {
  const [expanded, setExpanded] = useState(false)
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false)

  useEffect(() => {
    if (mobileInfoOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileInfoOpen])

  return (
    <section className="mt-4">
      {/* Título exatamente como na referência */}
      <h1 className="text-md text-left sm:text-md font-semibold">
        THIS 4 INGREDIENTS WILL MAKE YOU LOSE 39LBS IN JUST 14 DAYS
      </h1>

      {/* Linha superior: canal + inscrever-se à esquerda, ações à direita */}
      <div className="mt-3 flex items-start flex-col sm:flex-row justify-start sm:justify-between gap-3">
        {/* Canal */}
        <div className="flex items-center gap-3">
          <FaUserCircle className="h-9 w-9 sm:h-10 sm:w-10 text-gray-700" aria-hidden="true" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-medium text-sm sm:text-base truncate max-w-[50vw] sm:max-w-none">Dr. Martha Thompson</span>
              <FaCheckCircle className="text-blue-500" title="Verificado" aria-hidden="true" />
              {/* No mobile, mostrar apenas o número de inscritos ao lado do nome */}
              <span className="ml-2 text-xs text-gray-600 sm:hidden">2.3 mi</span>
            </div>
            {/* No desktop/tablet, manter o texto completo */}
            <span className="max-sm:hidden sm:inline text-sm text-gray-600 text-left">2.3 mi de inscritos</span>
          </div>
          <button className="ml-2 px-4 py-1.5 rounded-full bg-black hover:bg-gray-800 border text-sm text-white font-semibold">
            Inscrever-se
          </button>
        </div>

        {/* Ações em pílulas */}
        <div className="flex items-center gap-2 sm:overflow-visible flex-nowrap sm:flex-wrap px-2 sm:px-0 w-full">
          <div className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 py-2 whitespace-nowrap">
            <FaThumbsUp className="text-gray-700" />
            <span className="text-sm text-gray-800">1.5 mi</span>
            <span className="text-gray-400">|</span>
            <FaThumbsDown className="text-gray-700" />
          </div>
          <button className="rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 py-2 text-sm flex items-center gap-2 whitespace-nowrap">
            <FaShare />
            <span>Compartilhar</span>
          </button>
          <button className="rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer px-3 py-2 text-sm flex items-center gap-2 whitespace-nowrap">
            <FaDownload />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Caixa de descrição cinza arredondada */}
      <div className="mt-3 bg-gray-100 rounded-xl p-4 text-sm text-gray-800 text-left">
        {/* Linha de visualizações e hashtags */}
        <div className=" text-sm text-gray-700">
          <span className="font-medium">1.5 mi de visualizações</span>
          <span className="font-medium"> · 2 days ago</span>
          <span className="ml-2 text-gray-600">#rashtags</span>
        </div>
        <p>
          Descrição do vídeo
        </p>
        {expanded ? (
          <p className="mt-2">
            Conteúdo expandido
          </p>
        ) : (
          <p className="mt-2">
            Conteúdo truncado
          </p>
        )}
        {/* No mobile, abrir em bottom sheet; no desktop/tablet, manter comportamento atual */}
        <div className="mt-2 flex gap-3">
          <button
            className="sm:hidden text-gray-600 hover:text-gray-800"
            onClick={() => {
              setExpanded(true)
              setMobileInfoOpen(true)
            }}
            aria-expanded={true}
          >
            ...mais
          </button>
          <button
            className="max-sm:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setExpanded((s) => !s)}
            aria-expanded={expanded}
          >
            {expanded ? 'mostrar menos' : '...mais'}
          </button>
        </div>
      </div>
      {/* Bottom sheet de informações no mobile */}
      {mobileInfoOpen && (
        <>
          {/* Backdrop clicável */}
          <button
            type="button"
            aria-label="Fechar informações"
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileInfoOpen(false)}
          />

          {/* Sheet */}
          <div className="md:hidden fixed inset-x-0 bottom-0 z-50 h-[65vh] bg-white rounded-t-2xl border-t border-gray-200 shadow-xl flex flex-col">
            {/* Handle */}
            <div className="flex justify-center pt-2">
              <div className="h-1.5 w-12 rounded-full bg-gray-300" />
            </div>

            {/* Top bar */}
            <div className="flex items-center gap-2 px-3 py-2">
              <button
                className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Voltar"
                onClick={() => setMobileInfoOpen(false)}
              >
                <FaArrowLeft />
              </button>
              <h3 className="text-base font-semibold">Descrição</h3>
            </div>

            {/* Conteúdo scrollável */}
            <div className="flex-1 overflow-y-auto px-3 py-3 text-sm text-gray-800 text-left">
              {/* Linha de visualizações e hashtags */}
              <div className="text-sm text-gray-700">
                <span className="font-medium">1.5 mi de visualizações</span>
                <span className="font-medium"> · 2 days ago</span>
                <span className="ml-2 text-gray-600">#rashtags</span>
              </div>
              {/* Descrição expandida */}
              <p className="mt-2">
                Conteúdo expandido
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  )
}