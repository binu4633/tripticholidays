import { gsap } from "gsap";
import{ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const menu = document.querySelector('.menu-tab__menu-container');
const menudisplay = document.querySelector('.menu-display')
const menubar1 = document.querySelector('.menu-bar1');
const menubar3 = document.querySelector('.menu-bar3');
let menustats = 0;
menu.addEventListener('click',()=>{

   if(menustats === 0){
   menudisplay.style.clipPath='polygon(0 0, 100% 0, 100% 100%, 0 100%)';
   menubar1.style.transform='translateX(-20px)'
   menubar3.style.transform='translateX(20px)'
   menustats = 1;
   }else{
    menudisplay.style.clipPath='polygon(50% 0, 50% 0, 50% 100%, 50% 100%)';
    menubar1.style.transform='translateX(0px)'
    menubar3.style.transform='translateX(0px)'
    menustats = 0;
   }

    console.log('menu clicked');
})



const showAnim = gsap.from('.menu-tab', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  // ScrollTrigger.create({
  //   start: "top top",
  //   end: 99999,
  //   onUpdate: (self) => {
  //     self.direction === -1 ? showAnim.play() : showAnim.reverse()
  //   }
  // });

// gsap.to('.menu-display',{
//     clipPath:' polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//     duration: 1
// })
console.log('heighty is');