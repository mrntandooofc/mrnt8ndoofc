function showSection(sectionId) {
    var sections = document.querySelectorAll('.dashboard-item');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function joinWhatsAppGroup() {
    // Add code to join WhatsApp group
}

function joinWhatsAppChannel() {
    // Add code to join WhatsApp channel
}

function forkGitHubRepo() {
    // Add code to fork GitHub repository
}

function openBot() {
    // Add code to open bot
}

// Initialize particles.js
particlesJS.load('animated-background', 'particles.json', function() {
    console.log('Particles.js loaded');
});
