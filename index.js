// NOTE: Animated envelope with email address
const envelope = document.getElementById("js-envelope");

envelope.addEventListener("click", function(ev){
	if (!envelope.classList.contains("css-email")){
		envelope.classList.add("css-email")
	} else {
		envelope.classList.remove("css-email");
	}
})

// NOTE: Top button
// Tutorial at: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 20px from the top of the document, show the button
const topIcon = document.getElementById("js-fa-up");
window.onscroll = function(){scrollFn()};

function scrollFn() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
				console.log('A')
        topIcon.style.display = "block";
    } else {
				console.log('B')
        topIcon.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topIcon.addEventListener("click", function(icon){
		console.log('C')
		document.body.scrollTop = 0; // For Chrome, Safari and Opera
		document.documentElement.scrollTop = 0; // For IE and Firefox
})


// NOTE: Menu bars
// Based on this tutorial: https://www.w3schools.com/howto/howto_js_accordion.asp
const bars = document.querySelector("#js-fa-bars");
const nav = document.querySelector(".links-nav");

bars.addEventListener("click", function(bars){
	console.log('D')
	nav.classList.toggle("active")

})

// NOTE: Page jumps within #portfolio


// NOTE: Memo works as an accordion
const flask = document.getElementById("js-fa-flask");
flask.addEventListener("click", function(flask){
	const memo = document.getElementById("memo");
	if (memo.style.maxHeight){
		memo.style.maxHeight = null;
	} else {
		memo.style.maxHeight = memo.scrollHeight + "px";
	}
})
