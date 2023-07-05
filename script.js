// Add smooth scrolling to nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
   
// Handle smooth scrolling when a link is clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const topOffset = target.offsetTop - 60; // Adjust the value to match the padding-top value
  
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    });
  });