function navSlide(){
    const burgerMenu = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuList = document.querySelectorAll('.nav-menu li'); 
    burgerMenu.addEventListener('click',() =>{
        navMenu.classList.toggle('current-nav-active');
        for(let i = 0; i<navMenuList.length; i++){           
            if(navMenuList[i].style.animation){
                navMenuList[i].style.animation = '';
            }else {
                navMenuList[i].style.animation = `navMenuFade 0.5s ease-in forwards ${i/10}s`;
            }
        }
        burgerMenu.classList.toggle('toggle');
    });

}

function onLoadAnimations(){
    document.querySelector('.header-icon').style.animation = `logoSlideAnimation 0.8s ease-in forwards`;
    if (document.body.clientWidth>768){
        document.querySelector('.nav-menu').style.animation = `navListSlideAnimation 0.8s ease-in forwards`;
    }else{
        document.querySelector('.burger').style.animation = `burgerMenuSlide 0.8s ease-in forwards`;
    }
    document.querySelector('.opening').style.animation = `welcometextMoveDown 0.8s ease-in forwards`;
    document.querySelector('.btn-primary').style.animation = `buttonGoUpBrrr 0.8s ease-in forwards`;   
}

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

elementsToShow = [document.querySelector('#about'),
                document.querySelector('#service'),
                document.querySelector('#contact')];

function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      }
    });
  
    scroll(loop);
}

function whileLoadComplete(){
    navSlide();
    onLoadAnimations();
    loop();
}

document.onload = whileLoadComplete();
