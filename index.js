// NOTE: Animated envelope with email address
const envelope = document.getElementById("js-envelope");

envelope.addEventListener("click", function(ev){
	if (!envelope.classList.contains("css-email")){
		envelope.classList.add("css-email")
	} else {
		envelope.classList.remove("css-email");
	}
})

// NOTE: Pretending I am serving multiple pages and making the nav bar 'reflect that'
const navLi = document.querySelectorAll(".navigation li");

navLi.forEach(function(li){
	li.addEventListener("click", function(ev){
  	navLi.forEach(function(link){
    	link.classList.remove("active");
    });
    this.classList.add("active");
  });
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
