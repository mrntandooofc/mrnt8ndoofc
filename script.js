// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', init);

// Initialize the application
function init() {
  // Hide loading screen and show main content
  hideLoadingScreen();

  // Initialize background audio control
  initBackgroundAudio();

  // Initialize Particles.js for animated background
  initParticlesJS();
}

// Hide loading screen and show main content
function hideLoadingScreen() {
  document.getElementById('loading-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}

// Initialize background audio control
function initBackgroundAudio() {
  const backgroundAudio = document.getElementById('background-audio');
  backgroundAudio.volume = 0.5; // Adjust volume

  // Play audio on user interaction
  document.addEventListener('click', () => {
    if (backgroundAudio.paused) {
      backgroundAudio.play().catch((error) => {
        console.log('Background audio play failed:', error);
      });
    }
  });
}

// Initialize Particles.js for animated background
function initParticlesJS() {
  particlesJS('animated-background', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
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
        speed: 6,
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
}

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
  window.open('https://chat.whatsapp.com/FyKE4VkFZiqAx82RjMBpnM?mode=r_c', '_blank');
}

function joinWhatsAppChannel() {
  window.open('https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J', '_blank');
}

// GitHub Page
function forkGitHubRepo() {
  window.open('https://github.com/mrntandooofc/LADYBUG-BOT', '_blank');
}

// Bot Page
function openBot() {
  alert('Bot opened!');
}
