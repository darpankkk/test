/* ============================================================
   Darpan Studio — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       Bottom Navigation — active state highlight
    ---------------------------------------------------------- */
    const navItems = document.querySelectorAll('[data-nav]');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => {
                i.classList.remove('text-red-600', 'font-bold', 'scale-110');
                i.classList.add('text-[#e5e2e1]/40');
            });
            item.classList.add('text-red-600', 'font-bold', 'scale-110');
            item.classList.remove('text-[#e5e2e1]/40');
        });
    });

    /* ----------------------------------------------------------
       Menu Icon — toggle
    ---------------------------------------------------------- */
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            console.log('Menu clicked');
        });
    }

    /* ----------------------------------------------------------
       Contact Form — basic submit handler
    ---------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your inquiry has been received. We will be in touch shortly.');
            contactForm.reset();
        });
    }

});

/* ----------------------------------------------------------
   Video Modal Functions
---------------------------------------------------------- */
function openVideoModal(videoId) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    if (modal && iframe) {
        // Use youtube-nocookie for better privacy and compatibility
        // Avoid sending 'null' as origin during local file testing
        let embedUrl = 'https://www.youtube-nocookie.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1';
        if (window.location.origin !== 'null') {
            embedUrl += '&origin=' + window.location.origin;
        }
        iframe.src = embedUrl;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('video-iframe');
    if (modal && iframe) {
        modal.classList.add('hidden');
        iframe.src = '';
        document.body.style.overflow = '';
    }
}
