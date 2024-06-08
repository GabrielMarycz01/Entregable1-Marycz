// Obtener usuario
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (usuarios.length === 0) {
  const usuarioPredefinido = { username: "user1", password: "123" };
  usuarios.push(usuarioPredefinido);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Lógica

function loginLogic(username, password) {
  try {
    //busamos a nuestro usuario
    const usuario = usuarios.find((usuario) => usuario.username === username);

    if (!usuario) {
      throw new Error("Usuario No Encontrado");
    }

    if (usuario.password !== password) {
      throw new Error("Contraseña incorrecta");
    }
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
    };
  } finally {
    console.log("intento de inicio completado");
  }
}
//registerrrr --------------------------------------------------------------------------------------------

function registerLogic(username, password) {
  try {
    // Implementar la lógica de registro si es necesario
    const userExists = usuarios.find((usuario) => usuario.username === username);

    if (userExists) {
      throw new Error("Usuario ya Existe");
    }
    const usuario = {
      username,
      password,
    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
      message: err.mesagge,
    };
  } finally {
    console.log("Intendo de registro terminado");
  }
}

//listeners
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Login  logica

loginForm.addEventListener("submit", (e) => {
  // Evitar que la página se recargue
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Validamos que los campos tengan texto
  if (!username || !password) {
    Swal.fire({
      icon: `error`,
      title: "Oppss!",
      text: "Todos los campos son obligatorios",
      toast: "true",
      timer: 2000,
      showCancelButton: false,
      showCloseButton: false,
      position: "top-end",
    });
    return;
  }

  const result = loginLogic(username, password);

  if (result.success) {
    Swal.fire({
      icon: "success",
      title: "Logueado Correctamente",
      text: "Bienvenido: " + username,
      toast: "true",
      timer: 2000,
      position: "top-end",
    });

    // Limpiar formulario
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";

    localStorage.setItem("isLogged", true);

    // Espera unos segundos y redirige al usuario
    setTimeout(() => {
      window.location.href = `HTMLS/index2.html`;
    }, 2000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Error de inicio de sesión",
      text: result.message,
      toast: "true",
      timer: 2000,
      position: "top-end",
    });
  }
});

// Register Logica
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("registro-email").value;
  const password = document.getElementById("registro-password").value;

  if (!username || !password) {
    Swal.fire({
      icon: `error`,
      title: "No se pudo completar el registro",
      text: "Todos los campos son obligatorios",
      toast: "true",
      timer: 2000,
      position: "top-end",
    });
    return;
  }

  const result = registerLogic(username, password);

  if (result.success) {
    Swal.fire({
      icon: "success",
      title: "Registrado Correctamente",
      text: "Tu usuario es : " + username,
      toast: "true",
      timer: 2000,
      position: "top-end",
    });

    // Limpiar formulario
    document.getElementById("registro-email").value = "";
    document.getElementById("registro-password").value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Error al Registrarse",
      text: result.message,
      toast: "true",
      timer: 2000,
      position: "top-end",
    });
  }
});
