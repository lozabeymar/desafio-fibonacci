document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const contenedor = document.getElementById("resultado");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Obtenemos el valor y lo convertimos a entero
        const inputN = document.getElementById("n").value;
        const n = parseInt(inputN);

        // Validación básica
        if (isNaN(n) || n <= 0) {
            contenedor.innerHTML = "Por favor, ingresa un número mayor a 0.";
            return;
        }

        let a = 0;
        let b = 1;
        let resultadoArr = [];

        // Generamos la secuencia
        for (let i = 0; i < n; i++) {
            resultadoArr.push(a);
            let siguiente = a + b;
            a = b;
            b = siguiente;
        }

        // Mostramos el resultado de forma elegante
        contenedor.innerHTML = resultadoArr.join(" → ");
    });
});