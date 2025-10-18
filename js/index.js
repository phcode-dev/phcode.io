/**
 * Phoenix Code Website - Main JavaScript Module
 * Consolidated from multiple files for simpler deployment
 */

// ============================================================================
// Parallax Mouse Movement Effect
// ============================================================================

function initParallax() {
    const parent = document.getElementById('bannerParent');
    if (!parent) return;

    const parallaxElements = parent.querySelectorAll('.parallax-element');
    const elementHandlers = [];

    // Create update handler for each element
    parallaxElements.forEach(function(element) {
        const xMovementAttr = element.getAttribute('data-x-movement');
        const yMovementAttr = element.getAttribute('data-y-movement');
        const xMovement = xMovementAttr !== null ? parseFloat(xMovementAttr) : 10;
        const yMovement = yMovementAttr !== null ? parseFloat(yMovementAttr) : 10;

        const updateElPosition = function(e) {
            const mousePercentX = e.clientX / window.innerWidth;
            const mousePercentY = e.clientY / window.innerHeight;
            const posX = (mousePercentX * 2 - 1) * xMovement;
            const posY = (mousePercentY * 2 - 1) * yMovement;
            element.style.transform = `translate(${posX}px, ${posY}px)`;
        };

        elementHandlers.push(updateElPosition);
    });

    // Single mousemove handler that updates all elements
    const globalMouseMoveHandler = function(e) {
        elementHandlers.forEach(function(handler) {
            handler(e);
        });
    };

    // Add event listeners to parent
    parent.addEventListener('mouseenter', function() {
        document.addEventListener('mousemove', globalMouseMoveHandler);
    });

    parent.addEventListener('mouseleave', function() {
        document.removeEventListener('mousemove', globalMouseMoveHandler);
    });
}

// ============================================================================
// Download Button Functionality
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

// Correct API endpoints
const API_URLS = {
    downloadUrls: 'https://updates.phcode.io/install.json',
    downloadCounts: 'https://public-stats.phcode.io/generated/download_counts.json'
};

let downloadUrls = {};
let currentPlatform = Platforms.unknown;
let isMobile = false;

// Check if device is mobile
function checkMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent) ||
           /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4));
}

// Detect platform
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
        currentPlatform = Platforms.mac_m1;
    } else if (platform.includes("linux")) {
        currentPlatform = Platforms.linux;
    } else {
        currentPlatform = Platforms.unknown;
    }

    return currentPlatform;
}

// Update download button UI
function updateDownloadButton(platform) {
    console.log('updateDownloadButton called with platform:', platform);
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadLink = document.getElementById('downloadLink');
    const linuxInstruction = document.getElementById('linuxInstruction');
    const linuxMore = document.getElementById('linuxMore');
    const linuxCopyBtn = document.getElementById('linuxCopyBtn');
    const linuxCodeContainer = document.getElementById('linuxCodeContainer');
    const codeSnippet = document.getElementById('codeSnippet');
    const downloadButtonContainer = document.querySelector('.download-button');

    console.log('Elements found - downloadBtn:', !!downloadBtn);
    if (!downloadBtn) {
        console.warn('downloadBtn not found!');
        return;
    }

    // Handle Linux platform specially
    if (platform === Platforms.linux) {
        linuxInstruction?.classList.remove('hidden');
        linuxMore?.classList.remove('hidden');

        // Add linux-mode class to container for wider width
        downloadButtonContainer?.classList.add('linux-mode');

        // Hide regular download button, show Linux copy button and code snippet
        downloadBtn.classList.add('hidden');
        downloadLink.classList.add('hidden');
        linuxCopyBtn?.classList.remove('hidden');
        linuxCodeContainer?.classList.remove('hidden');

        // Set up click handlers for copy functionality
        if (linuxCopyBtn) {
            linuxCopyBtn.onclick = function() {
                copyLinuxCommand();
            };
        }
        if (linuxCodeContainer) {
            linuxCodeContainer.onclick = function() {
                copyLinuxCommand();
            };
        }
    } else {
        linuxInstruction?.classList.add('hidden');
        linuxMore?.classList.add('hidden');

        // Remove linux-mode class from container for normal width
        downloadButtonContainer?.classList.remove('linux-mode');

        // Show regular download button, hide Linux elements
        downloadBtn.classList.remove('hidden');
        linuxCopyBtn?.classList.add('hidden');
        linuxCodeContainer?.classList.add('hidden');

        let label = '';
        let url = '';

        if (platform === Platforms.mobile || platform === Platforms.unknown) {
            label = DownloadLabels[Platforms.windows_x64];
            url = downloadUrls[Platforms.windows_x64];
        } else {
            label = DownloadLabels[platform] || 'Download';
            url = downloadUrls[platform];
        }

        // Update the label
        const downloadLabel = document.getElementById('downloadLabel');
        console.log('Updating label - element found:', !!downloadLabel, 'label:', label);
        if (downloadLabel) {
            downloadLabel.textContent = label;
            console.log('Label updated to:', label);
        } else {
            console.warn('Could not find downloadLabel element to update!');
        }

        if (downloadLink && url) {
            downloadLink.href = url;
        }

        downloadBtn.onclick = function(e) {
            e.preventDefault();
            if (downloadLink && url) {
                downloadLink.href = url;
                downloadLink.click();
            } else {
                console.warn('Download URL not available yet. Please try again in a moment.');
            }
        };
    }
}

