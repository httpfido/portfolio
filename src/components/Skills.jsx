import React from "react";

// import skills data
import { skillsFront, skillsBack, skillsOther } from "../data";

const SkillList = ({ title, skills }) => (
  <div
    className="rounded-lg bg-light-secondary dark:bg-dark-secondary mb-10 pt-1 pb-4"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="800"
    data-aos-once="true"
  >
    <h1 className="text-lg ml-5 mb-3">{title}</h1>
    <div className="lg:px-10 grid grid-cols-8 md:grid-flow-row">
      {skills.map((skill, index) => (
        <a href={skill.href} target="_blank" rel="noreferrer" key={index}>
          <div className="group flex items-center justify-center relative">
            <img
              className="cursor-pointer w-20 transition-all duration-100 ease-linear transform group-hover:scale-110"
              src={skill.image}
              alt=""
            />
            <span className="text-sm text-center text-white bg-tertiary absolute top-1 opacity-0 lg:group-hover:opacity-100 md:text-lg px-2 rounded animate-bounce">
              {skill.name}
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      className="dark:bg-dark-tertiary bg-light-primary flex items-center min-h-screen pb-12"
      id="skills"
    >
      <div className="container mx-auto ">
        <h1 className="text-3xl lg:text-4xl font-medium lg:font-extrabold my-10 ">
          Habilidades
        </h1>
        <SkillList title="Front end" skills={skillsFront} />
        <SkillList title="Back end" skills={skillsBack} />
        <SkillList
          title="Programming Languages &amp; tools"
          skills={skillsOther}
        />
      </div>
    </section>
  );
};

export default Skills;
