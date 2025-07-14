const contenedor = document.getElementById("contenedor-cursos");
const contenedorLibros = document.getElementById("contenedor-libros");

let todosLosCursos = [
    {
        id: 1,
        clasificacion: "Curso",
        nombre: "Nivel Inicial",
        categoria: "Niños",
        duracion: "6 meses",
        precio: "$115.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Martes", "16:00 a 17:30 hs"],
            Belgrano: ["Miércoles", "17:00 a 18:30 hs"],
            Barracas: ["Sábados", "10:00 a 11:30 hs"],
            Quilmes: ["Lunes", "17:00 a 18:30 hs"],
            San_Isidro: ["Martes", "16:00 a 17:30 hs"],
            Ramos_Mejia: ["Sábados", "09:00 a 10:30 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]
        },
        imagen: "/assets/Imagenes/cursos/Inicial.png",
        descripcion: "Curso 100% lúdico. Ideal para introducir el idioma sin presión ni evaluaciones formales.",
        detalle: "detalle: En este nivel trabajamos con recursos visuales, auditivos y kinestésicos para introducir el idioma inglés de forma natural. Las clases incluyen canciones, juegos y cuentos que estimulan la participación activa sin necesidad de lecto-escritura.",

    },
    {
        id: 2,
        clasificacion: "Curso",
        nombre: "6 a 8 años",
        categoria: "Niños",
        duracion: "10 meses",
        precio: "$128.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Lunes", "17:00 a 18:30 hs"],
            Belgrano: ["Martes", "16:30 a 18:00 hs"],
            Barracas: ["Sábados", "11:00 a 12:30 hs"],
            Quilmes: ["Miércoles", "18:00 a 19:30 hs"],
            San_Isidro: ["Jueves", "17:00 a 18:30 hs"],
            Ramos_Mejia: ["Sábados", "10:30 a 12:00 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

        },
        imagen: "/assets/Imagenes/cursos/6a8anios.png",
        descripcion: "Clases lúdicas y didácticas adaptadas a la edad. Canciones, cuentos y juegos para aprender naturalmente.",
        detalle: "A través de actividades divertidas y participativas, los estudiantes comienzan a desarrollar habilidades básicas de comprensión auditiva, vocabulario esencial y estructuras simples. Se promueve un ambiente amigable, con seguimiento personalizado."
    },
    {
        id: 3,
        clasificacion: "Curso",
        nombre: "9 a 11 años",
        categoria: "Niños",
        duracion: "10 meses",
        precio: "$180.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Jueves", "18:00 a 19:30 hs"],
            Belgrano: ["Viernes", "17:00 a 18:30 hs"],
            Barracas: ["Sábados", "09:00 a 10:30 hs"],
            Quilmes: ["Martes", "17:00 a 18:30 hs"],
            San_Isidro: ["Viernes", "18:00 a 19:30 hs"],
            Ramos_Mejia: ["Sábados", "11:00 a 12:30 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

        },
        imagen: "/assets/Imagenes/cursos/9a11anios.png",
        descripcion: "Curso enfocado en comprensión oral y escrita. Se introducen estructuras gramaticales simples.",
        detalle: "Los alumnos comienzan a familiarizarse con expresiones más complejas, tiempos verbales simples y comprensión lectora. Utilizamos recursos audiovisuales, proyectos colaborativos y dinámicas para incentivar el uso del idioma en contexto."
    },
    {
        id: 4,
        clasificacion: "Curso",
        nombre: "Inglés general para Adolescentes",
        categoria: "Adolescentes",
        duracion: "10 meses",
        precio: "$220.000",
        modalidad: "pesencial / virtual",
        diaHorario: {
            Caballito: ["Lunes", "17:30 a 19:30 hs"],
            Belgrano: ["Martes", "17:30 a 19:30 hs"],
            Barracas: ["Sábados", "10:00 a 12:00 hs"],
            Quilmes: ["Jueves", "17:30 a 19:30 hs"],
            San_Isidro: ["Miércoles", "17:30 a 19:30 hs"],
            Ramos_Mejia: ["Sábados", "09:00 a 11:00 hs"],
            Virtual: ["Martes", "10:00 - 12:00 hs (vía Zoom)"]
        },
        imagen: "/assets/Imagenes/cursos/generalAdolescentes.png",
        descripcion: "Clases dinámicas que combinan contenido gramatical con temáticas de interés juvenil y mucha conversación.",
        detalle: "Curso integral enfocado en gramática, vocabulario, conversación y comprensión escrita. Se trabaja con materiales auténticos y actuales que reflejan los intereses adolescentes. Ideal para afianzar bases sólidas del idioma en un entorno moderno."
    },
    {
        id: 5,
        clasificacion: "Curso",
        nombre: "Curso de conversación",
        categoria: "Adolescentes",
        duracion: "4 meses",
        precio: "$240.000",
        modalidad: "pesencial / virtual",
        diaHorario: {
            Caballito: ["Lunes", "17:00 a 19:00 hs"],
            Belgrano: ["Martes", "19:30 a 21:00 hs"],
            Barracas: ["Miércoles", "20:00 a 21:30 hs"],
            Quilmes: ["Jueves", "20:00 a 21:30 hs"],
            San_Isidro: ["Viernes", "20:00 a 21:30 hs"],
            Ramos_Mejia: ["Sábados", "14:00 a 15:30 hs"],
            Virtual: ["Viernes", "10:00 - 12:00 hs (vía Zoom)"]
        },
        imagen: "/assets/Imagenes/cursos/ConversacionAdolescente.png",
        descripcion: "Espacio de práctica oral con actividades guiadas y simulación de situaciones reales.",
        detalle: "Espacio focalizado en mejorar la fluidez oral y la pronunciación. Se simulan situaciones de la vida cotidiana, debates temáticos, presentaciones y role-plays. Apto para estudiantes con nivel preintermedio en adelante."
    },
    {
        id: 6,
        clasificacion: "Curso",
        nombre: "Preparación PET",
        categoria: "Adolescentes",
        duracion: "6 meses",
        precio: "$250.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Martes", "17:30 a 19:30 hs"],
            Belgrano: ["Miércoles", "17:00 a 19:00 hs"],
            Barracas: ["Sábados", "10:00 a 12:00 hs"],
            Quilmes: ["Lunes", "17:30 a 19:30 hs"],
            San_Isidro: ["Jueves", "17:30 a 19:30 hs"],
            Ramos_Mejia: ["Sábados", "09:30 a 11:30 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]
        },
        imagen: "/assets/Imagenes/cursos/preparacionPet.png",
        descripcion: "Preparación para el Preliminary English Test de Cambridge. Nivel Intermedio.",
        detalle: "Curso oficial de preparación para el Preliminary English Test (nivel B1). Incluye práctica intensiva con exámenes modelo, desarrollo de estrategias de lectura y escritura, y entrenamiento oral personalizado."
    },
    {
        id: 7,
        clasificacion: "Curso",
        nombre: "Curso Anual",
        categoria: "Adultos",
        duracion: "12 meses",
        precio: "$290.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Lunes", "17:30 a 19:30 hs"],
            Belgrano: ["Martes", "10:00 a 12:00 hs"],
            Barracas: ["Sábados", "10:30 a 12:30 hs"],
            Quilmes: ["Miércoles", "17:00 a 19:00 hs"],
            San_Isidro: ["Jueves", "17:30 a 19:30 hs"],
            Ramos_Mejia: ["Sábados", "10:00 a 12:00 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]
        },
        imagen: "/assets/Imagenes/cursos/anualAdultos.png",
        descripcion: "Curso extensivo ideal para adultos que desean avanzar gradualmente con apoyo constante.",
        detalle: "Diseñado para quienes buscan un aprendizaje progresivo. Se abordan las cuatro habilidades lingüísticas (reading, writing, listening y speaking) en un entorno colaborativo. Las clases ofrecen seguimiento personalizado y evaluación continua."
    },
    {
        id: 8,
        clasificacion: "Curso",
        nombre: "Curso Intensivo",
        categoria: "Adultos",
        duracion: "6 meses",
        precio: "$310.000",
        modalidad: "pesencial / virtual",
        diaHorario: {
            Caballito: ["Lunes y Miércoles", "09:00 a 11:00 hs"],
            Belgrano: ["Martes y jueves", "17:30 a 19:30 hs"],
            Barracas: ["Lunes y jueves", "17:00 a 19:00 hs"],
            Quilmes: ["Miércoles y Viernes", "09:30 a 11:30 hs"],
            San_Isidro: ["Miércoles y Sábado", "10:00 a 12:00 hs"],
            Ramos_Mejia: ["Lunes y Jueves", "09:30 a 11:30 hs"],
            Virtual: ["Jueves y Sabado", "10:00 - 12:00 hs (vía Zoom)"]
        },
        imagen: "/assets/Imagenes/cursos/intensivoAdultos.png",
        descripcion: "Ideal para quienes tienen poco tiempo y quieren resultados rápidos. 2 clases semanales.",
        detalle: "Pensado para personas con disponibilidad limitada que necesitan avanzar rápidamente. Clases más frecuentes, tareas domiciliarias y contenidos condensados. Ideal para quienes ya tienen una base del idioma y buscan consolidarla."
    },
    {
        id: 9,
        clasificacion: "Curso",
        nombre: "Inglés para viajes",
        categoria: "Adultos",
        duracion: "3 meses",
        precio: "$270.500",
        modalidad: "pesencial / virtual",
        diaHorario: {
            Caballito: ["Miércoles", "17:30 a 19:30 hs"],
            Belgrano: ["Viernes", "10:00 a 12:00 hs"],
            Barracas: ["Martes", "10:30 a 12:30 hs"],
            Quilmes: ["Sábados", "10:00 a 12:00 hs"],
            San_Isidro: ["Lunes", "17:00 a 19:00"],
            Ramos_Mejia: ["Jueves", "17:30 a 19:30"],
            Virtual: ["Jueves", "10:00 - 12:00 hs (vía Zoom)"]
        },
        imagen: "/assets/Imagenes/cursos/viajesAdultos.png",
        descripcion: "Frases clave, vocabulario esencial y práctica de situaciones comunes al viajar al extranjero.",
        detalle: "Curso práctico y dinámico para aprender vocabulario esencial y frases útiles para aeropuertos, hoteles, restaurantes y situaciones sociales. Incluye simulaciones reales y material audiovisual."
    },
    {
        id: 10,
        clasificacion: "Curso",
        nombre: "First Certificate in English (FCE)",
        categoria: "Examenes",
        duracion: "6 meses",
        precio: "$370.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Lunes", "12:00 a 15:00 hs"],
            Belgrano: ["Martes", "16:00 a 17:00 hs"],
            Barracas: ["Sábados", "12:00 a 15:00 hs"],
            Quilmes: ["Miércoles", "15:00 a 18:00 hs"],
            San_Isidro: ["Lunes", "10:00 a 13:00 hs"],
            Ramos_Mejia: ["Sábados", "08:30 a 11:30 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

        },
        imagen: "/assets/Imagenes/cursos/first.png",
        descripcion: "Curso oficial de preparación para rendir el examen B2 de Cambridge. Simulacros y práctica intensiva.",
        detalle: "Prepara al estudiante para rendir el examen oficial de nivel B2. Se trabaja sobre todas las secciones del examen (Reading, Writing, Listening, Use of English y Speaking), con simulacros, correcciones y feedback detallado."
    },
    {
        id: 11,
        clasificacion: "Curso",
        nombre: "CAE - Certificate in Advanced English",
        categoria: "Examenes",
        duracion: "7 meses",
        precio: "$390.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Jueves", "12:00 a 15:00 hs"],
            Belgrano: ["Lunes", "16:00 a 17:00 hs"],
            Barracas: ["Miércoles", "12:00 a 15:00 hs"],
            Quilmes: ["Martes", "15:00 a 18:00 hs"],
            San_Isidro: ["Sábado", "10:00 a 13:00 hs"],
            Ramos_Mejia: ["Sábados", "08:30 a 11:30 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

        },
        imagen: "/assets/Imagenes/cursos/cae.png",
        descripcion: "Preparación para rendir el examen C1 de Cambridge. Ideal para objetivos académicos o profesionales.",
        detalle: "Curso especializado en el examen de nivel C1 de Cambridge. Ideal para estudiantes avanzados que buscan validar su conocimiento con un título oficial. Clases enfocadas en estrategias de comprensión, redacción y fluidez oral."
    },
    {
        id: 12,
        clasificacion: "Curso",
        nombre: "IELTS Preparation",
        categoria: "Examenes",
        duracion: "3 meses",
        precio: "$380.000",
        modalidad: "pesencial",
        diaHorario: {
            Caballito: ["Martes", "12:00 a 15:00 hs"],
            Belgrano: ["Jueves", "16:00 a 17:00 hs"],
            Barracas: ["Lunes", "12:00 a 15:00 hs"],
            Quilmes: ["Viernes", "15:00 a 18:00 hs"],
            San_Isidro: ["Miércoles", "10:00 a 13:00 hs"],
            Ramos_Mejia: ["Sábados", "08:30 a 11:30 hs"],
            Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]
        },
        imagen: "/assets/Imagenes/cursos/ielts.png",
        descripcion: "Enfocado en comprensión lectora, auditiva, redacción y entrevista oral. Simulacros reales incluidos.",
        detalle: "Preparación intensiva para el examen académico IELTS. Enfocado en obtener resultados óptimos en todas las secciones del examen: Reading, Writing, Listening y Speaking. Incluye materiales auténticos y práctica supervisada."
    },
    {
        id: 13,
        clasificacion: "Curso",
        nombre: "Inglés Técnico Profesional",
        categoria: "Especiales",
        duracion: "4 meses",
        precio: "$320.000",
        modalidad: "pesencial / virtual",
        diaHorario: {
            Caballito: ["Martes", "18:00 a 19:30 hs"],
            Belgrano: ["Miércoles", "09:00 a 10:30 hs"],
            Barracas: ["Sábados", "10:00 a 12:00 hs"],
            Quilmes: ["Lunes", "17:00 a 18:30 hs"],
            San_Isidro: ["Jueves", "10:00 a 11:30 hs"],
            Ramos_Mejia: ["Sábados", "11:00 a 12:30 hs"],
            Virtual: ["Lunes", "16:00 - 18:00 hs (vía Zoom)"]
        },
        imagen: "/assets/Imagenes/cursos/tecnico.png",
        descripcion: "Curso especializado en inglés técnico aplicado a distintas profesiones (IT, medicina, ingeniería, etc).",
        detalle: "Enfocado en el aprendizaje de vocabulario técnico y expresiones utilizadas en entornos profesionales como ingeniería, informática, medicina, etc. Se trabaja con textos reales, casos de estudio y simulaciones laborales."
    },
    {
        id: 14,
        clasificacion: "Curso",
        nombre: "Inglés para Entrevistas Laborales",
        categoria: "Especiales",
        duracion: "2 meses",
        precio: "$190.000",
        modalidad: "virtual",
        diaHorario: {
            Caballito: ["Martes", "20:00 a 21:00 hs (Via Zoom)"],
            Belgrano: ["Miércoles", "18:00 a 20:00 hs (Via Zoom)"],
            Barracas: ["Lunes", "19:30 a 21:30 hs (Via Zoom)"],
            Quilmes: ["Sábados", "09:00 a 11:00 hs (Via Zoom)"],
            San_Isidro: ["Viernes", "19:00 a 21:00 hs (Via Zoom)"],
            Ramos_Mejia: ["Jueves", "20:00 a 22:00 hs (Via Zoom)"],
            Virtual: ["Este curso se ofrece exclusivamente en modalidad virtual.", "Seleccione una sede para conocer dias y horarios"]
        },
        imagen: "/assets/Imagenes/cursos/entrevistaLaboral.png",
        descripcion: "Taller intensivo para preparar entrevistas en inglés. Preguntas frecuentes, respuestas y role play.",
        detalle: "Este taller intensivo ayuda a los participantes a prepararse para entrevistas en inglés. Incluye preguntas frecuentes, cómo hablar de experiencias laborales y estudios, simulaciones en tiempo real y tips para destacar en el proceso."
    },
    {
        id: 15,
        clasificacion: "Curso",
        nombre: "Inglés para Hotelería",
        categoria: "Especiales",
        duracion: "4 meses",
        precio: "$220.000",
        modalidad: "Presencial / Virtual",
        diaHorario: {
            Caballito: ["Lunes", "18:00 a 19:30 hs"],
            Belgrano: ["Martes", "10:00 a 11:30 hs"],
            Barracas: ["Viernes", "18:30 a 20:00 hs"],
            Quilmes: ["Sábados", "11:00 a 13:00 hs"],
            San_Isidro: ["Miércoles", "17:00 a 18:30 hs"],
            Ramos_Mejia: ["Lunes", "10:00 a 12:00 hs"],
            Virtual: ["Jueves", "16:00 - 18:00 hs (vía Zoom)"]
        },
        imagen: "/assets/Imagenes/cursos/hoteleria.png",
        descripcion: "Curso diseñdo para quienes trabajan o desean trabajar en el sector hotelero y turístico",
        detalle: "Este curso brinda herramientas lingüísticas específicas para la atención al cliente en hoteles, agencias de viajes, aerolíneas y servicios turísticos. Se trabaja con simulaciones de situaciones reales como reservas, check-in, atención de reclamos, city tours, entre otros. Ideal para mejorar el nivel profesional y aumentar oportunidades laborales en el rubro."
    }
];

