<<<<<<< HEAD
// Mostrar el botón al hacer scroll y volver arriba suavemente
=======
>>>>>>> 41785c8652dac322ecf815301334dbafda2ed45c
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById('btn-top');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

<<<<<<< HEAD
=======

>>>>>>> 41785c8652dac322ecf815301334dbafda2ed45c
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 41785c8652dac322ecf815301334dbafda2ed45c
