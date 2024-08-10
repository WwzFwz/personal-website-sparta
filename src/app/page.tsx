import HomeSection from './section/Homesection';
import AboutSection from './section/AboutSection';
import TechStackSection from './section/TechStackSection';
import ProjectsPage from './section/ProjectPages';
import AchievementsSection from './section/AchievementSection';
import NavBar from './section/NavBar';




export default function Page() {
  return (
    <div>
      <NavBar />
      <div id="home" className="pt-0">
        <HomeSection
          name="Dzaky Aurelia Fawwaz"
          intro="A Passionate Junior Software Engineer"
          profileImageUrl="/profil.jpeg"
        />
      </div>
      <div id="about" className="pt-0">
      <AboutSection
          bio="I am a software developer with a passion for building web applications."
          interests={[
            "Web Development",
            "Open Source Contribution",
            "Machine Learning",
            "Artificial Intelligence",
            "Data Science",
            "Cloud Computing"
          ]}
          education={[
            { degree: "Bachelor of Computer Science", institution: "Institut Teknologi Bandung", year: "2023 - now" },
            { degree: "High School Diploma", institution: "SMA Negeri 1 Magelang", year: "2019 - 2023" },
          ]}
        />
      </div>
      <div id="techstack" className="pt-5">
        <TechStackSection
          techLogos={[
            { src: '/images/tech/javascript.png', alt: 'JavaScript' },
            { src: '/images/tech/typescript.png', alt: 'TypeScript' },
            { src: '/images/tech/react.png', alt: 'React' },
            { src: '/images/tech/nextjs.png', alt: 'Next.js' },
            { src: '/images/tech/tailwind.png', alt: 'Tailwind CSS' },
          ]}
        />
      </div>
      <div id="projects" className="pt-20">
        <ProjectsPage/>
      </div>
      <div id="achievements" className="pt-0">
        <AchievementsSection
          achievements={[
            {
              image: '/achievements/itb.png',
              title: 'Masuk ITB',
              description: 'Menjadi mahasiswa itb adalah pencapaian terbesar saya',
            },
            {
              image: '/achievements/sigma.webp',
              title: 'Sigma Male',
              description: 'Sigma male adalah pria independen',
            },
            {
              image: '/achievements/itb.png',
              title: 'Daspro carrier',
              description: 'berkontribusi terhadap mayoritas program tugas besar daspro',
            },
            {
              image: '/achievements/sigma.webp',
              title: 'Panitia OSKM',
              description: 'Bergabung pada divisi IT-Information OSKM ITB',
            },
          ]}
        />
      </div>
      <div id="contact" className="pt-20 text-center py-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-700">Email: dzakyaureliafawwaz@gmail.com</p>
        <p className="text-lg text-gray-700">LinkedIn: Dzaky Aurelia Fawwaz</p>
      </div>
    </div>
  );
}



