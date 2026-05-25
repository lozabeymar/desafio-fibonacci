// js/script.js
document.addEventListener("DOMContentLoaded", function() {
    const ahorroForm = document.getElementById("form-ahorro");

    ahorroForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Detiene la recarga

        let n = parseInt(document.getElementById("mes").value);
        let sumTotal = 0; 
        let a = 1; 
        let b = 1; 
        let c = 0;

        // Si el usuario pone 0 o menos
        if (isNaN(n) || n <= 0) {
            alert("¡Por favor, introduce un número válido de meses!");
            return;
        }

        // Lógica de Fibonacci
        for (let i = 1; i <= n; i++) {
            sumTotal += a; 
            c = a + b;
            a = b;
            b = c;
        }
        
        const mensaje = `¡Increíble! En ${n} meses habrás acumulado un total de Bs${sumTotal}. 
        (En tu último mes ahorrarás Bs${a - (n === 1 ? 0 : b-a)})`; 
        
        document.getElementById("resultado").innerHTML = `🚀 Total Ahorrado: Bs ${sumTotal}`;
        
    });
});