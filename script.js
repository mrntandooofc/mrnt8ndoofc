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
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }, 2000); // Adjust the timeout as needed
});

// Function to show different pages
function showPage(pageId) {
    // List of all page IDs
    const pages = ['dashboard', 'whatsapp', 'github', 'bot', 'features', 'testimonials', 'bots', 'pair-site'];

    // Hide all pages
    pages.forEach(function(id) {
        document.getElementById(`${id}-page`).style.display = 'none';
    });

    // Show the selected page
    document.getElementById(`${pageId}-page`).style.display = 'block';
}

// Example functions for button clicks
function joinWhatsAppGroup() {
    console.log('Join WhatsApp Group clicked');
    // Add functionality here
}

function joinWhatsAppChannel() {
    console.log('Join WhatsApp Channel clicked');
    // Add functionality here
}

function forkGitHubRepo() {
    console.log('Fork GitHub Repo clicked');
    // Add functionality here
}

function openBot() {
    console.log('Open Bot clicked');
    // Add functionality here
}
