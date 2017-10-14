const envelope = document.getElementById("js-envelope");

envelope.addEventListener("click", function(ev){
	if (!envelope.classList.contains("css-email")){
		envelope.classList.add("css-email")
	} else {
		envelope.classList.remove("css-email");
	}
})


const navLi = document.querySelectorAll(".navigation li");

navLi.forEach(function(li){
	li.addEventListener("click", function(ev){
  	navLi.forEach(function(link){
    	link.classList.remove("active");
    });
    this.classList.add("active");
  });
})
