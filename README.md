🌀 Ahorro Progresivo: El Desafío Fibonacci

¡Bienvenido al Desafío Matemático de Ahorro! Este proyecto nace de la idea de aplicar la famosa sucesión de Fibonacci (donde cada número es la suma de los dos anteriores) a una estrategia real de ahorro mensual. 

🚀 ¿Cómo funciona el programa?

El usuario interactúa con una interfaz web limpia y moderna donde:
1. Ingresa el tiempo: Define cuántos meses desea mantener el hábito del ahorro.
2. Cálculo Automático: El programa procesa la serie de Fibonacci mes a mes.
3. Resultado Instantáneo: Sin recargar la página, se muestra el total acumulado en bolivianos (Bs).

🛠️ Tecnologías Utilizadas

* HTML5: Estructura semántica para una experiencia accesible.
* CSS3: Diseño responsivo con un estilo "Dark Mode" elegante, optimizado para móviles y escritorio.
* JavaScript: Lógica de programación pura, sin librerías externas.

🧠 Lógica de Programación

Para resolver este desafío, el código sigue estos pasos técnicos:

1. Captura de Datos: Utilizamos document.getElementById para extraer el valor numérico que el usuario ingresa en el formulario.
2. Prevención de Recarga: Aplicamos event.preventDefault() para que el cálculo se realice en tiempo real sin interrumpir la experiencia del usuario.
3. Algoritmo de Fibonacci: Implementamos un ciclo for que gestiona tres variables clave (a, b y c):
    * a representa el ahorro del mes actual.
    * b representa el ahorro del siguiente mes.
    * sum acumula el total histórico de todos los meses recorridos.
4. **Manipulación del DOM:** El resultado se inyecta directamente en el HTML mediante la propiedad .innerHTML, permitiendo una respuesta visual inmediata.

👤 Autor

Beymar Orlando Loza Mayta Estudiante de la Facultad de Ciencias Puras y Naturales - UMSA Bolivia, 2026
