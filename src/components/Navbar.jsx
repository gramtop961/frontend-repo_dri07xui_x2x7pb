import React from 'react'

const Navbar = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200/70">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl tracking-widest uppercase" aria-label="Kaiti Saragioth">
          <span className="font-playfair text-neutral-900">Kaiti</span>
          <span className="mx-1 text-[12px] align-super text-gold">•</span>
          <span className="font-playfair text-neutral-900">Saragioth</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm tracking-wide text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm tracking-wide px-4 py-2 border border-gold text-neutral-900 hover:bg-gold hover:text-white transition-colors rounded-full"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar
