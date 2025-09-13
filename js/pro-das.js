// Set the current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle functionality
document.getElementById('mobileMenuButton').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
    
    // Toggle between hamburger and close icon
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
        const navMenu = document.getElementById('navMenu');
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            // Reset menu icon
            const icon = document.querySelector('.mobile-menu-btn i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Simple interaction for management items
document.querySelectorAll('.management-item .btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.management-item');
        const title = item.querySelector('h3').textContent;
        alert(`${title} section would open here.`);
    });
});

// Settings items interaction
document.querySelectorAll('.setting-item').forEach(item => {
    item.addEventListener('click', function() {
        const settingName = this.querySelector('span').textContent;
        alert(`${settingName} would open here.`);
    });
});
