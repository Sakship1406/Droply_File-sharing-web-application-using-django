document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    link.style.transform = 'scale(1.2)';
    setTimeout(() => {
      link.style.transform = 'scale(1)';
      window.location.href = link.href;  // navigate after animation
    }, 300);
  });
});
