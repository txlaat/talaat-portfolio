"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("header nav a");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150; // Offset for better timing
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        // Check if current scroll position is within this section
        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) {
              activeLink.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="floating-nav">
        <div className="logo">Talaat</div>

        <ul className="nav-links">
          <li>
            <Link href="#home" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
