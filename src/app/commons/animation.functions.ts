import { WritableSignal } from '@angular/core';
export function animateEntryForElement(element: HTMLElement, show: WritableSignal<boolean>) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        show.set(true);
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px' // triggers 100px before it fully enters viewport
  });
  observer.observe(element);
}
