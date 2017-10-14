// #js-email

const navLi = document.querySelectorAll(".navigation li");

navLi.forEach(function(li) {
	li.addEventListener("click", function(ev) {
  	navLi.forEach(function(link) {
    	link.classList.remove("active");
    });
    this.classList.add("active");
  });
})
