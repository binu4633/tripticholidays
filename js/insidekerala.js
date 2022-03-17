import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// gsap.to('.scroll-circle>img',{
//   rotation:'180deg',
//   transformOrigin:"center",
//   duration:2
// })

ScrollTrigger.matchMedia({
  "(max-width: 900px)": function(){
    const stage1 ={
      yPercent:120,
      xPercent:60,
      scale:.7,
      rotation:'10deg'
    }
    const stage2={
      yPercent:140,
      xPercent:170,
      scale:1.2,
      rotation:'5deg'
    }
    const stage3 = {
      yPercent:220,
      xPercent:300,
      scale:.7,
      rotation:'10deg',
     
    }
    
    gsap.set('#imgbox1',{
      yPercent:140,
      xPercent:170,
      rotation:'5deg',
      scale:1.2,
    })
    gsap.set('#imgbox2',{
      yPercent:120,
      xPercent:60,
      rotation:'10deg',
      scale:.7,
    })
    
    
    
    const tdk1a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
       
        start: "top top", 
        end: "bottom top",
     
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    
    const tdk1b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
      
        start: "top top", 
        end: "bottom top",
       
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    const tdk1c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
       
        start: "top top", 
        end: "bottom top",
    
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
      
    })
    const tdk1d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
        
        start: "top top", 
        end: "bottom top",
     
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk1e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
     
        start: "top top", 
        end: "bottom top",
    
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
     
        start: "top top", 
        end: "bottom top",
   
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
      
        start: "top top", 
        end: "bottom top",
    
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
       
        start: "top top", 
        end: "bottom top",
   
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    
    const tdk3a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
       
        start: "top top", 
        end: "bottom top",
    
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
       
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
      
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
       
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
     
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const tdk4a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
        
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const tdk5a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
       
        start: "top top", 
        end: "bottom top",
       
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
      
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
     
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
       
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
       
        start: "top top", 
        end: "bottom top",
    
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
       
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
      
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    
    
    
    tdk1a.to('#imgbox1',{
    ...stage3,
    })
    tdk1b.to('#imgbox2',{
      ...stage2,
    })
    tdk1c.to('#imgbox3',{
      ...stage1,
    })
    tdk1d.to('.text-container__main-box',{
      xPercent:-100,
      })
    
      tdk1e.to('.scroll-circle>img',{
        rotation:'180deg',
        transformOrigin:"center",
        duration:2
      })
    
    tdk2a.to('#imgbox2',{
    ...stage3,
    })
    tdk2b.to('#imgbox3',{
      ...stage2,
    })
    tdk2c.to('#imgbox4',{
      ...stage1, 
    })
    tdk2d.to('.text-container__main-box',{
      xPercent:-200, 
      })
     
    tdk2e.to('.scroll-circle>img',{
          rotation:'360deg',
          transformOrigin:"center",
          duration:2
        })
    
    tdk3a.to('#imgbox3',{
    ...stage3, 
    })
    tdk3b.to('#imgbox4',{
      ...stage2,  
    })
    tdk3c.to('#imgbox5',{
      ...stage1,  
    })
    tdk3d.to('.text-container__main-box',{
      xPercent:-300,  
      })
    tdk3e.to('.scroll-circle>img',{
        rotation:'540deg',
        transformOrigin:"center",
        duration:2
      })
    
    tdk4a.to('#imgbox4',{
    ...stage3, 
    })
    tdk4b.to('#imgbox5',{
      ...stage2,  
    })
    tdk4c.to('#imgbox6',{
      ...stage1,  
    })
    tdk4d.to('.text-container__main-box',{
      xPercent:-400,  
      })
    tdk4e.to('.scroll-circle>img',{
        rotation:'720deg',
        transformOrigin:"center",
        duration:2
      })
    tdk5a.to('#imgbox5',{
    ...stage3,  
    })
    tdk5b.to('#imgbox6',{
      ...stage2,  
    })
    tdk5c.to('#imgbox7',{
      ...stage1,  
    })
    tdk5d.to('.text-container__main-box',{
      xPercent:-500, 
      })
      tdk5e.to('.scroll-circle>img',{
        rotation:'900deg',
        transformOrigin:"center",
        duration:2
      })
    tdk6a.to('#imgbox6',{
    ...stage3,  
    })
    tdk6b.to('#imgbox7',{
      ...stage2, 
    })
    tdk6c.to('.text-container__main-box',{
      xPercent:-600,  
      })
      tdk6d.to('.scroll-circle>img',{
        rotation:'1080deg',
        opacity:0,
        transformOrigin:"center",
        duration:2
      })

  },
  "(min-width: 900px)": function(){
    
    const stage1 ={
      yPercent:20,
      xPercent:50,
      scale:.8,
      rotation:'10deg'
    }
    const stage2={
      yPercent:140,
      xPercent:150,
      scale:1.2,
      rotation:'10deg'
    }
    const stage3 = {
      yPercent:180,
      xPercent:300,
      scale:.8,
      rotation:'30deg',
     
    }
    
    gsap.set('#imgbox1',{
      yPercent:140,
      xPercent:150,
      rotation:'10deg'
    })
    gsap.set('#imgbox2',{
      yPercent:20,
      xPercent:50,
      rotation:'10deg'
    })
    
    
    
    const tdk1a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
       
        start: "top top", 
        end: "bottom top",
    
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    
    const tdk1b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
      
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    const tdk1c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
       
        start: "top top", 
        end: "bottom top",
       
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
      
    })
    const tdk1d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
        
        start: "top top", 
        end: "bottom top",
      
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk1e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b2",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
     
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
     
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
      
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
      
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const tdk2e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b3",
       
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    
    const tdk3a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
       
        start: "top top", 
        end: "bottom top",
    
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
       
        start: "top top", 
        end: "bottom top",
    
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
      
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
       
        start: "top top", 
        end: "bottom top",
   
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk3e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b4",
     
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const tdk4a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
    
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
   
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
       
        start: "top top", 
        end: "bottom top",
    
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk4e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b5",
        
        start: "top top", 
        end: "bottom top",
  
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const tdk5a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
       
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
     
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk5e = gsap.timeline({
      scrollTrigger:{
        trigger: ".b6",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6a = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6b = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
       
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6c = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
       
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const tdk6d = gsap.timeline({
      scrollTrigger:{
        trigger: ".b7",
      
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    
    
    
    tdk1a.to('#imgbox1',{
    ...stage3,
    })
    tdk1b.to('#imgbox2',{
      ...stage2,
    })
    tdk1c.to('#imgbox3',{
      ...stage1,
    })
    tdk1d.to('.text-container__main-box',{
      xPercent:-100,
      })
    
      tdk1e.to('.scroll-circle>img',{
        rotation:'180deg',
        transformOrigin:"center",
        duration:2
      })
    
    tdk2a.to('#imgbox2',{
    ...stage3,
    })
    tdk2b.to('#imgbox3',{
      ...stage2,
    })
    tdk2c.to('#imgbox4',{
      ...stage1, 
    })
    tdk2d.to('.text-container__main-box',{
      xPercent:-200, 
      })
     
    tdk2e.to('.scroll-circle>img',{
          rotation:'360deg',
          transformOrigin:"center",
          duration:2
        })
    
    tdk3a.to('#imgbox3',{
    ...stage3, 
    })
    tdk3b.to('#imgbox4',{
      ...stage2,  
    })
    tdk3c.to('#imgbox5',{
      ...stage1,  
    })
    tdk3d.to('.text-container__main-box',{
      xPercent:-300,  
      })
    tdk3e.to('.scroll-circle>img',{
        rotation:'540deg',
        transformOrigin:"center",
        duration:2
      })
    
    tdk4a.to('#imgbox4',{
    ...stage3, 
    })
    tdk4b.to('#imgbox5',{
      ...stage2,  
    })
    tdk4c.to('#imgbox6',{
      ...stage1,  
    })
    tdk4d.to('.text-container__main-box',{
      xPercent:-400,  
      })
    tdk4e.to('.scroll-circle>img',{
        rotation:'720deg',
        transformOrigin:"center",
        duration:2
      })
    tdk5a.to('#imgbox5',{
    ...stage3,  
    })
    tdk5b.to('#imgbox6',{
      ...stage2,  
    })
    tdk5c.to('#imgbox7',{
      ...stage1,  
    })
    tdk5d.to('.text-container__main-box',{
      xPercent:-500, 
      })
      tdk5e.to('.scroll-circle>img',{
        rotation:'900deg',
        transformOrigin:"center",
        duration:2
      })
    tdk6a.to('#imgbox6',{
    ...stage3,  
    })
    tdk6b.to('#imgbox7',{
      ...stage2, 
    })
    tdk6c.to('.text-container__main-box',{
      xPercent:-600,  
      })
      tdk6d.to('.scroll-circle>img',{
        rotation:'1080deg',
        opacity:0,
        transformOrigin:"center",
        duration:2
      })
  }
})








// gsap.to('.text-container__main-box',{
// xPercent:-00
// })

// gsap.to('#imgbox3',{
//   yPercent:20,
//   xPercent:50,
//   rotation:'10deg'
// })
// gsap.to('#imgbox2',{
//   yPercent:140,
//   xPercent:150,
//   rotation:'10deg'
// })
// gsap.to('#imgbox1',{
//   yPercent:180,
//   xPercent:300,
//   rotation:'30deg'
// })
ScrollTrigger.create({
  snap: 1 /6// snap whole page to the closest section!
  // snap:'.b'
});
console.log('from cl');


// const tdk1 = gsap.timeline()
// const tdk2 = gsap.timeline()
// const tdk3 = gsap.timeline()
// const tdk4 = gsap.timeline()
// const tdk5 = gsap.timeline()
// const tdk6 = gsap.timeline()
// const tdk7 = gsap.timeline()


// ScrollTrigger.create({
//     trigger: ".b2",
//     animation:tdk1,
//     start: "top top", 
//     end: "bottom top",
//     markers:true,
//     id:'pin1',
//     // pin: ".s2-b1",
//     toggleActions:'restart none reverse none',
//     scrub:true
//   });
// ScrollTrigger.create({
//     trigger: ".b3",
//     animation:tdk2,
//     start: "top top", 
//     end: "bottom top",
//     markers:true,
//     id:'pin1',
//     // pin: ".s2-b1",
//     toggleActions:'restart none reverse none',
//     scrub:true
//   });
// ScrollTrigger.create({
//     trigger: ".b4",
//     animation:tdk3,
//     start: "top top", 
//     end: "bottom top",
//     markers:true,
//     id:'pin1',
//     // pin: ".s2-b1",
//     toggleActions:'restart none reverse none',
//     scrub:true
//   });
// ScrollTrigger.create({
//     trigger: ".b5",
//     animation:tdk4,
//     start: "top top", 
//     end: "bottom top",
//     markers:true,
//     id:'pin1',
//     // pin: ".s2-b1",
//     toggleActions:'restart none reverse none',
//     scrub:true
//   });

// ScrollTrigger.create({
//     trigger: ".b6",
//     animation:tdk5,
//     start: "top top", 
//     end: "bottom top",
//     markers:true,
//     id:'pin1',
//     // pin: ".s2-b1",
//     toggleActions:'restart none reverse none',
//     scrub:true
//   });

// ScrollTrigger.create({
//     trigger: ".b7",
//     animation:tdk6,
//     start: "top top", 
//     end: "bottom top",
//     markers:true,
//     id:'pin1',
//     // pin: ".s2-b1",
//     toggleActions:'restart none reverse none',
//     scrub:true
//   });