const listaLibros = [
    {
        id: 1,
        clasificacion: "Libro",
        nombre: "English Fun Starters",
        cursoRelacionado: "Nivel Inicial",
        categoria: "Niños",
        precio: "$18.500",
        imagen: "/assets/Imagenes/cursos/libros/english-fun-starters.jpg",
        descripcion: "Libro ilustrado con juegos, canciones y cuentos cortos para introducir el idioma de forma divertida."
    },
    {
        id: 2,
        clasificacion: "Libro",
        nombre: "Little Explorers 1",
        cursoRelacionado: "6 a 8 años",
        categoria: "Niños",
        precio: "$19.200",
        imagen: "/assets/Imagenes/cursos/libros/little-explorers-1.png",
        descripcion: "Material didáctico con actividades lúdicas y vocabulario básico para primeros lectores."
    },
    {
        id: 3,
        clasificacion: "Libro",
        nombre: "Step Up English Kids 2",
        cursoRelacionado: "9 a 11 años",
        categoria: "Niños",
        precio: "$20.000",
        imagen: "/assets/Imagenes/cursos/libros/step-up-kids.jpg",
        descripcion: "Desarrolla habilidades de lectura y escritura. Incluye actividades de comprensión auditiva y diálogos."
    },
    {
        id: 4,
        clasificacion: "Libro",
        nombre: "Teens English Book A",
        cursoRelacionado: "Inglés general para Adolescentes",
        categoria: "Adolescentes",
        precio: "$21.500",
        imagen: "/assets/Imagenes/cursos/libros/teens-english-a.jpg",
        descripcion: "Diseñado para adolescentes, enfoca en estructuras gramaticales y comunicación cotidiana."
    },
    {
        id: 5,
        clasificacion: "Libro",
        nombre: "Let’s Talk – Conversación para Teens",
        cursoRelacionado: "Curso de conversación",
        categoria: "Adolescentes",
        precio: "$20.800",
        imagen: "/assets/Imagenes/cursos/libros/lets-talk-teens.jpg",
        descripcion: "Libro de práctica oral con situaciones reales, diálogos y debates guiados."
    },
    {
        id: 6,
        clasificacion: "Libro",
        nombre: "PET Practice Pack",
        cursoRelacionado: "Preparación PET",
        categoria: "Adolescentes",
        precio: "$32.000",
        imagen: "/assets/Imagenes/cursos/libros/pet-pack.jpg",
        descripcion: "Simulacros del examen PET de Cambridge. Incluye audios y pruebas corregidas."
    },
    {
        id: 7,
        clasificacion: "Libro",
        nombre: "English for Adults – Book 1",
        cursoRelacionado: "Curso Anual",
        categoria: "Adultos",
        precio: "$33.500",
        imagen: "/assets/Imagenes/cursos/libros/adults-book1.jpg",
        descripcion: "Libro completo con enfoque gradual, gramática, vocabulario y práctica real para adultos."
    },
    {
        id: 8,
        clasificacion: "Libro",
        nombre: "Fast Track English",
        cursoRelacionado: "Curso Intensivo",
        categoria: "Adultos",
        precio: "$23.900",
        imagen: "/assets/Imagenes/cursos/libros/fast-track.jpg",
        descripcion: "Ideal para cursos intensivos. Contenido condensado y ejercicios de progreso rápido."
    },
    {
        id: 9,
        clasificacion: "Libro",
        nombre: "Travel English Guide",
        cursoRelacionado: "Inglés para viajes",
        categoria: "Adultos",
        precio: "$19.800",
        imagen: "/assets/Imagenes/cursos/libros/travel-guide.jpg",
        descripcion: "Libro con frases clave y vocabulario esencial para viajes. Incluye simulacros de situaciones."
    },
    {
        id: 10,
        clasificacion: "Libro",
        nombre: "FCE Gold Exam Trainer",
        cursoRelacionado: "First Certificate in English (FCE)",
        categoria: "Examenes",
        precio: "$54.500",
        imagen: "/assets/Imagenes/cursos/libros/fce-trainer.jpg",
        descripcion: "Manual oficial para preparar el examen B2. Incluye tips, prácticas, exámenes modelo y audio."
    },
    {
        id: 11,
        clasificacion: "Libro",
        nombre: "Advanced English Skills",
        cursoRelacionado: "CAE - Certificate in Advanced English",
        categoria: "Examenes",
        precio: "$65.000",
        imagen: "/assets/Imagenes/cursos/libros/advanced-skills.jpg",
        descripcion: "Material de alto nivel enfocado en producción escrita, comprensión lectora y auditiva avanzada."
    },
    {
        id: 12,
        clasificacion: "Libro",
        nombre: "IELTS Booster Pack",
        cursoRelacionado: "IELTS Preparation",
        categoria: "Examenes",
        precio: "$56.500",
        imagen: "/assets/Imagenes/cursos/libros/ielts-pack.jpg",
        descripcion: "Todo lo necesario para rendir el IELTS. Guías de writing, speaking y tests completos."
    },
    {
        id: 13,
        clasificacion: "Libro",
        nombre: "English for Professionals – Tech Edition",
        cursoRelacionado: "Inglés Técnico Profesional",
        categoria: "Especiales",
        precio: "$44.200",
        imagen: "/assets/Imagenes/cursos/libros/english-tech.jpg",
        descripcion: "Libro enfocado en inglés técnico aplicado a áreas como tecnología, medicina, ingeniería y más."
    },
    {
        id: 14,
        clasificacion: "Libro",
        nombre: "Interview Masterclass",
        cursoRelacionado: "Inglés para Entrevistas Laborales",
        categoria: "Especiales",
        precio: "$20.000",
        imagen: "/assets/Imagenes/cursos/libros/interview-master.jpg",
        descripcion: "Guía práctica para entrevistas en inglés. Estructuras de respuestas, simulaciones y consejos."
    },
    {
        id: 15,
        clasificacion: "Libro",
        nombre: "Hospitality & Tourism English",
        cursoRelacionado: "Inglés para Hotelería y Turismo",
        categoria: "Especiales",
        precio: "$31.800",
        imagen: "/assets/Imagenes/cursos/libros/hospitality-tourism.jpg",
        descripcion: "Libro especializado en vocabulario y situaciones del rubro hotelero, gastronómico y turístico."
    }
]
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contNiños = "";
let contAdolescentes = "";
let contAdultos = "";
let contExamenes = "";
let contEspeciales = "";

