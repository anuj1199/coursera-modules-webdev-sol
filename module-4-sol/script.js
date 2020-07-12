(function a() {

	var Wish = ["Anuj", "Kartik", "Jeet", "Ankit", "Siddhant", "Jimmy", "Aditya", "Dev", "TinTin", "Jacob"];
	for (var j = 0; j < Wish.length; j++) {
		if (Wish[j].charAt(0).toLowerCase() === 'j') {
			byeSpeaker.speak(Wish[j]);
		} 
		else {
			helloSpeaker.speak(Wish[j]);
		}
	}
}

)();
