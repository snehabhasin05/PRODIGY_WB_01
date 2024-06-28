// Select elements
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__links .link');

// Change background color of the menu when scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = 'transparent'; // Change to your desired color
  } else {
    nav.style.backgroundColor = 'transparent'; // Change to your desired color
  }
});

// Change font color of menu items when hovered over
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#f3f4f6'; // Change to your desired color
  });

  link.addEventListener('mouseleave', () => {
    link.style.color = '#005eff'; // Change to your desired color
  });
});
