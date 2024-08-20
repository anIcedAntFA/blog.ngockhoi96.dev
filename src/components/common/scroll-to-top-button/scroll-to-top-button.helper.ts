export function scrollToTop(isSmooth: boolean) {
  if (!isSmooth) {
    document.documentElement.scrollTop = 0;
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
