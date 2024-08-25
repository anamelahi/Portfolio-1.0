import React from "react";
import "./App.css";
import Sections from "./Components/Sections";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import chatapp from "./assets/chatapp.png";
import carrental from "./assets/Car-rental.png";
import urlshort from "./assets/url-shortner.png";
import resume from "../public/Resume.pdf"

function App() {
  return (
    <div className="main">
      <div className="hero">
        <h1>Hi, This is Anam 👋</h1>
        <p>Pursuing Btech Computer Science and a Frontend Developer. I love Cats, Coffee and Broccoli. <br /> Here's my <a href={resume} target="_blank">Resume</a>
        </p>
      </div>

      <div className="about">
        <h2>About Me</h2>
        <p>
          By the end of 2021, I was enrolled in my Undergrad degree. I also
          write research paper sometimes. I've also got my paper "AI in Agriculture" published in The esteemed publication "Elsevier" in 2023.
          Currently I have developed interest in Quantum Computing. <br />
          Currently I am working as a Freelancer.
        </p>
      </div>
      <div className="education">
        <h2 className="sectionhead"> Education </h2>
        <Sections
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6wCkhO2Ifja2HW5-5WueSorb0G66xlUkkw&s"
          heading="Jamia Hamdard"
          details="Btech CSE, 7.62 cgpa"
          timeline="present"
        />
        <Sections
          image="https://delhischoolsdirectory.com/assets/upload/profileimg/PRFIMGUSR25661668755814.png"
          heading="Hamdard Public School"
          details="Class 12th, 90.8%"
          timeline="2020-2021"
        />
        <Sections
          image="https://delhischoolsdirectory.com/assets/upload/profileimg/PRFIMGUSR25661668755814.png"
          heading="Hamdard Public School"
          details="Class 10th, 93.6%"
          timeline="2018-2019"
        />
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skill-name">
          <Skills name="React" />
          <Skills name="Mongo DB" />
          <Skills name="Node js" />
          <Skills name="Express" />
          <Skills name="Java" />
          <Skills name="Figma" />
        </div>
      </div>

      <div className="project">
        <h2>Projects</h2>
        <div className="pro">
          <Projects
          link="https://github.com/anamelahi/MinorProject"
            image={chatapp}
            heading="Chat App"
            duration="2024"
            content="The Chat App project aims to develop a modern and efficient chat application that enables users to communicate. The app will support one-on-one messaging functionalities, providing users with a seamless and interactive communication experience."
          />
          <Projects
          link="https://github.com/anamelahi/Car-Rental"
            image={carrental}
            heading="CarLo"
            duration="Present"
            content="Welcome to CarLo, your trusted partner for easy and reliable car rentals. At CarLo, we offer a diverse range of vehicles to meet all your travel needs, from compact cars to luxurious SUVs. "
            
          />
          <Projects
          link="https://github.com/anamelahi/url-shortner"
            image={urlshort}
            heading="URL Shortner"
            duration="2023"
            content="Designed to streamline and simplify your online experience, our backend-based URL shortener transforms lengthy web addresses into concise, easy-to-share links."
          />
        </div>
      </div>

      <div className="work">
        <h2>Work Experience</h2>
        <Sections
          image="https://avatars.githubusercontent.com/u/174705058?s=200&v=4"
          heading="AD Technology"
          details="Freelance Web developer"
          timeline="Present"
        />
        <Sections
          image="https://quirkyfolksentertainment.com/assets/qf-4G8q1CSS.png"
          heading="Quirky Folks Entertainment"
          details="Freelance Web developer"
          timeline="July 2024- August 2024"
        />
        <Sections
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Elsevier.svg/602px-Elsevier.svg.png"
          heading="Artificial Intelligence in Agriculture"
          details="Research Paper, Elsevier SSRN"
          timeline="2022 - Feb 2023"
        />
    

      </div>

      <div className="getintouch">
        <h1>Get in Touch</h1>
        <p>Let's do a project together? Just dm me on <a href="https://x.com/AnamElahi3">twitter</a> and I'll respond whenever I can. Or you can <a href="mailto:anamelahi04@gmail.com">mail me!</a></p>
      </div>
    </div>
  );
}

export default App;
