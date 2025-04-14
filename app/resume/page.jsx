"use client"

import {
  FaHtml5, 
  FaCss3, 
  FaReact, 
  FaNode,
  FaAngular,
  FaFigma,
  FaGitAlt,
  FaWindows,
  FaDocker,
  FaAws,
} from "react-icons/fa"
import {
  SiRedux,
  SiTypescript,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiJest,
  SiStyledcomponents,
  SiVite,
  SiNextdotjs,
  SiAxios,
  SiMongodb,
  SiMysql,
  SiTypeorm,
  SiReactquery,

} from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io";
import { PiTerminalWindowFill } from "react-icons/pi";
import { VscTerminalUbuntu, VscTerminalLinux  } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql, DiMsqlServer, DiRedis, DiVisualstudio   } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"


const about = {
  title: "About Me",
  description: "I am proficient in JavaScript, TypeScript, React.js, TypeScript and Node.js and am a full-stack developer focused on building great solutions. I have completed over 40 projects using good software engineering practices, clean code and sharded architecture. I have extensive knowledge of PostgreSQL and M͏ongodb to ensure the reliability and usability of the database. The visual part focuses on making the interface accessible (if properly adapted) and SEO and UX friendly. In my experience, I worked as a FullStack developer at IT Works for many years, using React Angular Node.js, AWS and ͏ CI/CD ͏. Before that, I created over 30 websites with Driven Projects and helped improve leadership and teamwork as a Scrum Master. I am a Systems Analysis and Development student at Wyden and took a short course (1200 hours) in Software Engineering with Guided Education where I learned more about data forms, automation and testing. I also learned a little about Docker, GitHub Actions and AWS. I stand out for my organization and teamwork, but at the same time I look for new things. If you want a loyal person who really likes technology, let's talk 🚀",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Brendo Moreira"
    },
    {
      fieldName: "Phone",
      fieldValue:"+55(92)98211-3979"
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Portuguese(BR)"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badage.svg',
  title: 'My Experience',
  description: 'Here are my main experiences during my developer career.',
  items: [
    {
      company: 'Driven Projects',
      position: "Web Fullstack Developer",
      duration: "Apr 2023 – May 2024",
    },
    {
      company: 'IT Works S/A',
      position: "Fullstack Developer",
      duration: "Mai 2024 – Present",
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'My education was full of challenges and a lot of practical learning. Discover the main educational institutions where I specialized.',
  items: [
    {
      institution: 'Wyden Education',
      degree: "Systems Analysis and Development",
      duration: "2024 - 2026",
    },
    {
      institution: 'Driven',
      degree: "Full Stack Web Developement Bootcamp",
      duration: "2023",
    },
    {
      institution: 'Online Courses',
      degree: "Programming Courses",
      duration: "2022",
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "Discover the main tools I use to solve everyday programming problems",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML 5"
    },
    {
      icon: <FaCss3/>,
      name: "CSS 3"
    },
    {
      icon: <FaReact/>,
      name: "React.Js"
    },
    {
      icon: <FaNode/>,
      name: "Node.Js"
    },
    {
      icon: <FaAngular/>,
      name: "Angular"
    },
    {
      icon: <FaFigma/>,
      name: "Figma"
    },
    {
      icon: <FaGitAlt/>,
      name: "GIT"
    },
    {
      icon: <FaWindows/>,
      name: "Windows"
    },
    {
      icon: <FaDocker/>,
      name: "Docker"
    },
    {
      icon: <SiRedux/>,
      name: "Redux"
    },
    {
      icon: <SiTypescript/>,
      name: "TypeScript"
    },
    {
      icon: <SiExpress/>,
      name: "Express"
    },
    {
      icon: <SiNestjs/>,
      name: "Nest.Js"
    },
    {
      icon: <SiPrisma/>,
      name: "Prisma"
    },
    {
      icon: <SiJest/>,
      name: "Jest"
    },
    {
      icon: <SiStyledcomponents/>,
      name: "Styledcomponents"
    },
    {
      icon: <SiVite/>,
      name: "Vite"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.Js"
    },
    {
      icon: <SiAxios/>,
      name: "Axios"
    },
    {
      icon: <SiMongodb/>,
      name: "MongoDB"
    },
    {
      icon: <SiMysql/>,
      name: "MySQL"
    },
    {
      icon: <SiTypeorm/>,
      name: "TypeORM"
    },
    {
      icon: <SiReactquery/>,
      name: "ReactQuery"
    },
    {
      icon: <IoLogoJavascript/>,
      name: "JavaScript"
    },
    {
      icon: <PiTerminalWindowFill/>,
      name: "Windows Terminal"
    },
    {
      icon: <VscTerminalUbuntu/>,
      name: "Terminal Ubuntu"
    },
    {
      icon: <VscTerminalLinux/>,
      name: "Linux Terminal"
    },
    {
      icon: <RiTailwindCssFill/>,
      name: "TailWindCss"
    },
    {
      icon: <DiPostgresql/>,
      name: "PostgresSQL"
    },
    {
      icon: <DiMsqlServer/>,
      name: "SQL Server"
    },
    {
      icon: <DiRedis/>,
      name: "Redis"
    },
    {
      icon: <BsFiletypeSql/>,
      name: "SQL"
    },
    {
      icon: <FaPython/>,
      name: "Python"
    },
    {
      icon: <TbBrandCSharp/>,
      name: "C#"
    },
    {
      icon: <FaAws/>,
      name: "AWS"
    },
    {
      icon: <DiVisualstudio/>,
      name: "Visual Studio Code"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pb-20">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.institution}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
            <div className="w-full h-full">
              <div className="flex flex-col gap-[30px] pb-20">
                <div className="flex flex-col gap-[30px] text-left xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px] pb-20">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
