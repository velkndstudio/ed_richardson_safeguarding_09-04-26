 document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
  document.getElementById('mobile-menu').classList.toggle('show-mobile-menu');
});



// Hero text

window.onload = function() {
  heroSwipe1();
  
};

function heroSwipe1() {
  let heroText1 = document.getElementById('hero-text-desktop');
  let heroText2 = document.getElementById('hero-text');
  heroText1.style.opacity = '1';
  heroText1.style.transform = 'translateX(0px)';
  setTimeout(function(){
    heroText2.style.opacity = '1';
    heroText2.style.transform = 'translateX(0px)';
  }, 500)
}


// Slide animations

function slideUp(element, amount, pic) {
  element.style.bottom = amount;
  // pic.setAttribute("height", "44px");
  // pic.setAttribute("width", "44px");
  
}

function slideDown(element, amount, pic) {
  element.style.bottom = amount;
  // pic.setAttribute("height", "42px");
  // pic.setAttribute("width", "42px");
}

// Areas

let areaBoxes = document.getElementsByClassName("area");
console.log(areaBoxes);

let areaOverlays = document.getElementsByClassName("area-overlay");
console.log(areaOverlays);

let icon = document.getElementsByClassName('area-svg');
console.log(icon);


for (let i = 0; i < areaBoxes.length; i++){
  areaBoxes[i].addEventListener('mouseover', function(){
    slideUp(areaOverlays[i], '0px', icon[i]);
  });
}

for (let i = 0; i < areaBoxes.length; i++){
  areaBoxes[i].addEventListener('mouseout', function(){
    slideDown(areaOverlays[i], '-70px', icon[i]);
  });
}

// Bullet points

let checkSvgs = document.getElementsByClassName('check-svg');
console.log(checkSvgs);

let bulletPoints = document.getElementsByClassName('bullet-point');
console.log(bulletPoints);


function swapSvg(svg){
    svg.style.backgroundColor = '#eebbc3';
    svg.style.transform = 'scale(110%)';
  
}

function swapBackSvg(svg){
    svg.style.backgroundColor = '';
    svg.style.transform = 'scale(100%)';
  
}

for (let i = 0; i < bulletPoints.length; i++){
  bulletPoints[i].addEventListener('mouseover', function(){
    swapSvg(checkSvgs[i]);
  });
}

for (let i = 0; i < bulletPoints.length; i++){
  bulletPoints[i].addEventListener('mouseout', function(){
    swapBackSvg(checkSvgs[i]);
  });
}

