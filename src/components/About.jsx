import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2">
          <div className="aspect-[3/4] rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1536663733908-8bed7b6a39b0?q=80&w=1200&auto=format&fit=crop"
              alt="Kaiti Saragioth portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 tracking-tight">About Me</h2>
          <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Kaiti Saragioth is an internationally acclaimed concert pianist known for her emotive interpretations of Romantic and Contemporary repertoire. A graduate of [Prestigious Music School], her career spans over a decade, featuring solo performances at [Major Venue 1] and collaborations with [Major Orchestra].
            </p>
            <p>
              She is dedicated to music education and currently resides in [City]. Her work as an educator includes masterclasses, private instruction, and outreach dedicated to bringing classical music to broader audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
