function calcularPrecio() {
    let base = 150;
    let precio = base;

    if (document.getElementById("tipo").value == "low-cost") precio = precio;
    if (document.getElementById("tipo").value == "basic") precio += 80;
    if (document.getElementById("tipo").value == "personalizada") precio += 150;
    if (document.getElementById("formulario").checked) precio += 50;
    if (document.getElementById("foto").checked) precio += 200;
    if (document.getElementById("comentarios").checked) precio += 150;

    document.getElementById("resultado").innerText = "Precio estimado: €" + precio;
  }

function toggleInfo(index) {
    const infos = document.querySelectorAll('.services .info');
    infos.forEach((info, i) => {
      if (i === index) {
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
      } else {
        info.style.display = 'none';
      }
    });
  }

  window.onload = calcularPrecio;