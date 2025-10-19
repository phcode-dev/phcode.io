/**
 * Phoenix Code Downloads Page - JavaScript Module
 * Handles download URL fetching, platform detection, and user interactions
 */

// ============================================================================
// Constants and Configuration
// ============================================================================

const Platforms = {
    mac_intel: 'mac_intel',
    mac_m1: 'mac_m1',
    windows_x64: 'windows_x64',
    linux: 'linux',
    chrome_os: 'chrome_os',
    mobile: 'mobile',
    unknown: 'unknown'
};

const DownloadLabels = {
    windows_x64: "Windows x64 Installer",
    mac_m1: "Mac - Apple Silicon DMG",
    mac_intel: "Mac - Intel DMG",
    linux: "Linux x64",
    chrome_os: "Chrome OS App"
};

const API_URLS = {
    downloadUrls: 'https://updates.phcode.io/install.json',
    downloadCounts: 'https://public-stats.phcode.io/generated/download_counts.json'
};

// Chrome OS Play Store redirect URL
const CHROME_OS_URL = 'https://play.google.com/store/apps/details?id=prod.phcode.twa';

// Global state
let downloadUrls = {};
let currentPlatform = Platforms.unknown;
let isMobile = false;

// ============================================================================
// Platform Detection
// ============================================================================

function checkMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent) ||
           /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
}

function detectPlatform() {
    const platform = window.navigator.platform.toLowerCase();
    const userAgent = window.navigator.userAgent.toLowerCase();

    isMobile = checkMobile();

    if (isMobile) {
        currentPlatform = Platforms.mobile;
    } else if (userAgent.includes("cros")) {
        currentPlatform = Platforms.chrome_os;
    } else if (platform.includes("win")) {
        currentPlatform = Platforms.windows_x64;
    } else if (platform.includes("mac")) {
        // Detect Apple Silicon vs Intel
        // Note: This is a best-effort detection
        currentPlatform = Platforms.mac_m1; // Default to M1 for newer Macs
    } else if (platform.includes("linux")) {
        currentPlatform = Platforms.linux;
    } else {
        currentPlatform = Platforms.unknown;
    }

    return currentPlatform;
}

// ============================================================================
// API Data Fetching
// ============================================================================

function fetchDownloadUrls() {
    return fetch(API_URLS.downloadUrls)
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            downloadUrls = data['phcode.io.DownloadURL'] || {};
            console.log('Download URLs loaded:', downloadUrls);
            return downloadUrls;
        })
        .catch(function(error) {
            console.error('Failed to fetch download URLs:', error);
            // Use fallback URLs if API fails
            downloadUrls = {
                windows_x64: 'https://github.com/phcode-dev/phoenix-desktop/releases',
                mac_m1: 'https://github.com/phcode-dev/phoenix-desktop/releases',
                mac_intel: 'https://github.com/phcode-dev/phoenix-desktop/releases',
                linux: 'https://github.com/phcode-dev/phoenix-desktop/releases'
            };
            return downloadUrls;
        });
}

function fetchDownloadCount() {
    return fetch(API_URLS.downloadCounts)
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            console.log('Download count loaded:', data);
            return data;
        })
        .catch(function(error) {
            console.log('Could not fetch download count:', error);
            return null;
        });
}

// ============================================================================
// UI Update Functions
// ============================================================================

function updateDownloadStats(data) {
    if (!data || !data.totalDownloads) return;

    const totalDownloadsEl = document.getElementById('totalDownloads');
    const downloadProofLink = document.getElementById('downloadProofLink');

    if (totalDownloadsEl) {
        // Animate the number counting up
        animateNumber(totalDownloadsEl, 0, data.totalDownloads, 1500);
    }

    if (downloadProofLink && data.downloadProofLink) {
        downloadProofLink.href = data.downloadProofLink;
    }
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(function() {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

function highlightUserPlatform() {
    // Remove any existing active class
    document.querySelectorAll('.platform-card').forEach(function(card) {
        card.classList.remove('active');
    });

    // Highlight the current platform card
    // For Mac platforms, highlight the unified Mac card
    let platformCard;
    if (currentPlatform === Platforms.mac_m1 || currentPlatform === Platforms.mac_intel) {
        platformCard = document.getElementById('macCard');
    } else {
        platformCard = document.querySelector(`[data-platform="${currentPlatform}"]`);
    }

    if (platformCard) {
        platformCard.classList.add('active');
        // Scroll to the card on mobile
        if (window.innerWidth < 768) {
            setTimeout(function() {
                platformCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 500);
        }
    }
}

function updatePlatformCards() {
    // Update each platform card with download URL
    Object.keys(Platforms).forEach(function(platformKey) {
        const platform = Platforms[platformKey];
        if (platform === Platforms.mobile || platform === Platforms.unknown) return;

        const card = document.querySelector(`[data-platform="${platform}"]`);
        if (!card) return;

        const downloadBtn = card.querySelector('.platform-download-btn');
        if (!downloadBtn) return;

        // Remove loading state
        card.classList.remove('loading');

        // Set up click handler
        downloadBtn.onclick = function(e) {
            e.preventDefault();
            handlePlatformDownload(platform);
        };
    });
}

function handlePlatformDownload(platform) {
    console.log('Downloading for platform:', platform);

    if (platform === Platforms.chrome_os) {
        // Redirect to web editor for Chrome OS
        window.open(CHROME_OS_URL, '_blank');
        return;
    }

    const url = downloadUrls[platform];
    if (url) {
        // Create a temporary link and trigger download
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.warn('Download URL not available for platform:', platform);
        // Fallback to GitHub releases
        window.open('https://github.com/phcode-dev/phoenix-desktop/releases', '_blank');
    }
}

// ============================================================================
// Mac Dual Buttons Setup
// ============================================================================

function setupMacButtons() {
    const macCard = document.getElementById('macCard');
    if (!macCard) return;

    const macButtons = macCard.querySelectorAll('.platform-download-btn');
    macButtons.forEach(function(btn) {
        const platform = btn.getAttribute('data-platform');
        btn.onclick = function(e) {
            e.preventDefault();
            handlePlatformDownload(platform);
        };
    });
}

// ============================================================================
// Chrome OS Button Setup
// ============================================================================

function setupChromeOSButton() {
    const chromeOSCard = document.getElementById('chromeOSCard');
    if (!chromeOSCard) return;

    const chromeOSBtn = chromeOSCard.querySelector('.platform-download-btn');
    if (chromeOSBtn) {
        chromeOSBtn.onclick = function(e) {
            e.preventDefault();
            handlePlatformDownload(Platforms.chrome_os);
        };
    }
}

// ============================================================================
// Linux Copy Functionality
// ============================================================================

function setupLinuxCopy() {
    const linuxCopyBtn = document.getElementById('linuxCopyButton');
    const linuxCodeSnippet = document.getElementById('linuxCodeSnippet');

    if (!linuxCopyBtn || !linuxCodeSnippet) return;

    const buttonText = linuxCopyBtn.querySelector('.button-text');

    const copyCommand = function() {
        const codeText = linuxCodeSnippet.textContent;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(codeText).then(function() {
                updateCopyButtonState(linuxCopyBtn, buttonText);
            }).catch(function(err) {
                console.error('Failed to copy code: ', err);
            });
        } else {
            // Fallback for older browsers
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = codeText;
            tempTextarea.style.position = 'fixed';
            tempTextarea.style.opacity = '0';
            document.body.appendChild(tempTextarea);
            tempTextarea.select();
            document.execCommand('copy');
            document.body.removeChild(tempTextarea);
            updateCopyButtonState(linuxCopyBtn, buttonText);
        }
    };

    linuxCopyBtn.addEventListener('click', copyCommand);

    // Also allow clicking on the code snippet itself
    linuxCodeSnippet.addEventListener('click', copyCommand);
    linuxCodeSnippet.style.cursor = 'pointer';
}

function updateCopyButtonState(button, buttonText) {
    button.classList.add('copied-style');
    buttonText.textContent = 'Copied!';

    setTimeout(function() {
        button.classList.remove('copied-style');
        buttonText.textContent = 'Copy';
    }, 2000);
}

// Removed showCopyNotification function - no longer needed

// ============================================================================
// Initialization
// ============================================================================

function init() {
    console.log('Initializing downloads page...');

    // Add loading state only to cards that need API data (Windows only)
    const windowsCard = document.getElementById('windowsCard');
    if (windowsCard) windowsCard.classList.add('loading');

    // Detect user's platform
    detectPlatform();
    console.log('Detected platform:', currentPlatform);

    // Setup Linux copy functionality
    setupLinuxCopy();

    // Setup Mac dual buttons
    setupMacButtons();

    // Setup Web Editor button (no loading needed)
    const webEditorBtn = document.querySelector('.web-editor-card .platform-download-btn');
    if (webEditorBtn) {
        // Web Editor link is already set in HTML, no additional setup needed
    }

    // Setup Chrome OS button
    setupChromeOSButton();

    // Fetch data and update UI
    Promise.all([
        fetchDownloadUrls(),
        fetchDownloadCount()
    ]).then(function(results) {
        const urls = results[0];
        const stats = results[1];

        console.log('All data loaded');

        // Update UI
        updatePlatformCards();
        updateDownloadStats(stats);
        highlightUserPlatform();
    }).catch(function(error) {
        console.error('Failed to initialize downloads page:', error);
        // Still update cards with fallback URLs
        updatePlatformCards();
    });
}

// ============================================================================
// Main Entry Point
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for use in other scripts if needed
window.DownloadsPage = {
    detectPlatform: detectPlatform,
    handlePlatformDownload: handlePlatformDownload,
    currentPlatform: function() { return currentPlatform; }
};
