var tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(function(tarjeta) {
    var imagenOriginal = tarjeta.querySelector("img:first-of-type");
    var imagenReemplazo = tarjeta.querySelector("img:last-of-type");

    // Agrega un evento 'mouseover' a cada contenedor
    tarjeta.addEventListener("mouseover", function() {
      imagenOriginal.style.display = "none";
      imagenReemplazo.style.display = "inline-block";
    });

    // Agrega un evento 'mouseout' a cada contenedor
    tarjeta.addEventListener("mouseout", function() {
      imagenReemplazo.style.display = "none";
      imagenOriginal.style.display = "inline-block";
    });
  });
