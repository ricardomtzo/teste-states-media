import { useEffect } from 'react'

export default function VideoPlayer() {
  useEffect(() => {
    if (!document.getElementById('scr_6706cb8f4d8852000be1abc0')) {
      const script = document.createElement('script')
      script.src = 'https://scripts.converteai.net/ed9b3b39-9391-4d8c-a4c9-98c3c0b84527/players/6706cb8f4d8852000be1abc0/player.js'
      script.async = true
      script.id = 'scr_6706cb8f4d8852000be1abc0'
      document.head.appendChild(script)
    }
    return () => {
      const el = document.getElementById('scr_6706cb8f4d8852000be1abc0')
      if (el) el.remove()
    }
  }, [])

  return (
    <div className="w-full p-0 m-0 max-sm:sticky top-[52px] z-20 bg-white">
      <div
        id="vid_6706cb8f4d8852000be1abc0"
        style={{ position: 'relative', width: '100%', padding: '56.25% 0 0', margin: 0 }}
      ></div>
    </div>
  )
}