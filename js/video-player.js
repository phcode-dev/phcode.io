/**
 * Video Player Web Component
 * Custom video player with play/pause, progress bar, fullscreen, and optional audio controls
 */

class VideoPlayer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const src = this.getAttribute('src');
        const audioControls = this.hasAttribute('audio-controls');

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                .video-container {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .video-container .feature-video {
                    width: 100%;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    display: block;
                    cursor: pointer;
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                }

                .video-controls {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 0 0 8px 8px;
                }

                .video-container:hover .video-controls {
                    opacity: 1;
                }

                .play-pause-btn,
                .fullscreen-btn,
                .volume-btn {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    transition: transform 0.2s ease;
                    flex-shrink: 0;
                }

                .play-pause-btn:hover,
                .fullscreen-btn:hover,
                .volume-btn:hover {
                    transform: scale(1.1);
                }

                .play-pause-btn svg,
                .fullscreen-btn svg,
                .volume-btn svg {
                    width: 24px;
                    height: 24px;
                }

                .progress-bar {
                    flex: 1;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 3px;
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                }

                .progress-filled {
                    height: 100%;
                    background: var(--accent-color, #ff6b6b);
                    width: 0%;
                    transition: width 0.1s linear;
                    border-radius: 3px;
                }

                .hidden {
                    display: none !important;
                }
            </style>

            <div class="video-container">
                <video class="feature-video" src="${src}" muted autoplay loop playsinline controlsList="nodownload noremoteplayback" disablePictureInPicture></video>
                <div class="video-controls">
                    <button class="play-pause-btn" aria-label="Play/Pause">
                        <svg class="play-icon hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <svg class="pause-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                    </button>
                    <div class="progress-bar">
                        <div class="progress-filled"></div>
                    </div>
                    ${audioControls ? `
                    <button class="volume-btn" aria-label="Mute/Unmute">
                        <svg class="volume-on-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                        <svg class="volume-off-icon hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        </svg>
                    </button>
                    ` : ''}
                    <button class="fullscreen-btn" aria-label="Fullscreen">
                        <svg class="fullscreen-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                        </svg>
                        <svg class="exit-fullscreen-icon hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        this.initControls();
    }

    initControls() {
        const videoContainer = this.shadowRoot.querySelector('.video-container');
        const video = this.shadowRoot.querySelector('.feature-video');
        const playPauseBtn = this.shadowRoot.querySelector('.play-pause-btn');
        const playIcon = this.shadowRoot.querySelector('.play-icon');
        const pauseIcon = this.shadowRoot.querySelector('.pause-icon');
        const progressBar = this.shadowRoot.querySelector('.progress-bar');
        const progressFilled = this.shadowRoot.querySelector('.progress-filled');
        const fullscreenBtn = this.shadowRoot.querySelector('.fullscreen-btn');
        const fullscreenIcon = this.shadowRoot.querySelector('.fullscreen-icon');
        const exitFullscreenIcon = this.shadowRoot.querySelector('.exit-fullscreen-icon');
        const volumeBtn = this.shadowRoot.querySelector('.volume-btn');
        const volumeOnIcon = this.shadowRoot.querySelector('.volume-on-icon');
        const volumeOffIcon = this.shadowRoot.querySelector('.volume-off-icon');

        if (!video || !playPauseBtn) return;

        // Toggle play/pause
        const togglePlayPause = () => {
            if (video.paused) {
                video.play();
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            } else {
                video.pause();
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }
        };

        // Play/pause button click
        playPauseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlayPause();
        });

        // Video click
        video.addEventListener('click', () => {
            togglePlayPause();
        });

        // Video double-click for fullscreen
        video.addEventListener('dblclick', () => {
            if (fullscreenBtn) {
                fullscreenBtn.click();
            }
        });

        // Update progress bar
        video.addEventListener('timeupdate', () => {
            const percent = (video.currentTime / video.duration) * 100;
            progressFilled.style.width = percent + '%';
        });

        // Click on progress bar to seek
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            video.currentTime = pos * video.duration;
        });

        // Fullscreen functionality
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement && !document.webkitFullscreenElement &&
                    !document.mozFullScreenElement && !document.msFullscreenElement) {
                    // Enter fullscreen
                    if (videoContainer.requestFullscreen) {
                        videoContainer.requestFullscreen();
                    } else if (videoContainer.webkitRequestFullscreen) {
                        videoContainer.webkitRequestFullscreen();
                    } else if (videoContainer.mozRequestFullScreen) {
                        videoContainer.mozRequestFullScreen();
                    } else if (videoContainer.msRequestFullscreen) {
                        videoContainer.msRequestFullscreen();
                    }
                } else {
                    // Exit fullscreen
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            });

            // Update fullscreen icon
            const updateFullscreenIcon = () => {
                if (document.fullscreenElement === videoContainer ||
                    document.webkitFullscreenElement === videoContainer ||
                    document.mozFullScreenElement === videoContainer ||
                    document.msFullscreenElement === videoContainer) {
                    fullscreenIcon.classList.add('hidden');
                    exitFullscreenIcon.classList.remove('hidden');
                } else {
                    fullscreenIcon.classList.remove('hidden');
                    exitFullscreenIcon.classList.add('hidden');
                }
            };

            document.addEventListener('fullscreenchange', updateFullscreenIcon);
            document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
            document.addEventListener('mozfullscreenchange', updateFullscreenIcon);
            document.addEventListener('msfullscreenchange', updateFullscreenIcon);
        }

        // Volume/mute functionality (if audio controls enabled)
        if (volumeBtn && volumeOnIcon && volumeOffIcon) {
            volumeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                video.muted = !video.muted;
                if (video.muted) {
                    volumeOnIcon.classList.add('hidden');
                    volumeOffIcon.classList.remove('hidden');
                } else {
                    volumeOnIcon.classList.remove('hidden');
                    volumeOffIcon.classList.add('hidden');
                }
            });
        }

        // Show controls on hover
        videoContainer.addEventListener('mouseenter', () => {
            this.shadowRoot.querySelector('.video-controls').style.opacity = '1';
        });

        videoContainer.addEventListener('mouseleave', () => {
            this.shadowRoot.querySelector('.video-controls').style.opacity = '0';
        });

        // Sync play/pause state with video events
        video.addEventListener('playing', () => {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        });

        video.addEventListener('pause', () => {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        });

        // Handle autoplay state
        video.addEventListener('loadedmetadata', () => {
            if (video.autoplay && !video.paused) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            }
        });

        video.addEventListener('canplay', () => {
            if (!video.paused) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            }
        });

        // Initialize button state for autoplay
        if (video.hasAttribute('autoplay')) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        }
    }
}

// Define the custom element
customElements.define('video-player', VideoPlayer);
