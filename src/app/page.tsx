import Image from 'next/image'

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="h-screen bg-gradient-to-b from-pink-100 to-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">💍 Our Wedding</h1>
        <p className="text-lg md:text-2xl mb-8">Join us in celebrating our special day!</p>
        <a href="#story" className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
          Scroll Down
        </a>
      </section>

      {/* Our Story */}
      <section id="story" className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="max-w-2xl text-center mb-4">
          We met 5 years ago, and since then our journey together has been full of love, laughter, and adventures.
        </p>
        <p className="max-w-2xl text-center">We can’t wait to celebrate with our friends and family!</p>
      </section>

      {/* Gallery */}
      <section id="gallery" className="min-h-screen bg-pink-50 px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image src={`/images/gallery-${i}.jpg`} alt={`Gallery ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-6">RSVP</h2>
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-lg"/>
          <input type="email" placeholder="Your Email" className="border p-3 rounded-lg"/>
          <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Submit
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-center max-w-xl mb-4">For questions, please reach out to us via email: wedding@example.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-6">
        &copy; 2025 Our Wedding. All rights reserved.
      </footer>
    </main>
  )
}
