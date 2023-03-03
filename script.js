function countdown() {
	// Set the date we're counting down to
	let countDownDate = new Date("March 12, 2023 15:37:25").getTime();

	// Update the countdown every 1 second
	let x = setInterval(function() {

		// Get today's date and time
		let now = new Date().getTime();

		// Find the distance between now and the countdown date
		let diff = countDownDate - now;

		// Calculate the days, hours, minutes and seconds left
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((diff % (1000 * 60)) / 1000);

		// Display the result in the HTML elements
		document.getElementById("days").innerHTML = days + "d";
		document.getElementById("hours").innerHTML = hours + "h";
		document.getElementById("minutes").innerHTML = minutes + "m";
		document.getElementById("seconds").innerHTML = seconds + "s";
    })
}