import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { expand, textContainer, textFade, textFadeFromBehind } from "./anim";

interface Props {
  children: React.ReactNode;
  text?: string;
  delay?: number;
  textEffect?: "fadeFromBehind" | "fade";
}

export default function Slide({ children, text, delay = 0.75, textEffect = "fade" }: Props) {
  const router = useRouter();
  const routeMap = {
    "/": "Fireplace Fusion",
    "/cheminees-et-poeles": "Cheminees et Poêles",
    "/poeles": "Poêles",
    "/accessoires": "Accessoires",
    "/contact": "Contact",
  };
  if (!text) text = routeMap[router.route as keyof typeof routeMap];

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
      <motion.div className="fixed w-full h-screen left-0 top-0 bg-[#230c0c] z-40" {...anim(expand(delay))} />
      <motion.div className="fixed left-1/2 top-[40%] -translate-x-1/2 z-50 text-center text-5xl overflow-hidden" {...anim(textContainer(delay))}>
        <motion.p {...anim(textEffect === "fade" ? textFade : textFadeFromBehind)}>{text}</motion.p>
      </motion.div>
      {children}
    </>
  );
}
