// NOTE: Menu bars
// Location: header > nav
// Based on this tutorial: https://www.w3schools.com/howto/howto_js_accordion.asp
const bars = document.getElementById("js-fa-bars");
const nav = document.querySelector(".links-nav");

bars.addEventListener("click", function(_event){
	nav.classList.toggle("active")

})

// NOTE: Project jumps within #portfolio
const container = document.getElementById("portfolio")
let subsections = document.querySelectorAll(".js-hook")
// there should be the same number of right buttons and left buttons
let btnR = document.querySelectorAll(".fa-long-arrow-right")
let btnL = document.querySelectorAll(".fa-long-arrow-left")

for(let i = 0; i < btnR.length; i++){
	btnR[i].addEventListener("click", function(_event){
		// console.log('right');
		let thisContainer = this.parentNode.parentNode.parentNode;
		let nextContainer = this.parentNode.parentNode.parentNode.nextElementSibling;

		if(nextContainer){
			thisContainer.style.display = "none";
			nextContainer.style.display = "block";
		}
	});

	btnL[i].addEventListener("click", function(_event){
		// console.log('left');
		let thisContainer = this.parentNode.parentNode.parentNode;
		let previousContainer = this.parentNode.parentNode.parentNode.previousElementSibling;

		if(previousContainer){
			thisContainer.style.display = "none";
			previousContainer.style.display = "block"
		}
	});
}

// NOTE: Memo works as an accordion
// Location: flask icon under about me
const flask = document.getElementById("js-fa-flask");

flask.addEventListener("click", function(_event){
	const memo = document.getElementById("memo");
	if (memo.style.maxHeight){
		memo.style.maxHeight = null;
	} else {
		memo.style.maxHeight = memo.scrollHeight + "px";
	}
})

// NOTE: Animated envelope with email address
//  Location: contact me subsection
const envelope = document.getElementById("js-envelope");

envelope.addEventListener("click", function(_event){
	if (!envelope.classList.contains("css-email")){
		envelope.classList.add("css-email")
	} else {
		envelope.classList.remove("css-email");
	}
})

// NOTE: Top button
// Location: shows up by the footer
// Tutorial at: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 45px from the top of the document, show the button
const scrollTopBtn = document.getElementById("js-fa-up");
window.onscroll = function(){
	scrollFn()
};

function scrollFn() {
    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener("click", function(_event){
		document.body.scrollTop = 0; // For Chrome, Safari and Opera
		document.documentElement.scrollTop = 0; // For IE and Firefox
})
