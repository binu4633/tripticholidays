import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import{ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    // el: document.querySelector("[data-scroll-container]"),
    el: document.querySelector(".locomotive"),
    smooth: true,
  
    multiplier: 1,
    lerp: 0.03,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    // gestureDirection: "both",
  });

console.log('loco lerp',locoScroll.lerp);
// .05 lerp

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".locomotive", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".locomotive").style.transform
      ? "transform"
      : "fixed",
  });




// const t1 = gsap.timeline({ immediateRender: false});
ScrollTrigger.matchMedia({
  "(max-width: 800px)": function(){
    const t1 = gsap.timeline({ 
    
      scrollTrigger:{
          trigger:'.disc-exp',
          scroller: ".locomotive",
          start:'top 20%',
    
          // end:()=>'+='+ window.innerHeight*2,
          end:()=>'+=200%',
          // end:'+=300',
          scrub:true,
          // pin:'.disc-exp',
          pin:true,
          // pinSpacing:true,
          // anticipatePin:1,
          // pinReparent: true,
          pinType:"transform" ,
      }
  });
  t1.to('.gridimg',{
      x:0,y:0
  });

  },
  "(min-width: 799px)": function(){
    const t1 = gsap.timeline({ 
    
      scrollTrigger:{
          trigger:'.disc-exp',
          scroller: ".locomotive",
          start:'top top',
   
          // end:()=>'+='+ window.innerHeight*2,
          end:()=>'+=200%',
          // end:'+=300',
          scrub:true,
          // pin:'.disc-exp',
          pin:true,
          // pinSpacing:true,
          // anticipatePin:1,
          // pinReparent: true,
          pinType:"transform" ,
      }
  });
  t1.to('.gridimg',{
      x:0,y:0
  });
  },
})



// const t12 = gsap.timeline()

// ScrollTrigger.create({
//     animation:t12,
//     trigger:'.disc-exp',
//     start:'top top',
//     end:()=>'+='+ window.innerHeight*2,
//     // end:'+=300',
//     scrub:true,
//     markers:true,
//     // pin:true,
//     // pinSpacing:false, 
//     // anticipatePin:1
// })



// t12.to('.destination-link',{
//     clipPath: 'circle(70.7% at 50% 50%)'
// })



ScrollTrigger.matchMedia({
    "(max-width: 800px)": function(){
        const t2 = gsap.timeline({ 
            // immediateRender: false,
            scrollTrigger:{
                trigger:'.travel-in-style',
                scroller: ".locomotive",
                start:'top top',
                end:()=>'+='+ window.innerWidth*6,
                // end:'+=300',
                scrub:1,
                // pin:'.disc-exp',
                pin:true,
                pinSpacing:true,
                // anticipatePin:1,
                // pinReparent: true,
                // pinType:"fixed" ,
            }
        });
        
        t2.to('.box',{
        xPercent:-110*4
        })
    },
    "(min-width: 800px)": function(){
        const t2 = gsap.timeline({ 
            // immediateRender: false,
            scrollTrigger:{
                trigger:'.travel-in-style',
                scroller: ".locomotive",
                start:'top top',
                end:()=>'+='+ window.innerHeight*6,
                // end:'+=300',
                scrub:1,
                // pin:'.disc-exp',
                pin:true,
                pinSpacing:true,
                // anticipatePin:1,
                // pinReparent: true,
                // pinType:"fixed" ,
            }
        });
        
        t2.to('.box',{
        xPercent:-100*4
        })
    }
})

// const hmenu = document.querySelector('.menu-tab__menu-container');
// const hmenudisplay = document.querySelector('.menu-display')
// const hmenubar1 = document.querySelector('.menu-bar1');
// const hmenubar3 = document.querySelector('.menu-bar3');
// let hmenustats = 0;
// menu.addEventListener('click',()=>{

//    if(menustats === 0){
//    hmenudisplay.style.clipPath='polygon(0 0, 100% 0, 100% 100%, 0 100%)';
//    hmenubar1.style.transform='translateX(-20px)'
//    hmenubar3.style.transform='translateX(20px)'
//    hmenustats = 1;
//    }else{
//     hmenudisplay.style.clipPath='polygon(50% 0, 50% 0, 50% 100%, 50% 100%)';
//     hmenubar1.style.transform='translateX(0px)'
//     hmenubar3.style.transform='translateX(0px)'
//     hmenustats = 0;
//    }

//     console.log('menu clicked');
// })



// const showAnim = gsap.from('.menu-tab', { 
//     yPercent: -100,
//     paused: true,
//     duration: 0.2
//   }).progress(1);
  
//   ScrollTrigger.create({
//     scroller: ".locomotive",
//     start: "top top",
//     end: 99999,
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse()
//     }
//   });

// const t2 = gsap.timeline({ 
//     // immediateRender: false,
//     scrollTrigger:{
//         trigger:'.travel-in-style',
//         start:'top top',
//         end:()=>'+='+ window.innerHeight*6,
//         // end:'+=300',
//         scrub:1,
//         // pin:'.disc-exp',
//         pin:true,
//         pinSpacing:true,
//         anticipatePin:1,
//         // pinReparent: true,
//         // pinType:"fixed" ,
//     }
// });

// t2.to('.box',{
// xPercent:-100*4
// })



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



// console.log(ScrollTrigger.getAll( ));
console.log('from gsap');