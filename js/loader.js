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
       })
 
})

console.log('git testing');