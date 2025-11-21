console.log("VEXROA website loaded successfully!");
// small interactions: year + mobile toggle
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.links');
  if(toggle && navLinks){
    toggle.addEventListener('click', ()=> {
      if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
      else navLinks.style.display = 'flex';
    });
  }
});


