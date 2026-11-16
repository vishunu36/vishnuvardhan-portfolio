"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type HeroParallaxProps = {
  children: ReactNode;
};

export default function HeroParallax({ children }: HeroParallaxProps) {
  const floatingLayerRef = useRef<HTMLDivElement>(null);

  function resetFloatPosition() {
    if (floatingLayerRef.current) {
      floatingLayerRef.current.style.transform = "translate3d(0px, 0px, 0px)";
    }
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      resetFloatPosition();
      return;
    }

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const floatingLayer = floatingLayerRef.current;
    if (!width || !height || !floatingLayer) return;

    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;

    floatingLayer.style.transform = `translate3d(${-x * 12}px, ${-y * 8}px, 0px)`;
  }

  return (
    <div
      className="hero-art"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetFloatPosition}
    >
      <div className="hero-art-float" ref={floatingLayerRef}>
        {children}
      </div>
    </div>
  );
}
