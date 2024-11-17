export function animateEntryForElement(element: any) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry?.isIntersecting) {
        // @ts-ignore
        this.show = true;
      } else {
        // @ts-ignore
        this.show = false;
      }
    })
  })
  observer.observe(element);
}