for (let i = 0; i < todosLosCursos.length; i++) {
    const tarjetaHTML = generarTarjetaCurso(todosLosCursos[i]);
    switch (todosLosCursos[i].categoria) {
        case "Niños":
            contNiños += tarjetaHTML;
            break;
        case "Adolescentes":
            contAdolescentes += tarjetaHTML;
            break;
        case "Adultos":
            contAdultos += tarjetaHTML;
            break;
        case "Examenes":
            contExamenes += tarjetaHTML;
            break;
        case "Especiales":
            contEspeciales += tarjetaHTML;
            break;
    }
}

contenedor.innerHTML = contenedor.innerHTML + `
    <div class = "cont-categoria">
        <h2 id="ninios">Niños</h2>
        <div class = "categoria">${contNiños}</div>
    </div>
    
    <div class="cont-categoria">
        <h2 id="adolescentes">Adolescentes</h2>
        <div class="categoria">${contAdolescentes}</div>
    </div>

    <div class="cont-categoria">
        <h2 id="adultos">Adultos</h2>
        <div class="categoria">${contAdultos}</div>
    </div>

    <div class="cont-categoria">
        <h2 id="mas-cursos">Exámenes Internacionales</h2>
        <div class="categoria">${contExamenes}</div>
    </div>

    <div class="cont-categoria">
        <h2>Cursos Especiales</h2>
        <div class="categoria">${contEspeciales}</div>
    </div>
`;


