export const slideUp = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100dvh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const heightSvg = {
  initial: {
    height: 229,
  },
  exit: {
    height: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1.5,
    transition: { duration: 2, ease: [0.76, 0, 0.24, 1] },
  },
};
