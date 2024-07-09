let audio;
let heart = document.getElementById('heart');
let star = document.getElementById('star');
let starBlue = document.getElementById('star-blue');
let animationInterval;

function startRelaxation(type) {
    if (audio) {
        audio.pause();
        clearInterval(animationInterval); // Detener la animación actual si existe
        heart.style.transform = 'scale(1)'; // Reiniciar el tamaño del corazón
        star.style.transform = 'scale(1)'; // Reiniciar el tamaño de la estrella
        starBlue.style.transform = 'scale(1)'; // Reiniciar el tamaño de la estrella azul
    }

    let body = document.body;

    // Ocultar textos
    document.getElementById('header-text').classList.add('hidden');
    document.getElementById('header-subtext').classList.add('hidden');
    document.getElementById('para-kikoy').classList.add('hidden');
    document.getElementById('choose-music').classList.add('hidden');

    // Hacer que el área de respiración cubra más espacio
    document.getElementById('breathing-exercises').classList.add('fullscreen');

    // Verificar si se está cambiando a una nueva imagen de fondo
    if (type !== 'stop') {
        switch(type) {
            case 'ocean':
                body.style.backgroundImage = "url('rain.jpg')";
                audio = new Audio('forest.mp3');
                heart.style.display = 'none';
                star.style.display = 'block';
                starBlue.style.display = 'none';
                break;
            case 'rain':
                body.style.backgroundImage = "url('forest.jpg')";
                audio = new Audio('rain.mp3');
                heart.style.display = 'none';
                star.style.display = 'none';
                starBlue.style.display = 'block';
                break;
            case 'forest':
                body.style.backgroundImage = "url('rain.jpg')";
                audio = new Audio('ocean.mp3');
                heart.style.display = 'block';
                star.style.display = 'none';
                starBlue.style.display = 'none';
                break;
        }
        audio.play();
        breathe(type);
    }
}

function breathe(type) {
    if (type === 'forest') {
        heart.style.transform = 'scale(1.2)';
        animationInterval = setInterval(() => {
            heart.style.transform = 'scale(1)';
            setTimeout(() => {
                heart.style.transform = 'scale(1.2)';
            }, 4000); // Tiempo de exhalar
        }, 8000); // Intervalo de respiración (inhalar + exhalar)
    } else if (type === 'ocean') {
        star.style.transform = 'scale(1.2)';
        animationInterval = setInterval(() => {
            star.style.transform = 'scale(1)';
            setTimeout(() => {
                star.style.transform = 'scale(1.2)';
            }, 4000); // Tiempo de exhalar
        }, 8000); // Intervalo de respiración (inhalar + exhalar)
    } else if (type === 'rain') {
        starBlue.style.transform = 'scale(1.2)';
        animationInterval = setInterval(() => {
            starBlue.style.transform = 'scale(1)';
            setTimeout(() => {
                starBlue.style.transform = 'scale(1.2)';
            }, 4000); // Tiempo de exhalar
        }, 8000); // Intervalo de respiración (inhalar + exhalar)
    }
}

function stopRelaxation() {
    clearInterval(animationInterval); // Detener la animación
    heart.style.transform = 'scale(1)'; // Reiniciar tamaño del corazón
    star.style.transform = 'scale(1)'; // Reiniciar tamaño de la estrella
    starBlue.style.transform = 'scale(1)'; // Reiniciar tamaño de la estrella azul
    
    heart.style.display = 'none'; // Ocultar el corazón
    star.style.display = 'none'; // Ocultar la estrella
    starBlue.style.display = 'none'; // Ocultar la estrella azul

    if (audio) {
        audio.pause(); // Detener la música
    }

    // Mostrar textos
    document.getElementById('header-text').classList.remove('hidden');
    document.getElementById('header-subtext').classList.remove('hidden');
    document.getElementById('para-kikoy').classList.remove('hidden');
    document.getElementById('choose-music').classList.remove('hidden');

    // Quitar clase fullscreen del área de respiración
    document.getElementById('breathing-exercises').classList.remove('fullscreen');

    // Restablecer el fondo
    document.body.style.backgroundImage = '';
}