function generarTarjetaCurso(curso) {
    return `
        <div class="card-curso">
            <h3>${curso.nombre}</h3>
            <div class="card-imagen">
                <img src="${curso.imagen}" alt="${curso.nombre}">
            </div>
            <h4>⌛Duración: ${curso.duracion}</h4>
            <h4>📒Modalidad: ${curso.modalidad}</h4>
            <h4>🪙Arancel: ${curso.precio}</h4>
            <p>${curso.descripcion}</p>
            <p>${curso.detalle}</p>
            ${generarSelectorSede(curso.nombre)}
            <button class="btn-comprar" data-id="${curso.id}" data-tipo="${curso.clasificacion}">
                <a href="#carrito">Comprar curso</a>
            </button>
        </div>
    `;
}


function generarSelectorSede(nombreCurso) {
    return `
    <h5>Para conocer días y horarios de dictado seleccione la sede de su preferencia:</h5>
    <select class="selector-sede" data-curso="${nombreCurso}">
        <option value="Caballito">Caballito (Sede Central)</option>
        <option value="Belgrano">Belgrano</option>
        <option value="Barracas">Barracas</option>
        <option value="Quilmes">Quilmes</option>
        <option value="San_Isidro">San Isidro</option>
        <option value="Ramos_Mejia">Ramos Mejía</option>
        <option value="Virtual">Virtual</option>
    </select>
    <div class="horarios-sede"></div>
  `;
}



