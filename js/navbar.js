/**
 * Phoenix Code Website - Navigation Module
 * Handles navbar behavior for both floating and static modes
 */

// Configuration
let config = {
    mode: 'floating', // 'floating' or 'static'
    scrollOffset: 100
};

let navFixed = false;
let textInitiallyHidden = false;

/**
 * Handle navbar scroll behavior (floating mode only)
 */
function onWindowScroll() {
    const mainNav = document.getElementById('mainNav');
    const navFixedText = document.querySelector('.navFixed-text');

    if (!mainNav) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const shouldBeFixed = scrollTop > config.scrollOffset;

    if (shouldBeFixed !== navFixed) {
        navFixed = shouldBeFixed;

        if (navFixed) {
            mainNav.classList.add('navFixed');
            if (navFixedText) {
                navFixedText.classList.remove('hidden');
            }
        } else {
            mainNav.classList.remove('navFixed');
            if (navFixedText && textInitiallyHidden) {
                // Only hide text if it was initially hidden (like on index.html)
                navFixedText.classList.add('hidden');
            }
        }
    }
}

/**
 * Initialize scroll offset based on content (floating mode)
 */
function initScrollOffset() {
    const meetPhoenix = document.getElementById('meet-phoenix');
    if (meetPhoenix) {
        config.scrollOffset = meetPhoenix.offsetTop - 200;
    }
}

/**
 * Initialize floating navbar mode (for index.html)
 */
function initFloatingMode() {
    // Check if text is initially hidden
    const navFixedText = document.querySelector('.navFixed-text');
    if (navFixedText) {
        textInitiallyHidden = navFixedText.classList.contains('hidden');
    }

    initScrollOffset();
    window.addEventListener('scroll', onWindowScroll);
    // Check initial state
    onWindowScroll();
}

/**
 * Setup mobile hamburger menu toggle (both modes)
 */
function setupMobileToggle() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    if (navbarToggle && navbarCollapse) {
        navbarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navbarCollapse.classList.toggle('show');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbarCollapse.contains(e.target) && !navbarToggle.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
}

/**
 * Initialize the navbar with specified mode
 * @param {Object} options - Configuration options
 * @param {string} options.mode - 'floating' or 'static'
 * @param {number} options.scrollOffset - Offset for scroll trigger (only for floating mode)
 */
export function initNavbar(options = {}) {
    config = { ...config, ...options };

    setupMobileToggle();

    if (config.mode === 'floating') {
        initFloatingMode();
    }
    // Static mode doesn't need scroll listeners
}

// Auto-initialize if data-navbar-mode attribute exists
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const navElement = document.getElementById('mainNav');
        if (navElement) {
            const mode = navElement.getAttribute('data-navbar-mode') || 'floating';
            initNavbar({ mode });
        }
    });
} else {
    const navElement = document.getElementById('mainNav');
    if (navElement) {
        const mode = navElement.getAttribute('data-navbar-mode') || 'floating';
        initNavbar({ mode });
    }
}