// Copy Linux install command
function copyLinuxCommand() {
    const codeText = 'wget -qO- https://updates.phcode.io/linux/installer.sh | bash';

    if (navigator.clipboard) {
        navigator.clipboard.writeText(codeText).then(function() {
            showCopiedNotification();
        }).catch(function(err) {
            console.error('Failed to copy code: ', err);
        });
    } else {
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = codeText;
        document.body.appendChild(tempTextarea);
        tempTextarea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextarea);
        showCopiedNotification();
    }
}

// Show copied notification
function showCopiedNotification() {
    const downloadBtn = document.getElementById('downloadBtn');
    if (!downloadBtn) return;

    const notification = document.createElement('span');
    notification.className = 'copied';
    notification.textContent = 'Copied to clipboard';
    downloadBtn.parentElement.style.position = 'relative';
    downloadBtn.parentElement.appendChild(notification);

    setTimeout(function() {
        notification.remove();
    }, 2000);
}

// Fetch download URLs from API
function fetchDownloadUrls() {
    fetch(API_URLS.downloadUrls)
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            // API returns format: {"phcode.io.DownloadURL": {...}}
            downloadUrls = data['phcode.io.DownloadURL'] || {};
            console.log('Download URLs loaded:', downloadUrls);
            updateDownloadButton(currentPlatform);
        })
        .catch(function(error) {
            console.error('Failed to fetch download URLs:', error);
            // Use fallback URLs if API fails
            downloadUrls = {
                windows_x64: 'https://github.com/phcode-dev/phoenix-desktop/releases',
                mac_m1: 'https://github.com/phcode-dev/phoenix-desktop/releases',
                mac_intel: 'https://github.com/phcode-dev/phoenix-desktop/releases'
            };
            updateDownloadButton(currentPlatform);
        });
}

// Fetch download count
function fetchDownloadCount() {
    fetch(API_URLS.downloadCounts)
        .then(function(response) {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(function(data) {
            const downloadCountElement = document.getElementById('downloadCount');
            const downloadCountSpan = document.getElementById('downloadCountSpan');
            const downloadProofLink = document.getElementById('downloadProofLink');

            if (downloadCountElement && data.totalDownloads) {
                downloadCountElement.textContent = data.totalDownloads.toLocaleString();
                downloadCountSpan?.classList.remove('hidden');

                if (downloadProofLink && data.downloadProofLink) {
                    downloadProofLink.href = data.downloadProofLink;
                }
            }
            console.log('Download count loaded:', data.totalDownloads);
        })
        .catch(function(error) {
            console.log('Could not fetch download count:', error);
        });
}

// Setup dropdown menu
function setupDropdown() {
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (!dropdownToggle || !dropdownMenu) return;

    dropdownToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        if (!dropdownMenu.contains(e.target) && !dropdownToggle.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });

    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item:not(.disabled)');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const platform = this.getAttribute('data-platform');
            console.log('Dropdown item clicked, platform:', platform);
            if (platform) {
                currentPlatform = platform;
                console.log('Calling updateDownloadButton with platform:', platform);
                updateDownloadButton(platform);
                dropdownMenu.classList.remove('show');
            }
        });
    });
}

