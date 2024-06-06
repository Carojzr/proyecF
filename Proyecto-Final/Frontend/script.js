const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");


btnSignIn.addEventListener("click",()=>{
container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
container.classList.add("toggle");
});

// Función para el registro de usuarios
const registerUser = async (nombre, correo, contraseña) => {
    try {
        console.log("Datos del usuario:", nombre, correo, contraseña); // Verificar datos del usuario

        const response = await fetch('/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, correo, contraseña })
        });

        console.log("Respuesta del servidor:", response); // Verificar respuesta del servidor

        if (!response.ok) {
            throw new Error('Error al registrar usuario');
        }
        alert('Usuario registrado correctamente');
    } catch (error) {
        console.error('Error:', error);
        alert('Ocurrió un error al registrar usuario');
    }
};

// Event listener para el botón de registro
document.getElementById("btn-registro").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar envío del formulario

    // Obtener los datos de registro ingresados por el usuario
    const nombre = document.getElementById("user_name").value;
    const correo = document.getElementById("user_email").value;
    const contraseña = document.getElementById("user_password").value;

    // Llamar a la función para registrar al usuario
    registerUser(nombre, correo, contraseña);
});