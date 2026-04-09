document.getElementById('menu-toggle')
.addEventListener('click', function(){
  document.body.classList.toggle('nav-open');
});

// Hero text

window.onload = function() {
  heroSwipe1();
  ctaAppear();
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



// Section headings


// Slide animations

function slideUp(element, amount) {
  element.style.bottom = amount;
}

function slideDown(element, amount) {
  element.style.bottom = amount;
}

// Areas

let areaBoxes = document.getElementsByClassName("area");
console.log(areaBoxes);

let areaOverlays = document.getElementsByClassName("area-overlay");
console.log(areaOverlays);

for (let i = 0; i < areaBoxes.length; i++){
  areaBoxes[i].addEventListener('mouseover', function(){
    slideUp(areaOverlays[i], '0px');
  });
}

for (let i = 0; i < areaBoxes.length; i++){
  areaBoxes[i].addEventListener('mouseout', function(){
    slideDown(areaOverlays[i], '-70px');
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


// Testimonials

// let testBoxes = document.getElementsByClassName("testimonial-box");
// console.log(testBoxes);

// let idBoxes = document.getElementsByClassName("testimonial-id-box");
// console.log(idBoxes);

// for (let i = 0; i < testBoxes.length; i++){
//   testBoxes[i].addEventListener('mouseover', function(){
//     slideUp(idBoxes[i], '80px');
//   });
// }

// for (let i = 0; i < testBoxes.length; i++){
//   testBoxes[i].addEventListener('mouseout', function(){
//     slideDown(idBoxes[i], '-70px');
//   });
// }