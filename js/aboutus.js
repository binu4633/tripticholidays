import imageLoaded from "imagesloaded";
import gsap from "gsap";

let loaderbox= document.querySelector('.loader-bg-cover')
imageLoaded(document.querySelectorAll(".img"),{ background: true },function(){
    console.log("all images loaded");
    document.querySelector('.loader').classList.remove("anim")
    gsap.timeline().to('.loader',{
      opacity:0
    }).to(loaderbox,{
        height:0,
        duration:.5
    }).to(loaderbox,{
        display:'none',
       }).from('.img-card-about',{
        y:'-20px',
        opacity:0,
        stagger:0.2,
        duration:0.5
    }).from('.about-hero',{
        y:'-20px',
        opacity:0,
       
        duration:0.5
    })
 
})


// const abouttl=  gsap.timeline()

// abouttl.from('.img-card-about',{
//     y:'-20px',
//     opacity:0,
//     stagger:0.2,
//     duration:0.5
// }).from('.about-hero',{
//     y:'-20px',
//     opacity:0,
   
//     duration:0.5
// })

console.log('here its about as js');
