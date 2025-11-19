import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl tracking-tight text-neutral-900">
            Kaiti Saragioth
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-700">
            Concert Pianist | Educator | Composer
          </p>
          <div className="mt-10">
            <a
              href="#gallery"
              className="inline-flex items-center px-6 py-3 border border-gold text-neutral-900 hover:bg-gold hover:text-white transition-colors rounded-full"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
