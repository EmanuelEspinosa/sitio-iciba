const contenedor = document.getElementById("contenedor-cursos");


let todosLosCursos = [
    {
        id: 1,
        nombreCurso: "Nivel Inicial",
        categoria: "Niños",
        duracion: "6 meses",
        precio: "$25.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/Inicial.png",
        descripcion: "Curso 100% lúdico. Ideal para introducir el idioma sin presión ni evaluaciones formales.",
        detalle: "detalle: En este nivel trabajamos con recursos visuales, auditivos y kinestésicos para introducir el idioma inglés de forma natural. Las clases incluyen canciones, juegos y cuentos que estimulan la participación activa sin necesidad de lecto-escritura."
    },
    {
        id: 2,
        nombreCurso: "6 a 8 años",
        categoria: "Niños",
        duracion: "10 meses",
        precio: "$18.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/6a8anios.png",
        descripcion: "Clases lúdicas y didácticas adaptadas a la edad. Canciones, cuentos y juegos para aprender naturalmente.",
        detalle: "A través de actividades divertidas y participativas, los estudiantes comienzan a desarrollar habilidades básicas de comprensión auditiva, vocabulario esencial y estructuras simples. Se promueve un ambiente amigable, con seguimiento personalizado."
    },
    {
        id: 3,
        nombreCurso: "9 a 11 años",
        categoria: "Niños",
        duracion: "10 meses",
        precio: "$18.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/9a11anios.png",
        descripcion: "Curso enfocado en comprensión oral y escrita. Se introducen estructuras gramaticales simples.",
        detalle: "Los alumnos comienzan a familiarizarse con expresiones más complejas, tiempos verbales simples y comprensión lectora. Utilizamos recursos audiovisuales, proyectos colaborativos y dinámicas para incentivar el uso del idioma en contexto."
    },
    {
        id: 4,
        nombreCurso: "Inglés general para Adolescentes",
        categoria: "Adolescentes",
        duracion: "10 meses",
        precio: "$22.000",
        modalidad: "pesencial / virtual",
        imagen: "/assets/Imagenes/cursos/generalAdolescentes.png",
        descripcion: "Clases dinámicas que combinan contenido gramatical con temáticas de interés juvenil y mucha conversación.",
        detalle: "Curso integral enfocado en gramática, vocabulario, conversación y comprensión escrita. Se trabaja con materiales auténticos y actuales que reflejan los intereses adolescentes. Ideal para afianzar bases sólidas del idioma en un entorno moderno."
    },
    {
        id: 5,
        nombreCurso: "Curso de conversación",
        categoria: "Adolescentes",
        duracion: "4 meses",
        precio: "$14.000",
        modalidad: "pesencial / virtual",
        imagen: "/assets/Imagenes/cursos/ConversacionAdolescente.png",
        descripcion: "Espacio de práctica oral con actividades guiadas y simulación de situaciones reales.",
        detalle: "Espacio focalizado en mejorar la fluidez oral y la pronunciación. Se simulan situaciones de la vida cotidiana, debates temáticos, presentaciones y role-plays. Apto para estudiantes con nivel preintermedio en adelante."
    },
    {
        id: 6,
        nombreCurso: "Preparación PET",
        categoria: "Adolescentes",
        duracion: "6 meses",
        precio: "$24.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/preparacionPet.png",
        descripcion: "Preparación para el Preliminary English Test de Cambridge. Nivel Intermedio.",
        detalle: "Curso oficial de preparación para el Preliminary English Test (nivel B1). Incluye práctica intensiva con exámenes modelo, desarrollo de estrategias de lectura y escritura, y entrenamiento oral personalizado."
    },
    {
        id: 7,
        nombreCurso: "Curso Anual",
        categoria: "Adultos",
        duracion: "12 meses",
        precio: "$25.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/anualAdultos.png",
        descripcion: "Curso extensivo ideal para adultos que desean avanzar gradualmente con apoyo constante.",
        detalle: "Diseñado para quienes buscan un aprendizaje progresivo. Se abordan las cuatro habilidades lingüísticas (reading, writing, listening y speaking) en un entorno colaborativo. Las clases ofrecen seguimiento personalizado y evaluación continua."
    },
    {
        id: 8,
        nombreCurso: "Curso Intensivo",
        categoria: "Adultos",
        duracion: "6 meses",
        precio: "$26.000",
        modalidad: "pesencial / virtual",
        imagen: "/assets/Imagenes/cursos/intensivoAdultos.png",
        descripcion: "Ideal para quienes tienen poco tiempo y quieren resultados rápidos. 2 clases semanales.",
        detalle: "Pensado para personas con disponibilidad limitada que necesitan avanzar rápidamente. Clases más frecuentes, tareas domiciliarias y contenidos condensados. Ideal para quienes ya tienen una base del idioma y buscan consolidarla."
    },
    {
        id: 9,
        nombreCurso: "Inglés para viajes",
        categoria: "Adultos",
        duracion: "3 meses",
        precio: "$13.500",
        modalidad: "pesencial / virtual",
        imagen: "/assets/Imagenes/cursos/viajesAdultos.png",
        descripcion: "Frases clave, vocabulario esencial y práctica de situaciones comunes al viajar al extranjero.",
        detalle: "Curso práctico y dinámico para aprender vocabulario esencial y frases útiles para aeropuertos, hoteles, restaurantes y situaciones sociales. Incluye simulaciones reales y material audiovisual."
    },
    {
        id: 10,
        nombreCurso: "First Certificate in English (FCE)",
        categoria: "Examenes",
        duracion: "6 meses",
        precio: "$28.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/first.png",
        descripcion: "Curso oficial de preparación para rendir el examen B2 de Cambridge. Simulacros y práctica intensiva.",
        detalle: "Prepara al estudiante para rendir el examen oficial de nivel B2. Se trabaja sobre todas las secciones del examen (Reading, Writing, Listening, Use of English y Speaking), con simulacros, correcciones y feedback detallado."
    },
    {
        id: 11,
        nombreCurso: "CAE - Certificate in Advanced English",
        categoria: "Examenes",
        duracion: "7 meses",
        precio: "$30.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/cae.png",
        descripcion: "Preparación para rendir el examen C1 de Cambridge. Ideal para objetivos académicos o profesionales.",
        detalle: "Curso especializado en el examen de nivel C1 de Cambridge. Ideal para estudiantes avanzados que buscan validar su conocimiento con un título oficial. Clases enfocadas en estrategias de comprensión, redacción y fluidez oral."
    },
    {
        id: 12,
        nombreCurso: "IELTS Preparation",
        categoria: "Examenes",
        duracion: "3 meses",
        precio: "$32.000",
        modalidad: "pesencial",
        imagen: "/assets/Imagenes/cursos/ielts.png",
        descripcion: "Enfocado en comprensión lectora, auditiva, redacción y entrevista oral. Simulacros reales incluidos.",
        detalle: "Preparación intensiva para el examen académico IELTS. Enfocado en obtener resultados óptimos en todas las secciones del examen: Reading, Writing, Listening y Speaking. Incluye materiales auténticos y práctica supervisada."
    },
    {
        id: 13,
        nombreCurso: "Inglés Técnico Profesional",
        categoria: "Especiales",
        duracion: "4 meses",
        precio: "$20.000",
        modalidad: "pesencial / virtual",
        imagen: "/assets/Imagenes/cursos/tecnico.png",
        descripcion: "Curso especializado en inglés técnico aplicado a distintas profesiones (IT, medicina, ingeniería, etc).",
        detalle: "Enfocado en el aprendizaje de vocabulario técnico y expresiones utilizadas en entornos profesionales como ingeniería, informática, medicina, etc. Se trabaja con textos reales, casos de estudio y simulaciones laborales."
    },
    {
        id: 14,
        nombreCurso: "Inglés para Entrevistas Laborales",
        categoria: "Especiales",
        duracion: "2 meses",
        precio: "$12.000",
        modalidad: "virtual",
        imagen: "/assets/Imagenes/cursos/entrevistaLaboral.png",
        descripcion: "Taller intensivo para preparar entrevistas en inglés. Preguntas frecuentes, respuestas y role play.",
        detalle: "Este taller intensivo ayuda a los participantes a prepararse para entrevistas en inglés. Incluye preguntas frecuentes, cómo hablar de experiencias laborales y estudios, simulaciones en tiempo real y tips para destacar en el proceso."
    },
    {
        id: 15,
        nombreCurso: "Inglés para Hotelería",
        categoria: "Especiales",
        duracion: "4 meses",
        precio: "$19.000",
        modalidad: "Presencial / Virtual",
        imagen: "/assets/Imagenes/cursos/hoteleria.png",
        descripcion: "Curso diseñdo para quienes trabajan o desean trabajar en el sector hotelero y turístico",
        detalle: "Este curso brinda herramientas lingüísticas específicas para la atención al cliente en hoteles, agencias de viajes, aerolíneas y servicios turísticos. Se trabaja con simulaciones de situaciones reales como reservas, check-in, atención de reclamos, city tours, entre otros. Ideal para mejorar el nivel profesional y aumentar oportunidades laborales en el rubro."
    }
];



