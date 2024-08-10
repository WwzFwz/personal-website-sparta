// "use client";

// import { useState } from 'react';
// import Link from 'next/link';

// export default function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-yellow-600 p-2">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">
//           Personal Website
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
//             </svg>
//           </button>
//         </div>
//         <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
//           <Link href="#home" passHref>
//             <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Home</span>
//           </Link>
//           <Link href="#about" passHref>
//             <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">About Me</span>
//           </Link>
//           <Link href="#techstack" passHref>
//             <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Tech Stack</span>
//           </Link>
//           <Link href="#projects" passHref>
//             <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Projects</span>
//           </Link>
//           <Link href="#achievements" passHref>
//             <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Achievements</span>
//           </Link>
//           <Link href="#contact" passHref>
//             <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Contact</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-600 p-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          My Website
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="#home" passHref>
            <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Home</span>
          </Link>
          <Link href="#about" passHref>
            <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">About Me</span>
          </Link>
          <Link href="#techstack" passHref>
            <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Tech Stack</span>
          </Link>
          <Link href="#projects" passHref>
            <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Projects</span>
          </Link>
          <Link href="#achievements" passHref>
            <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Achievements</span>
          </Link>
          <Link href="#contact" passHref>
            <span className="text-white hover:text-gray-200 block md:inline-block mt-4 md:mt-0 cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
