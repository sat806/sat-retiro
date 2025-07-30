const claveAsignada = "SAT2025";

function validar() {
  const nombre = document.getElementById("nombre").value.trim();
  const clave = document.getElementById("clave").value;

  if (nombre === "" || clave === "") {
    document.getElementById("login-error").textContent = "Debes completar todos los campos.";
    return;
  }

  if (clave === claveAsignada) {
    document.getElementById("login").style.display = "none";
    document.getElementById("formulario").style.display = "block";
    document.getElementById("usuario").textContent = nombre;
  } else {
    document.getElementById("login-error").textContent = "Clave incorrecta.";
  }
}

function mostrarCampoAdicional() {
  const tipo = document.getElementById("tipo").value;
  const campoDiv = document.getElementById("campo-adicional");

  let html = "";
  if (tipo === "transferencia") {
    html = `<input type="text" id="cuenta" placeholder="Número de cuenta o CLABE">`;
  } else if (tipo === "tarjeta") {
    html = `<input type="text" id="tarjeta" placeholder="Número de tarjeta">`;
  } else if (tipo === "cripto") {
    html = `<input type="text" id="wallet" placeholder="Dirección de wallet">`;
  }

  campoDiv.innerHTML = html;
  campoDiv.style.display = tipo ? "block" : "none";
}

function procesarRetiro() {
  const pais = document.getElementById("pais").value;
  const tipo = document.getElementById("tipo").value;
  const resultado = document.getElementById("resultado");

  let dato = "";
  if (tipo === "transferencia") {
    dato = document.getElementById("cuenta").value;
    if (dato.trim() === "") {
      alert("Por favor ingresa tu número de cuenta o CLABE.");
      return;
    }
  } else if (tipo === "tarjeta") {
    dato = document.getElementById("tarjeta").value;
    if (dato.trim() === "") {
      alert("Por favor ingresa tu número de tarjeta.");
      return;
    }
  } else if (tipo === "cripto") {
    dato = document.getElementById("wallet").value;
    if (dato.trim() === "") {
      alert("Por favor ingresa tu dirección de wallet.");
      return;
    }
  }

  // Mostrar animación de "Procesando..."
  resultado.style.color = "blue";
  resultado.textContent = "💬 Procesando retiro...";

  // Después de 2 segundos, mostrar el mensaje final
  setTimeout(() => {
    resultado.style.color = "green";
    resultado.textContent = `✅ Retiro exitoso de USD 19,877 vía ${tipo} en ${pais}`;
  }, 2000);
}
