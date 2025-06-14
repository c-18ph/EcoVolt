// Mostrar el botón al hacer scroll y volver arriba suavemente
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById('btn-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function () {
    // Scroll lento y suave usando requestAnimationFrame
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.scrollBy(0, -c / 18); // Ajusta el divisor para más o menos velocidad
        requestAnimationFrame(scrollToTop);
      }
    };
    scrollToTop();
  });
});