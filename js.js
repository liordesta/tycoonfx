// Side Nav - Mobile
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge: 'right'
  });
});

// Change Icons
document.querySelectorAll("h6").forEach((elm) => elm.addEventListener("onmouseover",  function(){
  changeIcon()
}))
document.querySelectorAll("h6").forEach((elm) => elm.addEventListener("onmouseleave", function(){
  returnIcon()
}))

function changeIcon() {
  event.target.previousElementSibling.src="./src/images/assets/icon-hover.svg";
}

function returnIcon() {
  event.target.previousElementSibling.src="./src/images/assets/icon.svg";
}