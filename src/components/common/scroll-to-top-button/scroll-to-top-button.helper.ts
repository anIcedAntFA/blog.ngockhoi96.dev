export function scrollToTop(isSmooth: boolean) {
  if (!isSmooth) document.documentElement.scrollTop = 0;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
