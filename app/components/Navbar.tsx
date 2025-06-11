"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex gap-6">
        {navItems.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={clsx(
                "relative font-medium text-black transition-all duration-500",
                pathname === href ? "font-bold" : ""
              )}
            >
              <span className="block">{name}</span>
              <span className="absolute left-0 top-0 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
