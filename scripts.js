const planInfo = {
    mensual: {
        oro: { price: "$120.000" },
        diamante: { price: "$170.000" },
        platino: { price: "$250.000" }
    },
    anual: {
        oro: { price: "$1.440.000" },
        diamante: { price: "$2.040.000" },
        platino: { price: "$3.000.000" }
    },
    beneficios: {
        oro: [
            "Acceso ilimitado a 2 sedes",
            "Entrena con 2 amigos al mes",
            "Reserva hasta 2 clases a la semana",
            "Plan de entrenamiento básico",
            "10 preguntas personalizadas al coach",
            "Fitness Plus App | Rutinas",
            "Acceso a todas las áreas de la sede"
        ],
        diamante: [
            "Acceso ilimitado a 4 sedes",
            "Entrena con 4 amigos al mes",
            "Reserva hasta 4 clases a la semana",
            "Plan de entrenamiento avanzado",
            "15 preguntas personalizadas al coach",
            "Fitness Plus App | Rutinas",
            "Acceso a todas las áreas de la sede"
        ],
        platino: [
            "Acceso ilimitado a todas las sedes",
            "Entrena con 10 amigos al mes",
            "Reserva hasta 10 clases a la semana",
            "Plan de entrenamiento completo",
            "Preguntas ilimitadas al coach",
            "Fitness Plus App | Rutinas",
            "Acceso a todas las áreas de la sede"
        ]
    }
};

// Al hacer clic en los botones, actualizamos los planes
document.getElementById('mensualBtn').addEventListener('click', function() {
    updatePlans('mensual');
    this.classList.add('active');
    document.getElementById('anualBtn').classList.remove('active');
});

document.getElementById('anualBtn').addEventListener('click', function() {
    updatePlans('anual');
    this.classList.add('active');
    document.getElementById('mensualBtn').classList.remove('active');
});

// Función para actualizar los planes con los precios correspondientes
function updatePlans(planType) {
    // Actualizar precios
    document.querySelector('#oro .precios').innerText = planInfo[planType].oro.price;
    document.querySelector('#diamante .precios').innerText = planInfo[planType].diamante.price;
    document.querySelector('#platino .precios').innerText = planInfo[planType].platino.price;

    // Cambiar el texto de facturación y el intervalo (mes/año)
    const periodo = planType === 'mensual' ? '/mes' : '/año';
    const facturacion = planType === 'mensual' ? 'Mensualmente' : 'Anualmente';

    document.querySelectorAll('.texto-planes').forEach(span => span.innerText = periodo);
    document.querySelectorAll('.facturacion-tipo').forEach(span => span.innerText = facturacion);

    // Actualizar beneficios (estos son constantes)
    updateBenefits('#oro', planInfo.beneficios.oro);
    updateBenefits('#diamante', planInfo.beneficios.diamante);
    updateBenefits('#platino', planInfo.beneficios.platino);
}

// Función para actualizar los beneficios de cada plan
function updateBenefits(planId, benefits) {
    const benefitList = document.querySelector(`${planId} .beneficios ul`);
    benefitList.innerHTML = ''; // Limpiar la lista de beneficios
    benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="images/check.svg" alt="check" loading="lazy">${benefit}`;
        benefitList.appendChild(li);
    });
}

// Inicializar con los planes mensuales
updatePlans('mensual');