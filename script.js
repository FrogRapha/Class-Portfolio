window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}


