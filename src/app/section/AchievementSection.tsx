"use client";

import Image from 'next/image';

interface Achievement {
  image: string;
  title: string;
  description: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section className="mt-10 p-4">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="relative w-24 h-24">
              <Image
                src={achievement.image}
                alt={achievement.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{achievement.title}</h3>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
