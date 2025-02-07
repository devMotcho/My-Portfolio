function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }
  
function handleScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInRightElements = document.querySelectorAll('.slide-in-right');
    const slideInLeftElements = document.querySelectorAll('.slide-in-left');

    // Fade In
    fadeInElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  
    // Slide In Right
    slideInRightElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  
    // Slide In Left
    slideInLeftElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible'); 
      }
    });
  }
  

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  