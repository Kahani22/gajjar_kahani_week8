(() => {
	console.log("Fired! Ready to jam!");

	function playDrumSound(event) {
		// debugger;
		// select the corresponding audio element and make it play


	let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	// console.log(audio);
	// 
	// debugging / error handling
	// if we don't have a amtching audio element, then kill the function
	// ! is a "not" operator or a bang
	if (!audio) { return; } 

	// rewind audio on every click and make it play

    audio.currentTime = 0;
	audio.play();
}


window.addEventListener("keydown", playDrumSound);

})();