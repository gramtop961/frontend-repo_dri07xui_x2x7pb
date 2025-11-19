import React, { useState } from 'react'

const photos = [
  'https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525362081669-2b476bb628c1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513351105272-9f8a5f52d0c4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531244964751-c86f7a1f1fdc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523757956233-94a86ff74ea5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513885535751-8b9238bd3456?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531212214119-12786858a7cc?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
]

const videos = [
  { title: 'Chopin Nocturne Op. 9 No. 2', url: 'https://www.youtube.com/embed/9E6b3swbnWg' },
  { title: 'Rachmaninoff Prelude in G Minor', url: 'https://www.youtube.com/embed/etMJx7G1yjo' },
  { title: 'Live at The Apollo', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const Gallery = () => {
  const [tab, setTab] = useState('photos')

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 tracking-tight">Gallery</h2>
          <div className="inline-flex rounded-full border border-neutral-200 overflow-hidden">
            <button
              onClick={() => setTab('photos')}
              className={`px-4 py-2 text-sm transition-colors ${tab === 'photos' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'}`}
            >
              Photos
            </button>
            <button
              onClick={() => setTab('videos')}
              className={`px-4 py-2 text-sm transition-colors ${tab === 'videos' ? 'bg-neutral-900 text-white' : 'text-neutral-700 hover:bg-neutral-100'}`}
            >
              Videos
            </button>
          </div>
        </div>

        {tab === 'photos' ? (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {photos.map((src, idx) => (
              <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200">
                <img src={src} alt="Performance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {videos.map((v, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-sm">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={v.url}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm tracking-wide text-neutral-800">{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