// Initialize download functionality
function initDownload() {
    detectPlatform();
    setupDropdown();
    fetchDownloadUrls();
    fetchDownloadCount();
}

// Export for use in other scripts if needed
window.DownloadManager = {
    detectPlatform: detectPlatform,
    isMobile: function() { return isMobile; }
};

// ============================================================================
// Main Application - Video Overlays and Initialization
// ============================================================================

// Default video overlay configuration
const VIDEO_OVERLAY_CONFIG = [
  {
    "title": "Live Preview",
    "subtitle": "See your HTML and CSS code changes instantly, without page reloads! Use powerful UI tools like the colour editor to tweak background and text colours, adjust font sizes and border-radius with number dials, or explore page layouts with live code hints. <a href='https://docs.phcode.dev/docs/Features/Live%20Preview/live-preview' target='blank'>Read more...</a>",
    "titleIconSrc": "assets/images/preview_o.png",
    "videoSrc": "https://docs-images.phcode.dev/videos/phcode.io-site/live_preview.mp4"
  },
  {
    "title": "Code Intelligence for the Web",
    "subtitle": "Write HTML, CSS, and JavaScript faster with on-the-fly code completion and catch errors before they become problems. We're always adding better smarts to our code intelligence, making Phoenix Code sharper with every release. <a href='https://docs.phcode.dev/docs/Features/Problems%20Panel/html-lint/' target='blank'>Read more...</a>",
    "titleIconSrc": "assets/images/intelligence.png",
    "videoSrc": "https://docs-images.phcode.dev/videos/phcode.io-site/error_detect.mp4"
  },
  {
    "title": "Lightning-Fast Search",
    "subtitle": "Find exactly what you need across your entire project with Instant search. We've fine-tuned the UX to help you pinpoint your query faster: search within specific file types, exclude files and folders, or use regular expressions for complex queries. <a href='https://docs.phcode.dev/docs/Features/find-in-files/' target='blank'>Read more...</a>",
    "titleIconSrc": "assets/images/flash.gif",
    "videoSrc": "https://docs-images.phcode.dev/videos/phcode.io-site/find_in_files.mp4"
  },
  {
    "title": "Git Simplified",
    "subtitle": "Integrated Git source control with a clean, intuitive interface. Stage changes, commit, and sync with a single click while keeping your focus on the code. <a href='https://docs.phcode.dev/docs/Features/git' target='blank'>Read more...</a>",
    "titleIconSrc": "assets/images/git_branch_feature.svg",
    "videoSrc": "https://docs-images.phcode.dev/videos/phcode.io-site/git_video.mp4"
  }
];

// Create video overlay HTML
function createVideoOverlay(config) {
    const section = document.createElement('section');
    section.className = 'container d-flex-center mt-5';
    section.id = 'video-overlay';

    section.innerHTML = `
        <div class="row content-1 center-below-xs pt-4">
            <div class="col-md-6 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-md-12 mt-4 center-below-xs">
                        <div class="row text-lg-left text-xl-left text-md-left text-sm-center text-xs-center mb-sm-5 mb-xs-5">
                            <div class="row">
                                <span class="heading col-md-12 mb-4 text-accent">
                                    ${config.titleIconSrc ? `<img style="width: 50px" class="flash-img" src="${config.titleIconSrc}" alt="icon">` : ''}
                                    ${config.title}
                                </span>
                                <div class="description-light col-md-10">
                                    <div>${config.subtitle}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-sm-12 col-xs-12 mt-sm-4 mt-xs-4 text-sm-center text-xs-center text-lg-right text-xl-right text-md-right">
                ${config.videoSrc ? `<video src="${config.videoSrc}" muted autoplay loop controls></video>` : ''}
            </div>
        </div>
    `;

    return section;
}

// Load and display video overlays
function loadVideoOverlays() {
    const container = document.getElementById('videoOverlaysContainer');
    if (!container) return;
    VIDEO_OVERLAY_CONFIG.forEach(function(config) {
      const overlay = createVideoOverlay(config);
      container.appendChild(overlay);
    });
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize the application
function initApp() {
    setCurrentYear();
    loadVideoOverlays();
}

// ============================================================================
// Main Initialization
// ============================================================================

// Initialize all modules when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        initParallax();
        initDownload();
        initApp();
    });
} else {
    initParallax();
    initDownload();
    initApp();
}
