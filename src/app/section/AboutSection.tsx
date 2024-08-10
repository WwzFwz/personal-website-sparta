"use client";

interface AboutSectionProps {
  bio: string;
  interests: string[];
  education: { degree: string; institution: string; year: string }[];
}

export default function AboutSection({ bio, interests, education }: AboutSectionProps) {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Deskripsi Singkat</h3>
            <p className="text-lg text-gray-700">{bio}</p>
          </div>
          <div className="md:w-1/3 p-4 md:border-l-2 border-gray-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Minat dan Bakat</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 p-4 md:border-l-2 border-gray-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Edukasi</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {education.map((edu, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500">{edu.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
  