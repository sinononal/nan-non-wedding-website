"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FadeInSection from "./components/FadeInSection"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2027-06-07T00:00:00Z");

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <FadeInSection>
        <section className="h-screen bg-gradient-to-b from-pink-100 via-white to-white flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-gray-800">
            Nan & Non
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-600">
            Together with their families, invite you to celebrate their wedding
          </p>
          <a
            href="#countdown"
            className="px-8 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
          >
            Save the Date
          </a>
        </section>
      </FadeInSection>
      

      {/* Countdown Section */}
      <FadeInSection>
        <section
          id="countdown"
          className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Countdown to Our Wedding 🎉
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <p className="text-5xl font-bold text-pink-600">{timeLeft.days}</p>
              <p className="text-gray-500 mt-2">Days</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <p className="text-5xl font-bold text-pink-600">{timeLeft.hours}</p>
              <p className="text-gray-500 mt-2">Hours</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <p className="text-5xl font-bold text-pink-600">
                {timeLeft.minutes}
              </p>
              <p className="text-gray-500 mt-2">Minutes</p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <p className="text-5xl font-bold text-pink-600">
                {timeLeft.seconds}
              </p>
              <p className="text-gray-500 mt-2">Seconds</p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Our Story */}
      <FadeInSection>
        <section
          id="story"
          className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="max-w-2xl text-center mb-4 text-gray-600">
            We met five years ago, and since then our journey together has been
            full of love, laughter, and adventures.
          </p>
          <p className="max-w-2xl text-center text-gray-600">
            We can’t wait to celebrate with our friends and family!
          </p>
        </section>
      </FadeInSection>
      

      {/* Gallery */}
      <FadeInSection>
        <section id="gallery" className="min-h-screen bg-pink-50 px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="relative h-64 w-full rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={`/images/gallery-${i}.jpg`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* RSVP Section */}
      <FadeInSection>
        <section
          id="rsvp"
          className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">RSVP</h2>
          <form className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition shadow-md"
            >
              Submit
            </button>
          </form>
        </section>
      </FadeInSection>
      

      {/* Contact Section */}
      <FadeInSection>
        <section
          id="contact"
          className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact</h2>
          <p className="text-center max-w-xl mb-4 text-gray-600">
            For questions, please reach out to us via email:{" "}
            <span className="font-medium">wedding@example.com</span>
          </p>
        </section>
      </FadeInSection>
      

      {/* Footer */}
      <footer className="bg-white text-center py-6 border-t text-gray-500 text-sm">
        &copy; 2025 Nan & Non Wedding. All rights reserved.
      </footer>
    </main>
  );
}
