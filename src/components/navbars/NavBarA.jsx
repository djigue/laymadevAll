"use client";

import { usePathname } from "next/navigation";
import navLinks from "./NavLinks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuBurger from "./MenuBurger";
import TransitionLink from "../TransitionLink";
import buildHref from "@/lib/builHref";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* ===== MOBILE TOP BAR ===== */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-slate-950 text-white flex items-center justify-between px-6 py-4 relative z-[10000]">
        <TransitionLink
          href={buildHref(pathname, "/home")}
          className="flex items-center"
        >
          <img
            src="/images/logo.png"
            alt="LAYMA.dev studio web à Béziers"
            className="h-12 w-20 opacity-90 hover:opacity-100 transition rounded-md"
          />
        </TransitionLink>

        <MenuBurger />
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden md:flex w-72 h-screen fixed top-0 left-0 bg-slate-950 text-gray-300 border-r border-slate-800 flex-col px-6 py-10 z-[10000]">
        <div className="mb-16 flex flex-col items-center">
          <TransitionLink
            href={buildHref(pathname, "/home")}
            className="flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="LAYMA.dev studio web à Béziers"
              className="h-20 w-auto opacity-90 hover:opacity-100 transition rounded-md"
            />
          </TransitionLink>

          <p className="text-xs text-gray-500 mt-2">
            Studio digital & solutions tech
          </p>
        </div>

        <ul className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.children ? (
                <div>
                  <div className="flex items-center justify-between">
                    <TransitionLink
                      href={buildHref(pathname, link.href)}
                      className={`transition ${
                        isActive(buildHref(pathname, link.href))
                          ? "text-white font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </TransitionLink>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === index ? null : index)
                      }
                      className="ml-2 text-lg cursor-pointer text-gray-300 hover:text-white"
                    >
                      {openMenu === index ? "−" : "+"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {openMenu === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-3 mt-2 flex flex-col gap-2"
                      >
                        {link.children.map((child, i) => (
                          <li key={i}>
                            <TransitionLink
                              href={buildHref(pathname, child.href)}
                              className={`text-sm transition ${
                                isActive(buildHref(pathname, child.href))
                                  ? "text-white"
                                  : "text-gray-400 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </TransitionLink>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <TransitionLink
                  href={buildHref(pathname, link.href)}
                  className={`transition ${
                    isActive(buildHref(pathname, link.href))
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </TransitionLink>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
