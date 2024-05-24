import { motion, Variants } from "framer-motion";
import React from "react";
import { expand, text, textContainer } from "./anim";

interface Props {
  children?: React.ReactNode;
}

export default function HomepageSlide({ children }: Props) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <>
      <motion.div className="fixed w-full h-screen left-0 top-0 z-10 bg-[#230c0c]" {...anim(expand)} />
      <motion.div className="fixed left-1/2 top-[40%] -translate-x-1/2 z-20 text-center text-5xl overflow-hidden" {...anim(textContainer)}>
        <motion.p {...anim(text)}>Fireplace Fusion</motion.p>
      </motion.div>
      {children}
    </>
  );
}
