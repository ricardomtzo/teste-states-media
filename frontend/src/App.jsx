import { lazy, Suspense, useState } from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import VideoInfo from './components/VideoInfo'
const Comments = lazy(() => import('./components/Comments'))
const ProductSection = lazy(() => import('./components/ProductSection'))
import LeadModal from './components/LeadModal'
import Sidebar from './components/Sidebar'

export default function App() {
  const [leadOpen, setLeadOpen] = useState(false)
  const [selectedKit, setSelectedKit] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openLead = (kit) => {
    setSelectedKit(kit)
    setLeadOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <main className="px-0 py-0">
        <div className="">
          <section className="mt-0">
            <VideoPlayer />
            <div className='px-3'>
              <VideoInfo />
              <Suspense fallback={<div className="mt-4">Loading comments...</div>}>
                <Comments />
              </Suspense>
              <Suspense fallback={<div className="mt-4">Loading offers...</div>}>
                <ProductSection onOrderClick={openLead} />
              </Suspense>
            </div>
          </section>
          <aside className="hidden lg:block">
            <Sidebar />
          </aside>
        </div>
      </main>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 " role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[260px] bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <Sidebar />
          </div>
        </div>
      )}

      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} selectedKit={selectedKit} />
    </div>
  )
}
