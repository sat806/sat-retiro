const claveAsignada = "clave123"; // Cambia esta por la clave que tú asignas

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
  } else {
    document.getElementById("login-error").textContent = "Clave incorrecta.";
  }
}

function procesarRetiro() {
  const pais = document.getElementById("pais").value;
  const tipo = document.getElementById("tipo").value;

  document.getElementById("resultado").textContent = `✅ Retiro exitoso vía ${tipo} en ${pais}`;
}
