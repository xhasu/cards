(function(){

	var listCard = document.querySelectorAll('.cards .card-box');

	listCard.forEach(card => card.addEventListener('click', handleClickCard, true));

	function handleClickCard(event) {
		event.preventDefault();
		listCard.forEach(card => card.classList.remove('selected'));

		this.classList.add('selected');

	};
	
})();