document.querySelectorAll(".selector-sede").forEach(select => {
    select.addEventListener("change", function () {
        const cursoName = this.dataset.curso;
        const sede = this.value;

        let dia = "";
        let horario = "No hay horarios disponibles";

        const curso = todosLosCursos.find(c => c.nombre === cursoName);

        if (curso && curso.diaHorario && curso.diaHorario[sede]) {
            dia = curso.diaHorario[sede][0];
            horario = curso.diaHorario[sede][1];
        }

        const divHorario = this.parentElement.querySelector(".horarios-sede");
        divHorario.innerHTML = `
            <strong>Sede ${sede}:</strong>
            <div class="cont-horarios">
                <p>📅 Día: ${dia}</p>
                <p>🕒 Horario: ${horario}</p>
            </div>  
        `;
    });
    // Disparar evento inicial para que se muestre al cargar
    select.dispatchEvent(new Event("change"));
});

listaLibros.forEach(libro => {
    const card = document.createElement("div");
    card.classList.add("card-libro");

    card.innerHTML = `
    <div class="card-libroImg">
        <img src="${libro.imagen}" alt="${libro.nombre}">
    </div>
    <div class="info">
      <h3>${libro.nombre}</h3>
      <p><strong>Curso:</strong> ${libro.cursoRelacionado}</p>
      <p><strong>Categoría:</strong> ${libro.categoria}</p>
      <p><strong>Precio:</strong> ${libro.precio}</p>
      <p>${libro.descripcion}</p>
    </div>
    <button class="btn-comprar" data-id="${libro.id}" data-tipo="${libro.clasificacion}">
    <a href="#carrito">Agregar al carrito</a>    
    </button>
  `;
    contenedorLibros.appendChild(card);
});


