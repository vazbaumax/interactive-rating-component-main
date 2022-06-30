//Obtener los elementos HTML y guardarlos en constantes
const submit_btn = document.querySelector(".rating-card__submit-btn");
const rating_card = document.querySelector(".rating-card__content-1");
const thanks_card = document.querySelector(".rating-card__content-2");
const rate_btn = document.querySelectorAll(".rating-card__rate");
const calificacion = document.querySelector(".score");

//decalarar la variable de la calificación e iniciarlizarla en cero
let calificacion_dada = 0;

//Ahora, al boton de submit hay ponerle el evento de escuchar cuando sea clickeado
//Y mandar a llamar a una función para mostrar y ocultar las diferentes cards
submit_btn.addEventListener("click", botonSubmit);
rate_btn.forEach((btn) => {
	btn.addEventListener("click", obtenerCalificacion);
});

//Esta es la funcion que cambia las cards cuando el boton de submit es clickeado
function botonSubmit() {
	rating_card.classList.add("hide");
	calificacion.textContent = calificacion_dada;
	thanks_card.classList.remove("hide");
}

//Esta función cambia quita el estado activo del boton de una califición
function obtenerCalificacion(event) {
	rate_btn.forEach((btn) => {
		btn.classList.remove("active");
	});

		//Aqui primero valida algo pero no entiendo bien qué es
	if (event.target.classList.contains("rating-card__rate")) {
		// y agrega la clase activo al boton que ha sido clickeado
		event.target.classList.add("active");
	} else {
		//sino lo deja en el elemento q lo tiene
		event.target.parentElement.classList.add("active");
	}

	//
	rated_score = event.target.textContent;
	console.log(rated_score);
}

//console.log(rate_btn);
