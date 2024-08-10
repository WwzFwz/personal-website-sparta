"use client";

import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'To do Lists',
      imageUrl: '/projects/todolist.png',
      description: 'This is the first project. It is an simple to do list manager.',
      techBadges: [
        '/images/tech/javascript.png',
        '/images/tech/react.png',
        '/images/tech/nextjs.png'
      ],
      link: 'https://github.com/WwzFwz/mini-project-fe-information.git'
    },
    {
      title: 'Computer Based Test Website',
      imageUrl: '/projects/cbtfigma.png',
      description: 'This is the second project. It focuses on improving quality of education started with our website ',
      techBadges: [
        '/images/tech/typescript.png',
        '/images/tech/nextjs.png',
        '/images/tech/tailwind.png'
      ],
      link: 'https://www.figma.com/proto/WNzztyDlW7pW4lFLEpILRg/Website?node-id=166-189&t=u8FhH8Gpkh8XNX2G-1' // No link provided, so the card will not be clickable
    },
    {
      title: 'To do Lists',
      imageUrl: '/projects/todolist.png',
      description: 'This is the first project. It is an simple to do list manager.',
      techBadges: [
        '/images/tech/javascript.png',
        '/images/tech/react.png',
        '/images/tech/nextjs.png'
      ],
      link: 'https://github.com/WwzFwz/mini-project-fe-information.git'
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              techBadges={project.techBadges}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
