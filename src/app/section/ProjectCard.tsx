"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  techBadges: string[]; // Array of image URLs for the technology badges
  link?: string; // Optional link to the project
}

export default function ProjectCard({ title, imageUrl, description, techBadges, link }: ProjectCardProps) {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${link ? 'hover:shadow-2xl' : ''}`}
    >
      {link ? (
        <Link href={link} className="block">
          <div className="relative w-full h-48">
            <Image 
              src={imageUrl} 
              alt={title} 
              layout="fill" 
              objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-wrap">
            {techBadges.map((badge, index) => (
              <div key={index} className="relative h-8 w-8 mr-4 mb-4">
                <Image 
                  src={badge} 
                  alt={`Tech badge ${index + 1}`} 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </Link>
      ) : (
        <>
          <div className="relative w-full h-48">
            <Image 
              src={imageUrl} 
              alt={title} 
              layout="fill" 
              objectFit="cover"
              className="rounded-t"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2 flex flex-wrap">
            {techBadges.map((badge, index) => (
              <div key={index} className="relative h-8 w-8 mr-4 mb-4">
                <Image 
                  src={badge} 
                  alt={`Tech badge ${index + 1}`} 
                  layout="fill" 
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
