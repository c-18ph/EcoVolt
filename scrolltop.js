
// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const btnTop = document.getElementById('btn-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    btnTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
