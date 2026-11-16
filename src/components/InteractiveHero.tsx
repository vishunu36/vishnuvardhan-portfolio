"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function InteractiveHero() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const wideScreen = window.matchMedia("(min-width: 760px)");

    const updateScene = () => {
      setShouldLoad(
        !reducedMotion.matches && finePointer.matches && wideScreen.matches,
      );
    };

    updateScene();
    reducedMotion.addEventListener("change", updateScene);
    finePointer.addEventListener("change", updateScene);
    wideScreen.addEventListener("change", updateScene);
    return () => {
      reducedMotion.removeEventListener("change", updateScene);
      finePointer.removeEventListener("change", updateScene);
      wideScreen.removeEventListener("change", updateScene);
    };
  }, []);

  return (
    <div className="interactive-hero" aria-hidden="true">
      {shouldLoad && <HeroScene />}
    </div>
  );
}
