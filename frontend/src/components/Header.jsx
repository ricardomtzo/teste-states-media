import { FaBars, FaSearch, FaMicrophone, FaBell, FaUserCircle, FaPlus, FaKeyboard, FaArrowLeft, FaEllipsisV } from 'react-icons/fa'
import { useState } from 'react'
import Logo from '../assets/youtube-logo.svg'

export default function Header({ onMenuClick }) {
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-white">
      <div className="mx-auto pl-4 py-2 flex items-center gap-3">
        {/* Esquerda: menu + logo */}
        <div className="flex items-center gap-3">
          {/* Menu escondido no mobile; mantém no desktop para layout tipo YouTube */}
          <button className="max-sm:hidden md:flex h-9 w-9 items-center justify-center bg-transparent border-none hover:bg-gray-100 " aria-label="Menu" onClick={onMenuClick}>
            <FaBars size={18} aria-hidden="true" />
          </button>
          <a href="#" className="flex items-center gap-2" aria-label="YouTube Home">
            <img src={Logo} alt="YouTube" className="h-5 w-auto" />
          </a>
        </div>

        {/* Centro: barra de pesquisa com ícones (desktop/tablet) */}
        <div className="max-sm:hidden md:flex lg:flex sm:flex flex-1 items-center justify-center">
          <div className="w-full max-w-[600px] mx-auto flex items-center">
            <div className="relative flex-1">
              <div className="flex-row h-[36px] px-4 w-full flex items-center border border-gray-200 rounded-l-full text-sm focus:outline-none bg-white">
                <input
                  type="text"
                  name="search"
                  placeholder="Pesquisar"
                  className="border-none w-full outline-none"
                />
                {/* Ícone de teclado dentro da barra (canto direito do input) */}
                <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-gray-500" aria-hidden="true">
                  <FaKeyboard size={14} />
                </span>
              </div>

            </div>
            {/* Botão de busca anexado ao input */}
            <button
              className="-ml-px h-9 px-4 flex items-center justify-center border-y border-r border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200"
              aria-label="Buscar"
            >
              <FaSearch />
            </button>
            {/* Botão de microfone circular */}
            <button
              className="ml-2 h-9 w-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Pesquisar com a voz"
              title="Pesquisar com a voz"
            >
              <FaMicrophone />
            </button>
          </div>
        </div>

        {/* Direita: ações */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Mobile: mostrar apenas busca e três pontinhos */}
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Buscar"
            onClick={() => setSearchOpen(true)}
          >
            <FaSearch />
          </button>
          <button className="md:hidden h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100" aria-label="Mais opções">
            <FaEllipsisV />
          </button>

          {/* Desktop/Tablet: ações completas */}
          <button
            className="max-sm:hidden md:flex px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 items-center gap-2"
            aria-label="Criar"
            title="Criar"
          >
            <FaPlus size={12} />
            <span className="text-sm">Criar</span>
          </button>
          <button className="max-sm:hidden md:flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100" aria-label="Notificações">
            <FaBell size={20} />
          </button>
          <button className="max-sm:hidden md:flex h-9 w-9 items-center justify-center rounded-full" aria-label="Perfil">
            <FaUserCircle size={24} />
          </button>
        </div>
      </div>

      {/* Overlay de busca no mobile */}
      {searchOpen && (
        <div className="fixed inset-x-0 top-0 z-40 bg-white border-b">
          <div className="px-3 py-2 flex items-center gap-2">
            <button
              className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              aria-label="Voltar"
              onClick={() => setSearchOpen(false)}
            >
              <FaArrowLeft />
            </button>
            <input
              type="text"
              name="search"
              placeholder="Pesquisar"
              className="flex-1 h-9 px-4 border border-gray-200 rounded-full outline-none"
              autoFocus
            />
            <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100" aria-label="Buscar">
              <FaSearch />
            </button>
            <button
              className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              aria-label="Pesquisar com a voz"
              title="Pesquisar com a voz"
            >
              <FaMicrophone />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}