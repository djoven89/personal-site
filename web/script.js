function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function toggleLanguage() {
    const currentLang = document.documentElement.lang || 'es'; // Si no está definido, asumimos 'es'
    const newLang = currentLang === 'es' ? 'en' : 'es';

    // Redirigir a index.html para español y index_en.html para inglés
    if (newLang === 'es') {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index_en.html';
    }
}

// Función para ampliar la imagen al hacer clic
function ampliarImagen(img) {
    var modal = document.getElementById("modal-imagen");
    var modalImg = document.getElementById("imagen-ampliada");

    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.style.maxWidth = "100vw";
    modalImg.style.maxHeight = "100vh";
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal-imagen").style.display = "none";
}
