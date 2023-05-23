var toggleIcon = document.querySelector(".toogle")
var menu = document.querySelector(".header ul")

function toggle(){
    menu.classList.toggle('show')
}





var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
    //   dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    // dots[index].classList.add("active");

  

}


var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dotm");
var index = 0;


function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
    
  if(index>slides.length-1)
    index=0;
  
  if(index<0)
    index=slides.length-1;
  
  
  
    for(let i=0;i<slides.length;i++){
      slides[i].style.display = "none";
      
    //   dots[i].classList.remove("active");
      
      
    }
    
    slides[index].style.display = "block";
    // dots[index].classList.add("active");

  

}



//.......................


var slidesm = document.querySelectorAll(".slidem");
var dots = document.querySelectorAll(".dot-m");
var index = 0;


function prevSlidem(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlidem();
}

function nextSlidem(n){
  index+=n;
  changeSlidem();
}

changeSlidem();


function changeSlidem(){
    
  if(index>slidesm.length-1)
    index=0;
  
  if(index<0)
    index=slidesm.length-1;
  
  
  
    for(let i=0;i<slidesm.length;i++){
      slidesm[i].style.display = "none";
      
    //   dots[i].classList.remove("active");
      
      
    }
    
    slidesm[index].style.display = "block";
    // dots[index].classList.add("active");

  

}
