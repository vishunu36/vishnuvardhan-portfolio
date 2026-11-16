"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealArticleProps = {
  children: ReactNode;
  className: string;
  delay: number;
};

export default function RevealArticle({
  children,
  className,
  delay,
}: RevealArticleProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}
