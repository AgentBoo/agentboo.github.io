// Based on
// https://www.w3schools.com/howto/howto_js_accordion.asp
const colBtns = document.querySelectorAll('.cardBtn')

colBtns.forEach(function(btn){
  btn.addEventListener('click', function(event){
    let content = event.target.nextElementSibling;

    if(content.style.maxHeight){
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})
