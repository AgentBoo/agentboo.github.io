// use jquery's animate() to smooth scroll to the login section
// http://api.jquery.com/animate/
$(document).ready(function(){
  $('#loginScroll').on('click', function(_event){
    $('html, body').animate({
       scrollTop: $('#bottomsection').offset().top
    }, 600, 'linear', function(){
       //when animation completes
       window.location.hash = 'bottomsection'
    })
  })
})

// FIX THIS OK
// use jquery's animate() to smooth transition between login and signup
const logins = document.querySelectorAll('.login')
const lin = document.getElementById('login')

logins.forEach(function(login){
  login.addEventListener('click', function(_event){
    if(!login.style.display){
      sup.style.display = "none"
      lin.style.display = "block"
    } else {
      lin.style.display = 'none'
      sup.style.display = "block"
    }
  })
})

const signups = document.querySelectorAll('.signup')
const sup = document.getElementById('signup')

signups.forEach(function(signup){
  signup.addEventListener('click', function(_event){
    if(!signup.style.display){
      lin.style.display = "none"
      sup.style.display = "block"
    } else {
      sup.style.display = "none"
      lin.style.display = "block"
    }
  })
})
