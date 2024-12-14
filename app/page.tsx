import React from 'react';
import Image from "next/image";

export default function RootLayout({ }) {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <main className="mb-20">
          <h1 className="text-3xl font-light mb-6 text-gray-800">
            PGH
          </h1>
          <div className="relative w-full aspect-[3/2] mb-4">
            <Image
              src="/placeholder.svg"
              alt="PGH Squad"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">
            Where we talk about everything and nothing.
          </p>
        </main>

        {/* Quick Links */}
        <section className="mb-20 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 gap-8">
            <a href="#" className="group">
              <h3 className="text-lg font-light text-gray-800 mb-1 group-hover:text-gray-600">Study Schedule</h3>
              <p className="text-sm text-gray-500">Next session: Room 401</p>
            </a>
            <a href="#" className="group">
              <h3 className="text-lg font-light text-gray-800 mb-1 group-hover:text-gray-600">Food Spots</h3>
              <p className="text-sm text-gray-500">Current favorite: Café Luna</p>
            </a>
          </div>
        </section>

        {/* Memories */}
        <section className="mb-20">
          <h2 className="text-lg font-light mb-8 text-gray-800">Recent Memories</h2>
          <div className="space-y-8">
            {memories.map((memory, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={`/placeholder.svg`}
                    alt={memory.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-light text-gray-800">{memory.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{memory.date}</p>
                  <p className="text-sm text-gray-600">{memory.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-xs text-gray-400 border-t border-gray-200 pt-8">
          <p>PGH Squad — Est. 2024</p>
        </footer>
      </div>
    </div>
  );
}

const memories = [
  { title: "Late Night Study", date: "Fall 2024", description: "Data Structures final + pizza" },
  { title: "Rooftop Talks", date: "Spring 2024", description: "Weekly sunset meetups" },
  { title: "Hackathon", date: "Winter 2024", description: "48hrs, 3rd place" }
];
