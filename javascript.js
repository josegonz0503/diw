let currentIndex = 0;

const slider = document.getElementById('slider');
const slides = slider.children;
const totalSlides = slides.length;

/* ✅ SLIDER SOLO CON FLECHAS */
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
    updateSlider();
}

/* ✅ MENÚ LATERAL */
const menu = document.getElementById('menuLateral');
const abrirMenu = document.querySelector('.menu-toggle');
const cerrarMenu = document.getElementById('cerrarMenu');

abrirMenu.addEventListener('click', () => {
    menu.classList.add('active');
});

cerrarMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Cerrar menú si se hace clic fuera
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !abrirMenu.contains(e.target)) {
        menu.classList.remove('active');
    }
});

/* ✅ ACORDEÓN DEL MENÚ */
const categorias = document.querySelectorAll(".categoria");

categorias.forEach(categoria => {
    categoria.addEventListener("click", () => {
        const submenu = categoria.nextElementSibling;

        // Cerrar otros menús si uno se abre
        document.querySelectorAll(".submenu").forEach(s => {
            if (s !== submenu) s.style.display = "none";
        });
        document.querySelectorAll(".categoria").forEach(c => {
            if (c !== categoria) c.classList.remove("active");
        });

        submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
        categoria.classList.toggle("active");
    });
});


// PANEL FILTRO MÓVIL
const filtroToggle = document.querySelector(".filtro-toggle");
const filtroPanel = document.getElementById("filtroPanel");
const cerrarFiltro = document.getElementById("cerrarFiltro");

filtroToggle.addEventListener("click", () => {
    filtroPanel.classList.add("active");
});

cerrarFiltro.addEventListener("click", () => {
    filtroPanel.classList.remove("active");
});

// Cerrar si clic fuera
filtroPanel.addEventListener("click", (e) => {
    if (!e.target.closest(".filtro-contenido")) {
        filtroPanel.classList.remove("active");
    }
});