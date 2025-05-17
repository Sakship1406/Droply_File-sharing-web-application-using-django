// Smooth Hover Effect for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#ff4e50';
    link.style.transition = 'color 0.3s';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#333';
    link.style.transition = 'color 0.3s';
  });
});

// File Upload Button Animation
document.querySelectorAll('.upload-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#cce7ff';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.style.backgroundColor = '#333';
      btn.style.color = '#fff';
    }, 300);
  });
});

// Image Click Animation
document.querySelectorAll('.file-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.transform = 'scale(1.1)';
    setTimeout(() => {
      icon.style.transform = 'scale(1)';
    }, 200);
  });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
