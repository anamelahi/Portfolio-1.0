import React from "react";
import "./App.css";
import Sections from "./Components/Sections";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import chatapp from "./assets/chatapp.png";
// import carrental from "./assets/Car-rental.png";
import pinsplash from "./assets/pinsplash.png"
import urlshort from "./assets/url-shortner.png";
import coffeeshop from "./assets/coffee-shop.png"
import jh_logo from "./assets/jh_logo.png"
import hps_logo from "./assets/hps_logo.jpg"
import nits_logo from "./assets/nits_logo.svg"
import nmdfc_logo from "./assets/nmdfc_logo.png"
import elsevier from "./assets/elsevier_logo.png"
import lc_logo from "./assets/LeetCode_logo.png"
import collabSphere from "./assets/collabSphere.png"
import resume from "/Anam_Elahi_Resume.pdf"

function App() {
  return (
    <div className="main">
      <div className="hero">
        <h1>Hi, This is Anam Elahi 👋</h1>
        <p>Pursuing M.Tech in AI. Qualified GATE CS and DA 2026<br /> Here's my <a href={resume} target="_blank">Resume</a> and my <a href="https://leetcode.com/u/anamelahi/">Leetcode</a> 
        </p>
      </div>

      <div className="about">
        <h2>About Me</h2>
        <p>
          By the end of 2021, I was enrolled in my Undergrad degree.I've participated in ideathons and hackathons and have enjoyed working in a team and pitched my ideas. Did 1 internship and freelance during my Bachelor's. Apart from development, I also
          write research/review papers. I've also got my paper "AI in Agriculture" published in The esteemed publication "Elsevier" in 2023.
          Currently I have developed interest in Quantum Computing. <br />
          Currently I am looking for SDE opportunities.
        </p>
      </div>
      <div className="education">
        <h2 className="sectionhead"> Education </h2>
        <Sections
          image={nits_logo}
          heading="NIT Silchar"
          details="Mtech AI"
          timeline="present"
        />
        <Sections
          image={jh_logo}
          heading="Jamia Hamdard"
          details="Btech CSE, 7.97 cgpa"
          timeline="2021-2025"
        />
        <Sections
          image={hps_logo}
          heading="Hamdard Public School"
          details="Class 12th, 90.8%"
          timeline="2020-2021"
        />
        <Sections
          image={hps_logo}
          heading="Hamdard Public School"
          details="Class 10th, 93.6%"
          timeline="2018-2019"
        />
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skill-name">
          <Skills name="Python" />
          <Skills name="Data Structures" />
          <Skills name="React" />
          <Skills name="PostgreSQL" />
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
          link="https://github.com/anamelahi/CollabSphere"
            image={collabSphere}
            heading="CollabSphere"
            duration="Present"
            content="CollabSphere is a metaverse platform for remote teams, featuring avatars, real-time communication, and interactive virtual offices, allowing employees and managers to collaborate seamlessly in an immersive digital workspace. "
            techname="Javascript"
          />
        <Projects
          link="https://github.com/anamelahi/pinsplash"
            image={pinsplash}
            heading="Pinsplash"
            duration="Present"
            content="Pinsplash is a clone of Unsplash. I took this project challenge from 'devchallenges' "
            techname="Javascript"
          />
          <Projects
          link="https://github.com/anamelahi/MinorProject"
            image={chatapp}
            heading="Chat App"
            duration="2024"
            content="The Chat App project aims to develop a modern and efficient chat application that enables users to communicate. The app will support one-on-one messaging functionalities, providing users with a seamless and interactive communication experience."
            techname="Javascript"

          />
          <Projects
          link="https://github.com/anamelahi/url-shortner"
            image={urlshort}
            heading="URL Shortner"
            duration="2023"
            content="Designed to streamline and simplify your online experience, our backend-based URL shortener transforms lengthy web addresses into concise, easy-to-share links."
            techname="Javascript"
          />

        </div>
      </div>

      <div className="work">
        <h2>Work Experience</h2>
        <Sections
          image={nmdfc_logo}
          heading="NMDFC- Ministry of Minority Affairs"
          details="Frontend Developer"
          timeline="March 2025 - August 2025"
        />
        <Sections
          image="https://quirkyfolksentertainment.com/assets/qf-4G8q1CSS.png"
          heading="Quirky Folks Entertainment"
          details="Freelance Web developer"
          timeline="July 2024- August 2024"
        />
        <Sections
          image={elsevier}
          heading="Artificial Intelligence in Agriculture"
          details="Research Paper, Elsevier SSRN"
          timeline="2022 - Feb 2023"
        />
    

      </div>

      <div className="getintouch">
        <h1>Get in Touch</h1>
        <p>Have an opportunity for me or wanna do a project together? Just dm me on <a href="https://x.com/AnamElahi3">X</a> Or you can <a href="mailto:anamelahi04@gmail.com">mail me!</a></p>
      </div>
    </div>
  );
}

export default App;
