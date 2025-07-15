/* script.js */
// Toggle mobiel menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Dank voor je bericht! We nemen snel contact op.');
  e.target.reset();
});

// Smooth scroll voor ankerlinks
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Feature modals
const features = document.querySelectorAll('.feature');
features.forEach(f => {
  f.addEventListener('click', () => {
    const id = f.getAttribute('data-feature');
    document.getElementById(`modal-feature-${id}`).style.display = 'flex';
  });
});

const closes = document.querySelectorAll('.modal-close');
closes.forEach(c => {
  c.addEventListener('click', () => c.closest('.modal').style.display = 'none');
});

// Pricing details toggles
document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    if (details.style.maxHeight) {
      details.style.maxHeight = null;
    } else {
      details.style.maxHeight = details.scrollHeight + 'px';
    }
  });
});

/* script.js */
document.addEventListener('DOMContentLoaded',()=>{
  // Mobile menu toggle
  document.querySelector('.nav-toggle').addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'));
  
  // Contact form
  document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();alert('Dank voor je bericht! We nemen snel contact op.');e.target.reset();});

  // Feature links smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{if(link.getAttribute('href').startsWith('#')){e.preventDefault();document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});}}));

  // Pricing card click -> modal
  document.querySelectorAll('.pricing-card').forEach(card=>{
    card.addEventListener('click',()=>{
      const plan=card.getAttribute('data-plan');
      document.getElementById(`modal-plan-${plan}`).style.display='flex';
    });
  });
  document.querySelectorAll('.modal-close').forEach(btn=>btn.addEventListener('click',()=>btn.closest('.modal').style.display='none'));
});

