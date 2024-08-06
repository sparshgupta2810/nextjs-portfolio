"use client";
import About from "./About";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>React</li>
        <li>Next</li>
        <li>JavaScript</li>
        <li>Figma/Canva</li>
        <li>Data Structure and Algorithm</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Indian Institute of Technology Varanasi (IITBHU)</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>AIR 9991 in JEE Advanced 2022 </li>
        <li> Pupil in Codeforces with the maximum rating 1275</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white z-10" id="about">
      <About />
      <motion.div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-2 xl:gap-16 sm:py-16 xl:px-8">
        <div className="mx-auto left-0 flex  py-4 items-center justify-center  relative">
          <div className=" flex items-start absolute">
            <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="w-full h-auto"
              src="/images/About2.webm"
            />
          </div>
          <Image
            className=" w-full flex z-0"
            src="/images/About3.png"
            width={600}
            height={600}
            alt="Picture of the author"
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a seasoned full-stack web developer, I excel in crafting dynamic and user-centric web applications. My expertise spans a comprehensive array of technologies, including JavaScript, React, Redux, Node.js, Express, HTML, CSS, and many more.Collaboration lies at the heart of my work ethos, and I thrive in team environments where collective creativity fuels the development process. I am committed to leveraging my skills and experience to contribute meaningfully to collaborative endeavors, fostering innovation and delivering exceptional results.
          </p>
          <div className="flex flex-row justify-start mt-8 z-0">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
