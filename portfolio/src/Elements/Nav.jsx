import React from 'react';
import Main from './Main';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const PDF_FILE_URL = 'http://localhost:3000/Myresume.pdf';

function Nav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <div>
      <nav className="px-3 py-4 bg-slate-700 text-white flex justify-between items-center">
        <div className="text-2xl font-medium rounded-full text-blue-400 bg-black">VJL</div>
        <div className="space-x-4">
          <a
            href="#home"
            className="hover:text-slate-400"
            onClick={() => scrollToSection('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-slate-400"
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-slate-400"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-slate-400"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
          <button
            onClick={() => downloadFileAtURL(PDF_FILE_URL)}
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
          >
            Download CV  ⬇
          </button>
        </div>
      </nav>

      <div id="home">
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Nav;
