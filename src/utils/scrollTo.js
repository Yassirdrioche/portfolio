export const scrollTo = (id, offset = 80) => {
  const element = document.getElementById(id);
  if (element) {
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
