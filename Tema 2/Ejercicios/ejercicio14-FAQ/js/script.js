/* 
Ejercicio 14: Generar una lista de preguntas frecuentes (FAQ)
Construye una sección de preguntas frecuentes con preguntas y respuestas.
Crea un array de objetos donde cada objeto represente una pregunta frecuente con las
propiedades pregunta y respuesta.
Muestra cada pregunta en un <h4> y su respuesta en un <p>, de forma que quede
organizada en el DOM como una sección <section> de preguntas frecuentes.
Utiliza estilos básicos para diferenciar visualmente preguntas y respuestas.
*/
const faqs = [
    {
        pregunta: "¿Cuál es la política de devoluciones?",
        respuesta: "Nuestra política de devoluciones permite devolver productos dentro de los 30 días posteriores a la compra con el recibo original."
    },
    {
        pregunta: "¿Cómo puedo rastrear mi pedido?",
        respuesta: "Puede rastrear su pedido utilizando el número de seguimiento proporcionado en el correo electrónico de confirmación de envío."
    },
    {
        pregunta: "¿Ofrecen envío internacional?",
        respuesta: "Sí, ofrecemos envío internacional a varios países. Consulte nuestra página de envío para más detalles."
    },
    {
        pregunta: "¿Qué métodos de pago aceptan?",
        respuesta: "Aceptamos tarjetas de crédito, débito, PayPal y transferencias bancarias."
    }
];

const faqSection = document.getElementById('faq-section');

faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const question = document.createElement('h4');
    question.textContent = faq.pregunta;
    faqItem.appendChild(question);

    const answer = document.createElement('p');
    answer.textContent = faq.respuesta;
    faqItem.appendChild(answer);

    faqSection.appendChild(faqItem);

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
    });
});
