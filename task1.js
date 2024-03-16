window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.backgroundColor = "#555";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "#333";
  }
}
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    if (window.scrollY > 50) { 
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });