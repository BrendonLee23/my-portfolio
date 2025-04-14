"use client"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/BrendonLee23"
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/brendo-moreira-dev"
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/onebrendo"
  }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
          {social.icon}
        </Link>
        )
      })}
    </div>
  )
}

export default Socials
