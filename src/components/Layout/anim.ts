export const expand = (delay: number) => {
  return {
    initial: {
      top: 0,
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.4,
        delay: delay,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      top: "0",
      transition: {
        duration: 0.4,
        delay: 0.05,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
};

export const textContainer = (delay: number) => {
  return {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: { duration: 0.4, delay, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const textFade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

export const textFadeFromBehind = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};
