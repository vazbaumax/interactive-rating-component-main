//Obtener los elementos HTML y guardarlos en constantes
const submit_btn = document.querySelector(".rating-card__submit-btn");
const rating_card = document.querySelector(".rating-card__content-1");
const thanks_card = document.querySelector(".rating-card__content-2");
const rate_btn = document.querySelectorAll(".rating-card__rate");
const score = document.querySelector(".score");

//decalarar la variable de la calificación e iniciarlizarla en cero
let rated_score = 0;

//Ahora, al boton de submit hay ponerle el evento de escuchar cuando sea clickeado
//Y mandar a llamar a una función para mostrar y ocultar las diferentes cards
submit_btn.addEventListener("click", botonSubmit);
rate_btn.forEach((btn) => {
	btn.addEventListener("click", obtenerCalificacion);
});

function botonSubmit() {
	rating_card.classList.add("hide");
	score.textContent = rated_score;
	thanks_card.classList.remove("hide");
}

function obtenerCalificacion(event) {
	rate_btn.forEach((btn) => {
		btn.classList.remove("active");
	});

	if (event.target.classList.contains("rating-card__rate")) {
		event.target.classList.add("active");
	} else {
		event.target.parentElement.classList.add("active");
	}

	rated_score = event.target.textContent;
	console.log(rated_score);
}

//console.log(rate_btn);
