"use client";

import Link from "next/link"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"

const Links = [
  {name: "Home", path: "/"},
  {name: "Resume", path: "/resume"},
  {name: "Projects", path: "/projects"},
  {name: "Services", path: "/services"},
  {name: "Contact", path: "/contact"}
]

const Nav = () => {
  const pathname = usePathname()
  return (  
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link 
            key={index} 
            href={link.path} 
            className={`${pathname === link.path && 'text-accent border-b-2 border-accent'}
            capitalize font-medium hover:text-accent transation-all`}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav;
