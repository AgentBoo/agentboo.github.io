// use vanilla js to make a sidebar menu
// https://www.w3schools.com/howto/howto_js_sidenav.asp

const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const sidenav = document.querySelector('.sidenav')


openBtn.addEventListener('click', function(_event){
  sidenav.style.width = '240px'
  // main.style.marginLeft = '240px'
})

closeBtn.addEventListener('click', function(_event){
  sidenav.style.width = "0"
  // main.style.marginLeft = '0'
})
