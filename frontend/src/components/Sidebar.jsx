import { MdHomeFilled, MdOutlineSubscriptions, MdHistory, MdPlaylistPlay, MdVideoLibrary, MdSchedule, MdChevronRight } from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'

function NavItem({ icon: Icon, label, active = false, badge = false }) {
  return (
    <button
      className={`w-full flex items-center gap-4 px-4 py-2 rounded-lg text-left ${active ? 'bg-gray-200 font-medium' : 'hover:bg-gray-100'} text-gray-900`}
    >
      <Icon className="text-gray-900" size={22} aria-hidden="true" />
      <span className="text-sm">{label}</span>
      {badge && <span className="ml-auto w-2 h-2 rounded-full bg-blue-500" aria-hidden="true"></span>}
    </button>
  )
}

export default function Sidebar({ onClose }) {
  return (
    <nav className="w-[240px] h-full bg-white text-black select-none" aria-label="Navegação lateral">
      <div className="py-3 pl-2">
        {/* Grupo principal */}
        <div className="space-y-1">
          <NavItem icon={MdHomeFilled} label="Início" active />
          <NavItem icon={SiYoutubeshorts} label="Shorts" />
          <NavItem icon={MdOutlineSubscriptions} label="Inscrições" badge />
        </div>

        {/* Separador */}
        <div className="my-3 border-t border-gray-200"></div>

        {/* Seção Você */}
        <div className="px-4 mb-1 flex items-center justify-between text-sm text-gray-700">
          <span className="font-medium">Você</span>
          <MdChevronRight aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <NavItem icon={MdHistory} label="Histórico" />
          <NavItem icon={MdPlaylistPlay} label="Playlists" />
          <NavItem icon={MdVideoLibrary} label="Seus vídeos" />
          <NavItem icon={MdSchedule} label="Assistir mais tarde" />
          <NavItem icon={MdVideoLibrary} label="Vídeos com Gostei" />
        </div>
      </div>
    </nav>
  )
}