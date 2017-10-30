// NOTE: Animated envelope with email address
const envelope = document.getElementById("js-envelope");

envelope.addEventListener("click", function(ev){
	if (!envelope.classList.contains("css-email")){
		envelope.classList.add("css-email")
	} else {
		envelope.classList.remove("css-email");
	}
})

// NOTE: Responsive menu bar
const nav = document.getElementById('menu-nav');
const bars = document.getElementById('menu-bars');

bars.addEventListener('click', function(ev){
	if (nav.className === "ul-nav"){
		nav.classList.remove('ul-nav')
		nav.classList.add('bars-nav');
	} else {
		nav.className = 'ul-nav'
	}
})


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
