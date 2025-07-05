// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading delay
    setTimeout(function() {
        // Hide loading screen and show main content
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';

        // Initialize background audio control
        const backgroundAudio = document.getElementById('background-audio');
        backgroundAudio.volume = 0.5; // Adjust volume

        // Optional: Add event listener to toggle audio on user interaction
        document.addEventListener('click', function() {
            if (backgroundAudio.paused) {
                backgroundAudio.play().catch(function(error) {
                    console.log('Background audio play failed:', error);
                });
            }
        });

        // Initialize Particles.js for animated background
        particlesJS('animated-background', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
// Loading Screen
window.addEventListener('load', () => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

// Background Audio
const backgroundAudio = document.getElementById('background-audio');
backgroundAudio.play();

// Menu Section
function showPage(page) {
    const pages = ['dashboard', 'whatsapp', 'github', 'bot', 'features', 'testimonials', 'bots', 'pair-site'];
    pages.forEach((p) => {
        document.getElementById(`${p}-page`).style.display = 'none';
    });
    document.getElementById(`${page}-page`).style.display = 'block';
}

// WhatsApp Page
function joinWhatsAppGroup() {
    // Add WhatsApp group link
    window.open('https://chat.whatsapp.com/FyKE4VkFZiqAx82RjMBpnM?mode=r_c', '_blank');
}

function joinWhatsAppChannel() {
    // Add WhatsApp channel link
    window.open('https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J', '_blank');
}

// GitHub Page
function forkGitHubRepo() {
    // Add GitHub repository link
    window.open('https://github.com/mrntandooofc/LADYBUG-BOT', '_blank');
}

// Bot Page
function openBot() {
    // Add bot link or functionality
    alert('Bot opened!');
}

// Animated Background
particlesJS('animated-background', {
    particles: {
        number: {
            value: 100,
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: 3,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});
