export const titlesAnimation = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.5 },
}

export const projectAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
}

export const CardProjectAnimation = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.5 },
}
export const ImgProjectAnimation = {
  initial: { opacity: 0, y: 100, scale: 0.5 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 100, scale: 0.5 },
  transition: { duration: 0.5, delay: 0.3 },
}
