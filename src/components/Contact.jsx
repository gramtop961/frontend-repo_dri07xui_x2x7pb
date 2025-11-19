import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 tracking-tight">Contact</h2>
          <p className="mt-4 text-neutral-700">
            For bookings, collaborations, or lessons, please use the form or email directly.
          </p>

          <div className="mt-6 space-y-2">
            <a href="mailto:info@kaitisaragioth.com" className="text-neutral-900 underline underline-offset-4 decoration-gold hover:text-gold">
              info@kaitisaragioth.com
            </a>
            <div className="flex items-center gap-4 text-neutral-700">
              <a href="#" className="hover:text-neutral-900">Instagram</a>
              <span className="text-neutral-300">|</span>
              <a href="#" className="hover:text-neutral-900">YouTube</a>
              <span className="text-neutral-300">|</span>
              <a href="#" className="hover:text-neutral-900">Facebook</a>
            </div>
          </div>
        </div>

        <form className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-neutral-700 mb-1">Name</label>
              <input type="text" placeholder="Your name" className="h-11 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-neutral-700 mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="h-11 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="text-sm text-neutral-700 mb-1">Subject</label>
              <input type="text" placeholder="Subject" className="h-11 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            </div>
            <div className="sm:col-span-2 flex flex-col">
              <label className="text-sm text-neutral-700 mb-1">Message</label>
              <textarea rows="5" placeholder="Write your message..." className="px-3 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-gold/60" />
            </div>
          </div>
          <button type="submit" className="mt-6 inline-flex items-center px-6 h-11 rounded-full border border-gold text-neutral-900 hover:bg-gold hover:text-white transition-colors">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-16 text-center text-neutral-500 text-sm">
        <p>© 2024 Kaiti Saragioth. All Rights Reserved.</p>
        <div className="mt-2 inline-flex items-center gap-6">
          <a href="#home" className="hover:text-neutral-800">Home</a>
          <a href="#about" className="hover:text-neutral-800">About</a>
          <a href="#gallery" className="hover:text-neutral-800">Gallery</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
