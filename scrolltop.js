
document.addEventListener('DOMContentLoaded', function() {
    const btnTop = document.getElementById('btn-top');
    

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnTop.style.display = 'flex';
        } else {
            btnTop.style.display = 'none';
        }
    });
    

    btnTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
