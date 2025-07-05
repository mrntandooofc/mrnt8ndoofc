// Hide loading screen and show main content after2 seconds
setTimeout(() => {
 document.getElementById('loading-screen').style.display = 'none';
 document.getElementById('main-content').style.display = 'flex';
},2000);

// Function to join WhatsApp group
function joinWhatsAppGroup() {
 // Replace with your WhatsApp group link
 window.open('https://chat.whatsapp.com/FyKE4VkFZiqAx82RjMBpnM?mode=r_c', '_blank');
}

// Function to join WhatsApp channel
function joinWhatsAppChannel() {
 // Replace with your WhatsApp channel link
 window.open('https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J', '_blank');
}

// Function to fork GitHub repository
function forkGitHubRepo() {
 // Replace with your GitHub repository link
 window.open('https://github.com/mrnt4ndoofc/LADYBUG BOT', '_blank');
}

// Function to open bot
function openBot() {
 // Add your bot content or functionality here
 alert('Bot coming soon!');
}