const horariosPorCursoYSede = {
    "Nivel Inicial": {
        Caballito: ["Martes", "16:00 a 17:30 hs"],
        Belgrano: ["Miércoles", "17:00 a 18:30 hs"],
        Barracas: ["Sábados", "10:00 a 11:30 hs"],
        Quilmes: ["Lunes", "17:00 a 18:30 hs"],
        San_Isidro: ["Martes", "16:00 a 17:30 hs"],
        Ramos_Mejia: ["Sábados", "09:00 a 10:30 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "6 a 8 años": {
        Caballito: ["Lunes", "17:00 a 18:30 hs"],
        Belgrano: ["Martes", "16:30 a 18:00 hs"],
        Barracas: ["Sábados", "11:00 a 12:30 hs"],
        Quilmes: ["Miércoles", "18:00 a 19:30 hs"],
        San_Isidro: ["Jueves", "17:00 a 18:30 hs"],
        Ramos_Mejia: ["Sábados", "10:30 a 12:00 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "9 a 11 años": {
        Caballito: ["Jueves", "18:00 a 19:30 hs"],
        Belgrano: ["Viernes", "17:00 a 18:30 hs"],
        Barracas: ["Sábados", "09:00 a 10:30 hs"],
        Quilmes: ["Martes", "17:00 a 18:30 hs"],
        San_Isidro: ["Viernes", "18:00 a 19:30 hs"],
        Ramos_Mejia: ["Sábados", "11:00 a 12:30 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "Inglés general para Adolescentes": {
        Caballito: ["Lunes", "17:30 a 19:30 hs"],
        Belgrano: ["Martes", "17:30 a 19:30 hs"],
        Barracas: ["Sábados", "10:00 a 12:00 hs"],
        Quilmes: ["Jueves", "17:30 a 19:30 hs"],
        San_Isidro: ["Miércoles", "17:30 a 19:30 hs"],
        Ramos_Mejia: ["Sábados", "09:00 a 11:00 hs"],
        Virtual: ["Martes", "10:00 - 12:00 hs (vía Zoom)"]
    },
    "Curso de conversación": {
        Caballito: ["Lunes", "17:00 a 19:00 hs"],
        Belgrano: ["Martes", "19:30 a 21:00 hs"],
        Barracas: ["Miércoles", "20:00 a 21:30 hs"],
        Quilmes: ["Jueves", "20:00 a 21:30 hs"],
        San_Isidro: ["Viernes", "20:00 a 21:30 hs"],
        Ramos_Mejia: ["Sábados", "14:00 a 15:30 hs"],
        Virtual: ["Viernes", "10:00 - 12:00 hs (vía Zoom)"]
    },
    "Preparación PET": {
        Caballito: ["Martes", "17:30 a 19:30 hs"],
        Belgrano: ["Miércoles", "17:00 a 19:00 hs"],
        Barracas: ["Sábados", "10:00 a 12:00 hs"],
        Quilmes: ["Lunes", "17:30 a 19:30 hs"],
        San_Isidro: ["Jueves", "17:30 a 19:30 hs"],
        Ramos_Mejia: ["Sábados", "09:30 a 11:30 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]
    },
    "Curso Anual": {
        Caballito: ["Lunes", "17:30 a 19:30 hs"],
        Belgrano: ["Martes", "10:00 a 12:00 hs"],
        Barracas: ["Sábados", "10:30 a 12:30 hs"],
        Quilmes: ["Miércoles", "17:00 a 19:00 hs"],
        San_Isidro: ["Jueves", "17:30 a 19:30 hs"],
        Ramos_Mejia: ["Sábados", "10:00 a 12:00 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "Curso Intensivo": {
        Caballito: ["Lunes y Miércoles", "09:00 a 11:00 hs"],
        Belgrano: ["Martes y jueves", "17:30 a 19:30 hs"],
        Barracas: ["Lunes y jueves", "17:00 a 19:00 hs"],
        Quilmes: ["Miércoles y Viernes", "09:30 a 11:30 hs"],
        San_Isidro: ["Miércoles y Sábado", "10:00 a 12:00 hs"],
        Ramos_Mejia: ["Lunes y Jueves", "09:30 a 11:30 hs"],
        Virtual: ["Jueves y Sabado", "10:00 - 12:00 hs (vía Zoom)"]
    },
    "Inglés para viajes": {
        Caballito: ["Miércoles", "17:30 a 19:30 hs"],
        Belgrano: ["Viernes", "10:00 a 12:00 hs"],
        Barracas: ["Martes", "10:30 a 12:30 hs"],
        Quilmes: ["Sábados", "10:00 a 12:00 hs"],
        San_Isidro: ["Lunes", "17:00 a 19:00"],
        Ramos_Mejia: ["Jueves", "17:30 a 19:30"],
        Virtual: ["Jueves", "10:00 - 12:00 hs (vía Zoom)"]
    },
    "First Certificate in English (FCE)": {
        Caballito: ["Lunes", "12:00 a 15:00 hs"],
        Belgrano: ["Martes", "16:00 a 17:00 hs"],
        Barracas: ["Sábados", "12:00 a 15:00 hs"],
        Quilmes: ["Miércoles", "15:00 a 18:00 hs"],
        San_Isidro: ["Lunes", "10:00 a 13:00 hs"],
        Ramos_Mejia: ["Sábados", "08:30 a 11:30 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "CAE - Certificate in Advanced English": {
        Caballito: ["Jueves", "12:00 a 15:00 hs"],
        Belgrano: ["Lunes", "16:00 a 17:00 hs"],
        Barracas: ["Miércoles", "12:00 a 15:00 hs"],
        Quilmes: ["Martes", "15:00 a 18:00 hs"],
        San_Isidro: ["Sábado", "10:00 a 13:00 hs"],
        Ramos_Mejia: ["Sábados", "08:30 a 11:30 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "IELTS Preparation": {
        Caballito: ["Martes", "12:00 a 15:00 hs"],
        Belgrano: ["Jueves", "16:00 a 17:00 hs"],
        Barracas: ["Lunes", "12:00 a 15:00 hs"],
        Quilmes: ["Viernes", "15:00 a 18:00 hs"],
        San_Isidro: ["Miércoles", "10:00 a 13:00 hs"],
        Ramos_Mejia: ["Sábados", "08:30 a 11:30 hs"],
        Virtual: ["Este curso solo se ofrece en modalidad presencial.", "No disponible"]

    },
    "Inglés Técnico Profesional": {
        Caballito: ["Martes", "18:00 a 19:30 hs"],
        Belgrano: ["Miércoles", "09:00 a 10:30 hs"],
        Barracas: ["Sábados", "10:00 a 12:00 hs"],
        Quilmes: ["Lunes", "17:00 a 18:30 hs"],
        San_Isidro: ["Jueves", "10:00 a 11:30 hs"],
        Ramos_Mejia: ["Sábados", "11:00 a 12:30 hs"],
        Virtual: ["Lunes", "16:00 - 18:00 hs (vía Zoom)"]
    },
    "Inglés para Entrevistas Laborales": {
        Caballito: ["Martes", "20:00 a 21:00 hs (Via Zoom)"],
        Belgrano: ["Miércoles", "18:00 a 20:00 hs (Via Zoom)"],
        Barracas: ["Lunes", "19:30 a 21:30 hs (Via Zoom)"],
        Quilmes: ["Sábados", "09:00 a 11:00 hs (Via Zoom)"],
        San_Isidro: ["Viernes", "19:00 a 21:00 hs (Via Zoom)"],
        Ramos_Mejia: ["Jueves", "20:00 a 22:00 hs (Via Zoom)"],
        Virtual: ["Este curso se ofrece exclusivamente en modalidad virtual.", "Seleccione una sede para conocer dias y horarios"]
    },
    "Inglés para Hotelería": {
        Caballito: ["Lunes", "18:00 a 19:30 hs"],
        Belgrano: ["Martes", "10:00 a 11:30 hs"],
        Barracas: ["Viernes", "18:30 a 20:00 hs"],
        Quilmes: ["Sábados", "11:00 a 13:00 hs"],
        San_Isidro: ["Miércoles", "17:00 a 18:30 hs"],
        Ramos_Mejia: ["Lunes", "10:00 a 12:00 hs"],
        Virtual: ["Jueves", "16:00 - 18:00 hs (vía Zoom)"]
    }
}

let contNiños = "";
let contAdolescentes = "";
let contAdultos = "";
let contExamenes = "";
let contEspeciales = "";

for (let i = 0; i < todosLosCursos.length; i++) {
    if (todosLosCursos[i].categoria == "Niños") {
        contNiños += `
            <div class = "card-curso">
                <h3>${todosLosCursos[i].nombreCurso}</h3>
                <div class="card-imagen">
                    <img src=${todosLosCursos[i].imagen}>
                </div>
                <h4>⌛Duración: ${todosLosCursos[i].duracion}</h4>
                <h4>📒Modalidad: ${todosLosCursos[i].modalidad}</h4>
                <h4>🪙Valor del curso: ${todosLosCursos[i].precio}</h4>
                
                <p>${todosLosCursos[i].descripcion}</p>
                <p>${todosLosCursos[i].detalle}</p>
                <h5>Para conocer días y horarios de dictado seleccione la sede de su preferencia</h5>
                <select class="selector-sede" data-curso="${todosLosCursos[i].nombreCurso}">
                    <option value="Caballito" selected>Caballito (Sede Central)</option>
                    <option value="Belgrano">Belgrano</option>
                    <option value="Barracas">Barracas</option>
                    <option value="Quilmes">Quilmes</option>
                    <option value="San_Isidro">San Isidro</option>
                    <option value="Ramos_Mejia">Ramos Mejía</option>
                    <option value="Virtual">Virtual</option>
                </select>
                <div class="horarios-sede"></div>
                <button class="btn-comprarCurso" data-id="${todosLosCursos[i].id}">Comprar curso</button>
            </div>
        `
    }
    else if (todosLosCursos[i].categoria == "Adolescentes") {
        contAdolescentes += `
            <div class = "card-curso">
                <h3>${todosLosCursos[i].nombreCurso}</h3>
                <div class="card-imagen">
                    <img src=${todosLosCursos[i].imagen}>
                </div>
                <h4>⌛Duración: ${todosLosCursos[i].duracion}</h4>
                <h4>📒Modalidad: ${todosLosCursos[i].modalidad}</h4>
                <h4>🪙Valor del curso: ${todosLosCursos[i].precio}</h4>
                
                <p>${todosLosCursos[i].descripcion}</p>
                <p>${todosLosCursos[i].detalle}</p>
                <h5>Para conocer días y horarios de dictado seleccione la sede de su preferencia</h5>
                <select class="selector-sede" data-curso="${todosLosCursos[i].nombreCurso}">
                    <option value="Caballito" selected>Caballito (Sede Central)</option>
                    <option value="Belgrano">Belgrano</option>
                    <option value="Barracas">Barracas</option>
                    <option value="Quilmes">Quilmes</option>
                    <option value="San_Isidro">San Isidro</option>
                    <option value="Ramos_Mejia">Ramos Mejía</option>
                    <option value="Virtual">Virtual</option>
                </select>
                <div class="horarios-sede"></div>
                <button class="btn-comprarCurso" data-id="${todosLosCursos[i].id}">Comprar curso</button>
            </div>
        `
    }
    else if (todosLosCursos[i].categoria == "Adultos") {
        contAdultos += `
            <div class = "card-curso">
                <h3>${todosLosCursos[i].nombreCurso}</h3>
                <div class="card-imagen">
                    <img src=${todosLosCursos[i].imagen}>
                </div>
                <h4>⌛Duración: ${todosLosCursos[i].duracion}</h4>
                <h4>📒Modalidad: ${todosLosCursos[i].modalidad}</h4>
                <h4>🪙Valor del curso: ${todosLosCursos[i].precio}</h4>
                
                <p>${todosLosCursos[i].descripcion}</p>
                <p>${todosLosCursos[i].detalle}</p>
                <h5>Para conocer días y horarios de dictado seleccione la sede de su preferencia</h5>
                <select class="selector-sede" data-curso="${todosLosCursos[i].nombreCurso}">
                    <option value="Caballito" selected>Caballito (Sede Central)</option>
                    <option value="Belgrano">Belgrano</option>
                    <option value="Barracas">Barracas</option>
                    <option value="Quilmes">Quilmes</option>
                    <option value="San_Isidro">San Isidro</option>
                    <option value="Ramos_Mejia">Ramos Mejía</option>
                    <option value="Virtual">Virtual</option>
                </select>
                <div class="horarios-sede"></div>
                <button class="btn-comprarCurso" data-id="${todosLosCursos[i].id}">Comprar curso</button>
            </div>
        `
    }
    else if (todosLosCursos[i].categoria == "Examenes") {
        contExamenes += `
            <div class = "card-curso">
                <h3>${todosLosCursos[i].nombreCurso}</h3>
                <div class="card-imagen">
                    <img src=${todosLosCursos[i].imagen}>
                </div>
                <h4>⌛Duración: ${todosLosCursos[i].duracion}</h4>
                <h4>📒Modalidad: ${todosLosCursos[i].modalidad}</h4>
                <h4>🪙Valor del curso: ${todosLosCursos[i].precio}</h4>
                
                <p>${todosLosCursos[i].descripcion}</p>
                <p>${todosLosCursos[i].detalle}</p>
                <h5>Para conocer días y horarios de dictado seleccione la sede de su preferencia</h5>
                <select class="selector-sede" data-curso="${todosLosCursos[i].nombreCurso}">
                    <option value="Caballito" selected>Caballito (Sede Central)</option>
                    <option value="Belgrano">Belgrano</option>
                    <option value="Barracas">Barracas</option>
                    <option value="Quilmes">Quilmes</option>
                    <option value="San_Isidro">San Isidro</option>
                    <option value="Ramos_Mejia">Ramos Mejía</option>
                    <option value="Virtual">Virtual</option>
                </select>
                <div class="horarios-sede"></div>
                <button class="btn-comprarCurso" data-id="${todosLosCursos[i].id}">Comprar curso</button>
            </div>
        `
    }
    else {
        contEspeciales += `
            <div class = "card-curso">
                <h3>${todosLosCursos[i].nombreCurso}</h3>
                <div class="card-imagen">
                    <img src=${todosLosCursos[i].imagen}>
                </div>
                <h4>⌛Duración: ${todosLosCursos[i].duracion}</h4>
                <h4>📒Modalidad: ${todosLosCursos[i].modalidad}</h4>
                <h4>🪙Valor del curso: ${todosLosCursos[i].precio}</h4>
                
                <p>${todosLosCursos[i].descripcion}</p>
                <p>${todosLosCursos[i].detalle}</p>
                <h5>Para conocer días y horarios de dictado seleccione la sede de su preferencia</h5>
                <select class="selector-sede" data-curso="${todosLosCursos[i].nombreCurso}">
                    <option value="Caballito" selected>Caballito (Sede Central)</option>
                    <option value="Belgrano">Belgrano</option>
                    <option value="Barracas">Barracas</option>
                    <option value="Quilmes">Quilmes</option>
                    <option value="San_Isidro">San Isidro</option>
                    <option value="Ramos_Mejia">Ramos Mejía</option>
                    <option value="Virtual">Virtual</option>
                </select>
                <div class="horarios-sede"></div>
                <button class="btn-comprarCurso" data-id="${todosLosCursos[i].id}">Comprar curso</button>
            </div>
        `
    }
}

contenedor.innerHTML = contenedor.innerHTML + `
    <div class = "cont-categoria">
        <h2>Niños</h2>
        <div class = "categoria">${contNiños}</div>
    </div>
    
    <div class="cont-categoria">
        <h2>Adolescentes</h2>
        <div class="categoria">${contAdolescentes}</div>
    </div>

    <div class="cont-categoria">
        <h2>Adultos</h2>
        <div class="categoria">${contAdultos}</div>
    </div>

    <div class="cont-categoria">
        <h2>Exámenes Internacionales</h2>
        <div class="categoria">${contExamenes}</div>
    </div>

    <div class="cont-categoria">
        <h2>Cursos Especiales</h2>
        <div class="categoria">${contEspeciales}</div>
    </div>
`;


document.querySelectorAll(".selector-sede").forEach(select => {
    select.addEventListener("change", function () {
        const curso = this.dataset.curso;
        const sede = this.value;

        let horario = "No hay horarios disponibles";
        let dia = ""

        if (horariosPorCursoYSede[curso]) {
            if (horariosPorCursoYSede[curso][sede]) {
                dia = horariosPorCursoYSede[curso][sede][0];
                horario = horariosPorCursoYSede[curso][sede][1];
            }
        }

        const divHorario = this.parentElement.querySelector(".horarios-sede");
        divHorario.innerHTML = `
            <strong>Sede ${sede}:</strong>
            <div class="cont-horarios">
                <p>📅 Dia: ${dia}</p>
                <p>🕒 Horario: ${horario}</p>
            </div>  
        `;
    });

    // Disparar evento inicial para que se muestre al cargar
    select.dispatchEvent(new Event("change"));
});



