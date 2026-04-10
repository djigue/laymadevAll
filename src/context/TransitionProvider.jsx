"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const TransitionContext = createContext({
  navigate: () => {},
  isTransitioning: false,
});

export function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState("forward");

  const historyStack = useRef([]);

  const DURATION = 400;

  const isStyleC = pathname.split("/")[1] === "styleC";

  const navigate = async (href) => {
    if (!href || href === pathname) return;

    // 🔥 détection direction
    const stack = historyStack.current;
    const index = stack.indexOf(href);

    if (index !== -1) {
      // retour arrière
      setDirection("back");
      stack.splice(index + 1);
    } else {
      // navigation avant
      setDirection("forward");
      stack.push(href);
    }

    setIsTransitioning(true);

    await new Promise((r) => setTimeout(r, DURATION));

    router.push(href, { scroll: false });
  };

  useEffect(() => {
    // init stack
    if (historyStack.current.length === 0) {
      historyStack.current.push(pathname);
    }

    // scroll top
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <TransitionContext.Provider
      value={{ navigate, isTransitioning, direction }}
    >
      {/* <div
        className={`
          page-transition
          ${isTransitioning ? "out" : "in"}
          ${isStyleC ? "styleC" : "styleA"}
          ${direction}
        `}
      > */}
      {children}
      {/* </div> */}
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => {
  return useContext(TransitionContext);
};
