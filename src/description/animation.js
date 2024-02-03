export const slideUp = {
  enter: (i) => ({
    y: 0,
    transition: { duration: 0.5, delay: i },
  }),
  exit: {
    y: "100%",
  },
};

export const aside = {
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    y: "50%",
  },
};
