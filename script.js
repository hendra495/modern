// Example of simple JavaScript interactivity
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert(`Navigating to ${link.textContent} section.`);
        });
    });
});
