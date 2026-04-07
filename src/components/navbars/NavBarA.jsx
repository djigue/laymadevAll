"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./NavLinks";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuBurger from "./MenuBurger";
import buildHref from "@/lib/builHref";
import { usePageTransition } from "@/context/TransitionProvider";

export default function Navbar() {
  const { navigate } = usePageTransition();
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const isActive = (href) => pathname === href;
  return (
    <>
      {/* ===== MOBILE TOP BAR ===== */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[9999] bg-slate-950 text-white flex items-center justify-between px-6 py-4">
        <img src="/images/logo.png" alt="logo" className="h-12 w-20" />
        <MenuBurger />
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden md:flex w-72 h-screen fixed top-0 left-0 bg-slate-950 text-gray-300 border-r border-slate-800 flex-col px-6 py-10 z-50">
        <div className="mb-16 flex flex-col items-center">
          <Link
            href={buildHref(pathname, "/home")}
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              navigate(buildHref(pathname, "/home"));
            }}
          >
            <img
              src="/images/logo.png"
              alt="LAYMA.dev studio web à Béziers"
              className="h-20 w-auto opacity-90 hover:opacity-100 transition rounded-md"
            />
          </Link>

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
                    {/* TEXTE = NAVIGATION */}
                    <Link
                      href={buildHref(pathname, link.href)}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(buildHref(pathname, link.href));
                      }}
                      className={`transition ${
                        isActive(buildHref(pathname, link.href))
                          ? "text-white font-semibold"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>

                    {/* BOUTON = DROPDOWN */}
                    <button
                      onClick={(e) => {
                        setOpenMenu(openMenu === index ? null : index);
                      }}
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
                            <Link
                              href={buildHref(pathname, child.href)}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(buildHref(pathname, child.href));
                              }}
                              className={`text-sm transition ${
                                isActive(buildHref(pathname, child.href))
                                  ? "text-white"
                                  : "text-gray-400 hover:text-white"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={buildHref(pathname, link.href)}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(buildHref(pathname, link.href));
                  }}
                  className={`transition ${
                    isActive(buildHref(pathname, link.href))
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
