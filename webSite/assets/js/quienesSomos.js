const mision = document.getElementById('mision');
const vision = document.getElementById('vision');
const historia = document.getElementById('historia');
const valores = document.getElementById('valores');
const textoQuienesSomos = document.getElementById('textoQuienesSomos');

mision.addEventListener('click', () => {
    textoQuienesSomos.innerHTML = 'Misión';
});
vision.addEventListener('click', () => {
    textoQuienesSomos.innerHTML = 'Visión';
});
historia.addEventListener('click', () => {
    textoQuienesSomos.innerHTML = 'Historia';
});
valores.addEventListener('click', () => {
    textoQuienesSomos.innerHTML = 'Valores';
});


const secciones = document.querySelectorAll('.selections');

  secciones.forEach(seccion => {
    seccion.addEventListener('click', () => {
      secciones.forEach(s => s.classList.remove('active'));
      seccion.classList.add('active');

      
    });
  });

