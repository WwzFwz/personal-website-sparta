  
"use client";

import Image from 'next/image';

interface TechStackSectionProps {
  techLogos: { src: string; alt: string }[];
}

export default function TechStackSection({ techLogos }: TechStackSectionProps) {
  return (
    <section className="mt-10 p-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Tech Stack</h2>
      <div
        className="grid gap-x-8 gap-y-12"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          justifyContent: 'center', // memastikan item di tengah
        }}
      >
        {techLogos.map((logo, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 border-2 border-black rounded-lg"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}




