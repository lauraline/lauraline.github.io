var slideIndex = 0;
var stoptime;
showSlides();

// Thumbnail image controls
function currentSlide(n) {
	manualshowSlides(slideIndex = n);
}

function manualshowSlides(n) {
	var i;
	var slides = document.getElementsByClassName("cvsection");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
	clearTimeout(stoptime);
	slideIndex--;
	showSlides();
}

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("cvsection");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	//dots[slideIndex].className += " active";
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1} 
	slides[slideIndex-1].style.display = "block"; 
	dots[slideIndex-1].className += " active";
	stoptime = setTimeout(showSlides, 5000); // Change image every 2 seconds
}