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

// script.js

// 1) Pakket‑selectie
document.querySelectorAll('.pricing-card').forEach(card => {
  card.addEventListener('click', () => {
    // Verwijder geselecteerd van alle kaarten
    document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('selected'));
    // Voeg toe aan de aangeklikte kaart
    card.classList.add('selected');
  });
});

// 2) Simpele vertaling
const translations = {
  en: {
    nav_why: 'Why',
    nav_about: 'About us',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    hero_title: 'Peace of mind for you and your loved ones',
    hero_text: 'Easily manage your digital legacy: social media, photos, documents and more. Securely stored and transferable when needed.',
    hero_cta: 'Start free scan',
    hero_note: '* GDPR‑compliant: your privacy is protected.',
    why_title: 'Why Digital Security?',
    why_text: 'In our digital age, your online accounts, photos, documents and messages contain valuable memories and essential information. Without proper planning, these data often become inaccessible or scattered after death or unexpected events. Our solution ensures your loved ones know exactly how to manage, share, or preserve your digital legacy, saving them uncertainty, time and costs.',
    about_title: 'About NexLegacy',
    about_text: 'As family experts, digital specialists and legal advisors, we help individuals manage their online inheritance. We ensure your precious memories and important files remain available to the people you love.',
    features_title: 'What we offer',
    plan1_title: 'Basic',
    plan1_1: 'Legacy dashboard',
    plan1_2: 'Standard account scan',
    plan1_3: 'Email support',
    plan2_title: 'Plus',
    plan2_1: 'Everything in Basic',
    plan2_2: 'Premium storage',
    plan2_3: 'Priority support',
    plan3_title: 'Premium',
    plan3_1: 'Personal account manager',
    plan3_2: 'Annual check‑up',
    plan3_3: 'Extra storage options',
    pricing_title: 'Our plans',
    contact_title: 'Questions? We’re here to help',
    contact_name: 'Name*',
    contact_email: 'Email*',
    contact_phone: 'Phone (optional)',
    contact_message: 'Message',
    contact_send: 'Send',
    footer_text: '© 2025 NexLegacy. All rights reserved.'
  },
  fr: {
    nav_why: 'Pourquoi',
    nav_about: 'À propos',
    nav_features: 'Fonctionnalités',
    nav_pricing: 'Tarifs',
    nav_contact: 'Contact',
    hero_title: 'Tranquillité d’esprit pour vous et vos proches',
    hero_text: 'Gérez facilement votre héritage numérique : réseaux sociaux, photos, documents et plus encore. Stocké en toute sécurité et transférable au besoin.',
    hero_cta: 'Démarrer l’analyse gratuite',
    hero_note: '* Conformité RGPD : votre vie privée est protégée.',
    why_title: 'Pourquoi la sécurité numérique ?',
    why_text: 'À l’ère numérique, vos comptes en ligne, photos, documents et messages contiennent des souvenirs précieux et des informations essentielles. Sans planification appropriée, ces données deviennent souvent inaccessibles ou dispersées après un décès ou des événements imprévus. Notre solution garantit à vos proches de savoir exactement comment gérer, partager ou préserver votre héritage numérique, leur évitant ainsi incertitude, temps et coûts.',
    about_title: 'À propos de NexLegacy',
    about_text: 'En tant qu’experts familiaux, spécialistes du numérique et conseillers juridiques, nous aidons les particuliers à gérer leur héritage en ligne. Nous veillons à ce que vos souvenirs précieux et fichiers importants restent disponibles pour ceux que vous aimez.',
    features_title: 'Ce que nous offrons',
    plan1_title: 'Basique',
    plan1_1: 'Tableau de bord héritage',
    plan1_2: 'Analyse de compte standard',
    plan1_3: 'Support par email',
    plan2_title: 'Plus',
    plan2_1: 'Tout dans Basique',
    plan2_2: 'Stockage premium',
    plan2_3: 'Support prioritaire',
    plan3_title: 'Premium',
    plan3_1: 'Gestionnaire de compte personnel',
    plan3_2: 'Contrôle annuel',
    plan3_3: 'Options de stockage supplémentaires',
    pricing_title: 'Nos offres',
    contact_title: 'Des questions ? Nous sommes là',
    contact_name: 'Nom*',
    contact_email: 'Email*',
    contact_phone: 'Téléphone (facultatif)',
    contact_message: 'Message',
    contact_send: 'Envoyer',
    footer_text: '© 2025 NexLegacy. Tous droits réservés.'
  }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Activeer juiste knop
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const lang = btn.dataset.lang;
    // Vervang alle teksten op basis van data-key
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  });
});