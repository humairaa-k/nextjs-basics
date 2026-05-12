//lets do ittt
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", label: "Home"},
  { href: "/about", label: "About"},
  { href: "/contact", label: "Contact"},
  { href: "/projects", label: "Projects"},
]; 

export default function Navbar() {
  let pathname = usePathname();

  return (
    <header>
      <div className="container navbar-inner">
         <Link href="/" className="logo">
         Ayesha <span>.</span>
         </Link>

         <nav className="nav-links">
           {links.map((link) => {
             const isActive = pathname === link.href;
            
             return(
              <Link key={link.href} href={link.href} className={isActive? "nav-link active" : "nav-link"}>
              {link.label}
              </Link>
              )
           })
          }
         </nav>
      </div>
    </header>
  )
}

