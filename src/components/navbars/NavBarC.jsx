"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuBurger from "./MenuBurger";
import navLinks from "./NavLinks";
import buildHref from "@/lib/builHref";
import { usePageTransition } from "@/context/TransitionProvider";

export default function NavBarC() {
  const { navigate } = usePageTransition();
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0f1115]/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href={buildHref(pathname, "/home")} className="flex items-center">
          <img
            src="/images/logo.png"
            alt="LAYMA.dev studio web à Béziers"
            className="h-15 w-auto opacity-90 hover:opacity-100 transition rounded-md"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={buildHref(pathname, link.href)}
                className={`relative transition-colors duration-200 ${
                  isActive(buildHref(pathname, link.href))
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* DROPDOWN */}
              {link.children && (
                <ul className="absolute left-0 top-full pt-6 hidden group-hover:block">
                  <div className="bg-[#14161c] border border-white/5 rounded-xl shadow-2xl p-4 min-w-[200px] backdrop-blur-xl">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={buildHref(pathname, child.href)}
                          className={`block px-3 py-2 text-sm rounded-md transition ${
                            isActive(buildHref(pathname, child.href))
                              ? "text-white"
                              : "text-gray-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <Link
              href={buildHref(pathname, "/contact")}
              className="ml-6 px-5 py-2 rounded-lg bg-white text-black text-sm font-medium hover:opacity-90 transition"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* BURGER */}
        <div className="md:hidden">
          <MenuBurger />
        </div>
      </div>
    </nav>
  );
}
