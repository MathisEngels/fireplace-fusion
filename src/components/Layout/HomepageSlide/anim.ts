export const expand = {
  initial: {
    top: 0,
  },
  enter: {
    top: "-100vh",
    transition: {
      duration: 0.4,
      delay: 1.5,
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

export const textContainer = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.4, delay: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const text = {
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
