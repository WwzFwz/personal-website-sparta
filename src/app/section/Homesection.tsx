
"use client";

import Image from 'next/image';

interface HomeSectionProps {
  name: string;
  intro: string;
  profileImageUrl: string;
}

export default function HomeSection({ name, intro, profileImageUrl }: HomeSectionProps) {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 ">
      <div className="flex flex-col items-start text-left md:w-1/2">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 pt-8">{`I'm ${name},`}</h1>
        <p className="text-3xl font-semibold text-gray-700 mb-8">{intro}</p>
        <div className="flex space-x-6">
          <a
            href="#about"
            className="px-8 py-4 bg-yellow-500 text-white text-xl font-semibold rounded-lg shadow hover:bg-yellow-600 transition duration-300"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 text-xl font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <div className="relative">
          <Image
            src={profileImageUrl}
            alt="Profile Image"
            width={400}
            height={400}
            className="rounded-full border-8 border-yellow-300"
          />
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">👋</span>
          </div>
        </div>
      </div>
    </section>
  );
}

