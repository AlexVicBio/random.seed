function checkTimeAndGenerate() {
    const currentDate = new Date();

    // Establecer la fecha y hora límite (10 de febrero de 2025, 1:00 AM hasta las 11:00 PM)
    const startDate = new Date('2025-02-10T01:00:00');
    const endDate = new Date('2025-02-10T23:59:59');

    // Verificar si la fecha actual está dentro del rango
    if (currentDate >= startDate && currentDate <= endDate) {
        // Generar el número aleatorio entre 1 y 150
        const randomNumber = Math.floor(Math.random() * 150) + 1;

        // Mostrar el resultado
        document.getElementById('randomNumber').textContent = randomNumber;
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('message').textContent = 'El número aleatorio ha sido generado.';
    } else {
        document.getElementById('message').textContent = 'El generador solo está disponible el 10 de febrero de 2025, entre la 1:00 AM y las 11:00 PM.';
    }
}

// Llamar a la función cuando se carga la página
window.onload = checkTimeAndGenerate;
