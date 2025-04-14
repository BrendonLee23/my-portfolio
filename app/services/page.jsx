"use client"

import { BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    num: "1",
    title: "Web Application Development",
    description: "Creation of complete systems, such as e-commerce, administrative dashboards and management platforms. Technologies: React, Next.js, Vue.js, Node.js, etc..",
    href: ""
  },
  {
    num: "2",
    title: "API and Integration Development",
    description: "Building RESTful and GraphQL APIs to connect systems and applications. Integration with third-party services (payments, social networks, CRMs, etc.)..",
    href: ""
  },
  {
    num: "3",
    title: "Application Maintenance and Technical Support",
    description: "Bug fixes, software updates and ongoing technical support for existing systems.",
    href: ""
  },
  {
    num: "4",
    title: "Process Automation and Bots",
    description: "Development of bots for customer service (chatbots, WhatsApp, Telegram). Automation of repetitive tasks (data extraction, sending emails, web scraping, etc.). Use of RPA (Robotic Process Automation) to optimize workflows.",
    href: ""
  },
]


    
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {
              delay:2.4,
              duration:0.4,
              ease: "easeIn",
            }
          }}    
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "      
          >
            {services.map((service, index) => 
            {
              return(
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  {/* Top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover cursor-default transition-all duration-700">{service.num}</div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-700 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  {/* heading */}
                  <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-700">{service.title}</h2>
                  {/* description */}
                  <p>{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
