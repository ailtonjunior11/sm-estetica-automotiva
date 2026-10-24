gsap.registerPlugin(ScrollTrigger); // Registrar o plugin ScrollTrigger para animações baseadas em rolagem.

// Seção Hero
gsap.fromTo(
  ".gsap-hero",
  {
    x: -100,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    x: 0,
    duration: 1,
    ease: "power1.inOut",
    opacity: 1,
    stagger: 0.3,
  },
);

// Seção Serviços
gsap.fromTo(
  ".section-heading-centered",
  {
    y: -100,
    opacity: 0,
    ease: "power1.inOut",
  },
  {
    y: 0,
    duration: 1.5,
    ease: "power1.inOut",
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".section-heading-centered",
      start: "top 75%",
      end: "bottom 30%",
    },
  },
);

gsap.fromTo(
  ".service-card",
  {
    y: 50,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    y: 0,
    duration: 1,
    ease: "power1.inOut",
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".service-card",
      start: "top 70%",
      end: "bottom 20%",
    },
  },
);

// Seção Sobre
gsap.fromTo(
  ".about-heading",
  {
    y: -80,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    y: 0,
    duration: 0.2,
    ease: "power1.inOut",
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".about-heading",
      start: "top 90%",
      end: "bottom 10%",
    },
  },
);

gsap.fromTo(
  ".feature-grid",
  {
    y: 80,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    y: 0,
    duration: 0.2,
    ease: "power1.inOut",
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".feature-grid",
      start: "top 100%",
      end: "bottom 40%",
    },
  },
);

// Seção Galeria
gsap.fromTo(
  ".gallery-item",
  {
    y: 80,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "power1.inOut",
    opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".gallery-item",
      start: "top 85%",
      end: "bottom 40%",
    },
  },
);

// Seção Depoimentos
gsap.fromTo(
  ".testimonial-grid",
  {
    x: 40,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    x: 0,
    duration: 1,
    ease: "power1.inOut",
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".testimonial-grid",
      start: "top 100%",
      end: "bottom 30%",
    },
  },
);

// Seção Duvidas
gsap.fromTo(
  ".faq-heading",
  {
    x: -30,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    x: 0,
    duration: 1,
    ease: "power1.inOut",
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".faq-heading",
      start: "top 85%",
      end: "bottom 40%",
    },
  },
);

gsap.fromTo(
  ".faq-list",
  {
    x: 30,
    ease: "power1.inOut",
    opacity: 0,
  },
  {
    x: 0,
    duration: 1,
    ease: "power1.inOut",
    opacity: 1,
    scrollTrigger: {
      scrub: 1,
      trigger: ".faq-list",
      start: "top 90%",
      end: "bottom 40%",
    },
  },
);