function agregarAlCarrito(id, tipo, sedeSeleccionada) {

    const producto = (tipo === "Curso" ? todosLosCursos : listaLibros)
        .find(p => p.id === id);

    if (!producto) {
        console.error("Producto no encontrado");
        return;
    }

    const yaEnCarrito = carrito.find(item => item.id === id && item.clasificacion === tipo && item.sedeSelect === sedeSeleccionada);

    if (yaEnCarrito) {
        yaEnCarrito.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1,
            sedeSelect: tipo === "Curso" ? sedeSeleccionada : null
        });
    }

    renderizarCarrito();
};

document.querySelectorAll(".btn-comprar").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = parseInt(btn.dataset.id);
        const tipo = btn.dataset.tipo;

        let sedeSeleccionada = null;

        if (tipo === "Curso") {
            const select = btn.parentElement.querySelector(".selector-sede");
            if (select) {
                sedeSeleccionada = select.value;
            }
        }

        agregarAlCarrito(id, tipo, sedeSeleccionada);
    });
});


function renderizarCarrito() {
    const contenedor = document.getElementById("productos-carrito");
    const totalElement = document.getElementById("total-carrito");
    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p class="p-carritoVacio">Su carrito está vacio</p>`;
        totalElement.innerHTML = "";
        totalElement.style.display = "none";
        return;
    }
    else {
        totalElement.style.display = "flex";
        totalElement.style.padding = "1.5rem";
    }


    btnVaciar.style.backgroundColor = "#cc000a";
    btnVaciar.style.cursor = "pointer";

    carrito.forEach(producto => {

        const item = document.createElement("div");
        item.classList.add("item-carrito");

        const precioNumerico = parseFloat(producto.precio.replace("$", ""));
        const subtotal = precioNumerico * producto.cantidad;
        total += subtotal;

        if (producto.clasificacion === "Libro") {
            item.classList.add("item-libro");
            item.innerHTML = `
            <div class="cont-item nomb-producto">
                <h4>${producto.clasificacion} </h4>
                <h4>Título: ${producto.nombre}</h4>
                <h4>Curso relacionado: ${producto.cursoRelacionado}</h4>
            </div>
        `;
        }
        else {
            item.classList.add("item-curso");
            item.innerHTML = `
            <div class="cont-item nomb-producto">
                <h4>${producto.clasificacion} </h4>
                <h4>Nombre: ${producto.nombre}</h4>
                <h4>Modalidad: ${producto.modalidad}</h4>
                <h4>Sede: ${producto.sedeSelect}</h4>
            </div>
        `;
        }

        item.innerHTML += `
            <div class="cont-item btn-cantMasMenos">
                <button class="btn-menos" data-id="${producto.id}" data-tipo="${producto.clasificacion}" data-sede="${producto.sedeSelect}">➖</button>
                <p>${producto.cantidad}</p>
                <button class="btn-mas" data-id="${producto.id}" data-tipo="${producto.clasificacion}" data-sede="${producto.sedeSelect}">➕</button>
            </div>

            <div class="cont-item precio-producto">
                <p>$${subtotal.toFixed(3)}</p>
            </div>

            <button class="btn-eliminar" data-id="${producto.id}" data-tipo="${producto.clasificacion}" ${producto.sedeSelect ? `data-sede="${producto.sedeSelect}"` : ""}>Eliminar</button>        `;
        contenedor.appendChild(item);
    });

    totalElement.innerHTML = `
        <div>
            <h3>Total</h3>
            <h3>$${total.toFixed(3)}</h3>
        </div>
        <button class="btn-finCompra">FINALIZAR COMPRA</button>
        <a class ="btn-seguirComprando" href="#alerta-inscripcion">SEGUIR COMPRANDO</a>
    `;

    localStorage.setItem("carrito", JSON.stringify(carrito));
};

document.getElementById("lista-carrito").addEventListener("click", (e) => {
    const id = parseInt(e.target.dataset.id);
    const tipo = e.target.dataset.tipo;
    const sedeInst = e.target.dataset.sede;
    let producto = null;

    if (tipo === "Curso") {
        producto = carrito.find(p => p.id === id && p.clasificacion === tipo && p.sedeSelect === sedeInst);
    }
    else {
        producto = carrito.find(p => p.id === id && p.clasificacion === tipo);
    }



    // if (!producto) {
    //     console.log("Producto no encontrado");
    //     return;
    // }
    if (e.target.classList.contains("btn-mas")) {
        producto.cantidad++;
    }
    if (e.target.classList.contains("btn-menos")) {
        if (producto.cantidad > 1) {
            producto.cantidad--;
        }
        else {
            const index = carrito.indexOf(producto);
            carrito.splice(index, 1);
        }
    }
    if (e.target.classList.contains("btn-eliminar")) {
        const index = carrito.indexOf(producto);
        carrito.splice(index, 1);
        if(carrito.length === 0){
            btnVaciar.style.backgroundColor = "#888";
            btnVaciar.style.cursor = "default";
        }
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito();
});


const btnVaciar = document.getElementById("btn-vaciar-carrito");
btnVaciar.addEventListener("click", () => {
    if (carrito.length === 0) return;
    else {
        const confirmacion = confirm("¿Estás seguro de que deseas vaciar el carrito?");
        if (confirmacion) {
            btnVaciar.style.backgroundColor = "#888";
            btnVaciar.style.cursor = "default";
            carrito = [];
            localStorage.removeItem("carrito");
            renderizarCarrito();
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});








