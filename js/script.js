   // Theme Toggle
        function toggleTheme() {
            document.body.classList.toggle('light-theme');
        }

        // Swiper Initialization
        const swiper = new Swiper('.projectSwiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop : true,
            autoplay: {
                delay: 1300,
                disableOnInteraction: false,
                smoothTransition: true,
            },
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });

        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        gsap.from('.profile-img', {
            duration: 1,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)'
        });

        gsap.from('.name', {
            duration: 1,
            y: 100,
            opacity: 0,
            delay: 0.3,
            ease: 'power4.out'
        });

        gsap.from('.title', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: 'power4.out'
        });

        gsap.from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.7,
            ease: 'power4.out'
        });

        gsap.from('.cta-buttons', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.9,
            ease: 'power4.out'
        });

        // Section Titles Animation
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                },
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out'
            });
        });

        // Skill Cards Animation
        gsap.utils.toArray('.skill-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                },
                duration: 0.8,
                y: 60,
                opacity: 0,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });

        // About Content Animation
        gsap.from('.about-content p', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
            },
            duration: 1,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Contact Animation
        gsap.from('.contact-content', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: 'top 80%',
            },
            duration: 1,
            scale: 0.9,
            opacity: 0,
            ease: 'back.out(1.7)'
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile Menu
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
});

//            <script>
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Navbar Anim
// gsap.from("nav", {
//     y: -100,
//     opacity: 0,
//     duration: 1,
//     ease: "power4.out"
// });

// // Hero Animations
// gsap.from(".profile-img", {
//     scale: 0,
//     opacity: 0,
//     duration: 1,
//     ease: "back.out(1.7)",
//     delay: 0.3
// });

// gsap.from(".name", {
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     delay: 0.6
// });

// gsap.from(".title", {
//     y: 30,
//     opacity: 0,
//     duration: 1,
//     delay: 0.9
// });

// gsap.from(".hero-subtitle", {
//     y: 30,
//     opacity: 0,
//     duration: 1,
//     delay: 1.2
// });

// gsap.from(".cta-buttons a", {
//     y: 30,
//     opacity: 0,
//     duration: 0.8,
//     stagger: 0.2,
//     delay: 1.5
// });

// // Section Scroll Animations
// gsap.utils.toArray("section").forEach(section => {
//     gsap.from(section, {
//         opacity: 0,
//         y: 80,
//         duration: 1,
//         scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//         }
//     });
// });

// // Skill Cards Animation
// gsap.from(".skill-card", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.15,
//     duration: 0.8,
//     scrollTrigger: {
//         trigger: ".skills-grid",
//         start: "top 80%"
//     }
// });

// // Project Cards Animation
// gsap.from(".swiper-slide", {
//     scale: 0.85,
//     opacity: 0,
//     stagger: 0.15,
//     duration: 0.8,
//     scrollTrigger: {
//         trigger: ".projectSwiper",
//         start: "top 80%"
//     }
// });

// // Timeline Animation
// gsap.from(".timeline-item", {
//     opacity: 0,
//     x: -50,
//     stagger: 0.3,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".timeline",
//         start: "top 80%"
//     }
// });

// // Smooth Scroll Using GSAP
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         gsap.to(window, {
//             duration: 1,
//             scrollTo: this.getAttribute('href'),
//             ease: "power2.inOut"
//         });
//     });
// });


// // Swiper Slider
// const swiper = new Swiper('.projectSwiper', {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         768: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//     }
// });

// // Contact Form Fake Submit
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const msg = document.getElementById('formMessage');
//     msg.textContent = "Message sent successfully 🚀";
//     msg.className = "form-message success";
//     this.reset();
// });
// </script>
