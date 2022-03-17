import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  "(max-width: 900px)": function(){
    const ukstage1 ={
      yPercent:120,
      xPercent:60,
      scale:.7,
      rotation:'10deg'
    }
    const ukstage2={
      yPercent:140,
      xPercent:170,
      scale:1.2,
      rotation:'5deg'
    }
    const ukstage3 = {
      yPercent:220,
      xPercent:300,
      scale:.7,
      rotation:'10deg',
     
    }
    
    gsap.set('#uk-imgbox1',{
      yPercent:140,
      xPercent:170,
      rotation:'5deg',
      scale:1.2,
    })
    gsap.set('#uk-imgbox2',{
      yPercent:120,
      xPercent:60,
      rotation:'10deg',
      scale:.7,
    })
    
    
    
    const uktdk1a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
        // animation:tdk1,
        start: "top top", 
        end: "bottom top",
       
        
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    
    const uktdk1b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
       
        start: "top top", 
        end: "bottom top",
       
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    const uktdk1c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
       
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
      
    })
    const uktdk1d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
     
        start: "top top", 
        end: "bottom top",
      
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk1e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
       
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
       
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
       
        start: "top top", 
        end: "bottom top",
    
        id:'pin1',
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
      
        start: "top top", 
        end: "bottom top",
   
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
      
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    
    const uktdk3a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
      
        start: "top top", 
        end: "bottom top",
     
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
      
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
       
        start: "top top", 
        end: "bottom top",
      
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
    
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const uktdk4a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
      
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
       
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
      
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const uktdk5a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
     
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
       
        start: "top top", 
        end: "bottom top",
     
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
      
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
    
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
      
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
      
        start: "top top", 
        end: "bottom top",
       
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
       
        start: "top top", 
        end: "bottom top",
       
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
      
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
    
        start: "top top", 
        end: "bottom top",
       
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
      
        start: "top top", 
        end: "bottom top",
       
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
       
        start: "top top", 
        end: "bottom top",
       
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
      
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
    
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
      
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk9a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
       
        start: "top top", 
        end: "bottom top",
        
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk9b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
      
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const uktdk9d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk9e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
      
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    
    
    
    uktdk1a.to('#uk-imgbox1',{
    ...ukstage3,
    })
    uktdk1b.to('#uk-imgbox2',{
      ...ukstage2,
    })
    uktdk1c.to('#uk-imgbox3',{
      ...ukstage1,
    })
    uktdk1d.to('.uk-text-container__main-box',{
      xPercent:-100,
      })
    
      uktdk1e.to('.uk-scroll-circle>img',{
        rotation:'180deg',
        transformOrigin:"center",
        duration:2
      })
    
    uktdk2a.to('#uk-imgbox2',{
    ...ukstage3,
    })
    uktdk2b.to('#uk-imgbox3',{
      ...ukstage2,
    })
    uktdk2c.to('#uk-imgbox4',{
      ...ukstage1, 
    })
    uktdk2d.to('.uk-text-container__main-box',{
      xPercent:-200, 
      })
     
    uktdk2e.to('.uk-scroll-circle>img',{
          rotation:'360deg',
          transformOrigin:"center",
          duration:2
        })
    
    uktdk3a.to('#uk-imgbox3',{
    ...ukstage3, 
    })
    uktdk3b.to('#uk-imgbox4',{
      ...ukstage2,  
    })
    uktdk3c.to('#uk-imgbox5',{
      ...ukstage1,  
    })
    uktdk3d.to('.uk-text-container__main-box',{
      xPercent:-300,  
      })
    uktdk3e.to('.uk-scroll-circle>img',{
        rotation:'540deg',
        transformOrigin:"center",
        duration:2
      })
    
    uktdk4a.to('#uk-imgbox4',{
    ...ukstage3, 
    })
    uktdk4b.to('#uk-imgbox5',{
      ...ukstage2,  
    })
    uktdk4c.to('#uk-imgbox6',{
      ...ukstage1,  
    })
    uktdk4d.to('.uk-text-container__main-box',{
      xPercent:-400,  
      })
    uktdk4e.to('.uk-scroll-circle>img',{
        rotation:'720deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk5a.to('#uk-imgbox5',{
    ...ukstage3,  
    })
    uktdk5b.to('#uk-imgbox6',{
      ...ukstage2,  
    })
    uktdk5c.to('#uk-imgbox7',{
      ...ukstage1,  
    })
    uktdk5d.to('.uk-text-container__main-box',{
      xPercent:-500, 
      })
      uktdk5e.to('.uk-scroll-circle>img',{
        rotation:'900deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk6a.to('#uk-imgbox6',{
    ...ukstage3,  
    })
    uktdk6b.to('#uk-imgbox7',{
      ...ukstage2, 
    })
    uktdk6c.to('#uk-imgbox8',{
      ...ukstage1, 
    })
    uktdk6d.to('.uk-text-container__main-box',{
      xPercent:-600,  
      })
    uktdk6e.to('.uk-scroll-circle>img',{
        rotation:'1080deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk7a.to('#uk-imgbox7',{
    ...ukstage3,  
    })
    uktdk7b.to('#uk-imgbox8',{
      ...ukstage2, 
    })
    uktdk7c.to('#uk-imgbox9',{
      ...ukstage1, 
    })
    uktdk7d.to('.uk-text-container__main-box',{
      xPercent:-700,  
      })
    uktdk7e.to('.uk-scroll-circle>img',{
        rotation:'1260deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk8a.to('#uk-imgbox8',{
    ...ukstage3,  
    })
    uktdk8b.to('#uk-imgbox9',{
      ...ukstage2, 
    })
    uktdk8c.to('#uk-imgbox10',{
      ...ukstage1, 
    })
    uktdk8d.to('.uk-text-container__main-box',{
      xPercent:-800,  
      })
    uktdk8e.to('.uk-scroll-circle>img',{
        rotation:'1440deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk9a.to('#uk-imgbox9',{
    ...ukstage3,  
    })
    uktdk9b.to('#uk-imgbox10',{
      ...ukstage2, 
    })
    
    uktdk9d.to('.uk-text-container__main-box',{
      xPercent:-900,  
      })
    uktdk9e.to('.uk-scroll-circle>img',{
        rotation:'1620deg',
        opacity:0,
        transformOrigin:"center",
        duration:2
      })
    
  },
  "(min-width: 900px)": function(){
    const ukstage1 ={
      yPercent:20,
      xPercent:50,
      scale:.8,
      rotation:'10deg'
    }
    const ukstage2={
      yPercent:140,
      xPercent:150,
      scale:1.2,
      rotation:'10deg'
    }
    const ukstage3 = {
      yPercent:180,
      xPercent:300,
      scale:.8,
      rotation:'30deg',
     
    }
    
    gsap.set('#uk-imgbox1',{
      yPercent:140,
      xPercent:150,
      rotation:'10deg'
    })
    gsap.set('#uk-imgbox2',{
      yPercent:20,
      xPercent:50,
      rotation:'10deg'
    })
    
    
    
    const uktdk1a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
        // animation:tdk1,
        start: "top top", 
        end: "bottom top",
       
        
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    
    const uktdk1b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
        // animation:tdk1,
        start: "top top", 
        end: "bottom top",
       
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
     
    })
    const uktdk1c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
        // animation:tdk1,
        start: "top top", 
        end: "bottom top",
    
        // pin: ".s2-b1",
        toggleActions:'restart none reverse none',
        scrub:true
      },
      // defaults:{duration:1, ease:'none'}
    })
    const uktdk1d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
        // animation:tdk1,
        start: "top top", 
        end: "bottom top",
   
        
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk1e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c2",
       
        start: "top top", 
        end: "bottom top",
   
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
       
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
       
        start: "top top", 
        end: "bottom top",
     
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
      
        start: "top top", 
        end: "bottom top",
     
       
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
       
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    const uktdk2e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c3",
      
        start: "top top", 
        end: "bottom top",
    
      
        toggleActions:'restart none reverse none',
        scrub:true
      },
    
    })
    
    const uktdk3a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
      
        start: "top top", 
        end: "bottom top",
     
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
      
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
       
        start: "top top", 
        end: "bottom top",
      
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk3e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c4",
    
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const uktdk4a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
      
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
       
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
      
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk4e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c5",
    
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const uktdk5a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
     
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk5e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c6",
       
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
       
        start: "top top", 
        end: "bottom top",
     
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
      
        start: "top top", 
        end: "bottom top",
      
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
    
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
      
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk6e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c7",
      
        start: "top top", 
        end: "bottom top",
       
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
       
        start: "top top", 
        end: "bottom top",
       
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
      
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
    
        start: "top top", 
        end: "bottom top",
       
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
      
        start: "top top", 
        end: "bottom top",
       
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk7e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c8",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
       
        start: "top top", 
        end: "bottom top",
       
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
      
        start: "top top", 
        end: "bottom top",
       
       
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8c = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
    
        start: "top top", 
        end: "bottom top",
      
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk8e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c9",
      
        start: "top top", 
        end: "bottom top",
    
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk9a = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
       
        start: "top top", 
        end: "bottom top",
        
    
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk9b = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
      
        start: "top top", 
        end: "bottom top",
      
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    const uktdk9d = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
      
        start: "top top", 
        end: "bottom top",
      
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    const uktdk9e = gsap.timeline({
      scrollTrigger:{
        trigger: ".c10",
      
        start: "top top", 
        end: "bottom top",
     
     
        toggleActions:'restart none reverse none',
        scrub:true
      }
    })
    
    
    
    
    uktdk1a.to('#uk-imgbox1',{
    ...ukstage3,
    })
    uktdk1b.to('#uk-imgbox2',{
      ...ukstage2,
    })
    uktdk1c.to('#uk-imgbox3',{
      ...ukstage1,
    })
    uktdk1d.to('.uk-text-container__main-box',{
      xPercent:-100,
      })
    
      uktdk1e.to('.uk-scroll-circle>img',{
        rotation:'180deg',
        transformOrigin:"center",
        duration:2
      })
    
    uktdk2a.to('#uk-imgbox2',{
    ...ukstage3,
    })
    uktdk2b.to('#uk-imgbox3',{
      ...ukstage2,
    })
    uktdk2c.to('#uk-imgbox4',{
      ...ukstage1, 
    })
    uktdk2d.to('.uk-text-container__main-box',{
      xPercent:-200, 
      })
     
    uktdk2e.to('.uk-scroll-circle>img',{
          rotation:'360deg',
          transformOrigin:"center",
          duration:2
        })
    
    uktdk3a.to('#uk-imgbox3',{
    ...ukstage3, 
    })
    uktdk3b.to('#uk-imgbox4',{
      ...ukstage2,  
    })
    uktdk3c.to('#uk-imgbox5',{
      ...ukstage1,  
    })
    uktdk3d.to('.uk-text-container__main-box',{
      xPercent:-300,  
      })
    uktdk3e.to('.uk-scroll-circle>img',{
        rotation:'540deg',
        transformOrigin:"center",
        duration:2
      })
    
    uktdk4a.to('#uk-imgbox4',{
    ...ukstage3, 
    })
    uktdk4b.to('#uk-imgbox5',{
      ...ukstage2,  
    })
    uktdk4c.to('#uk-imgbox6',{
      ...ukstage1,  
    })
    uktdk4d.to('.uk-text-container__main-box',{
      xPercent:-400,  
      })
    uktdk4e.to('.uk-scroll-circle>img',{
        rotation:'720deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk5a.to('#uk-imgbox5',{
    ...ukstage3,  
    })
    uktdk5b.to('#uk-imgbox6',{
      ...ukstage2,  
    })
    uktdk5c.to('#uk-imgbox7',{
      ...ukstage1,  
    })
    uktdk5d.to('.uk-text-container__main-box',{
      xPercent:-500, 
      })
      uktdk5e.to('.uk-scroll-circle>img',{
        rotation:'900deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk6a.to('#uk-imgbox6',{
    ...ukstage3,  
    })
    uktdk6b.to('#uk-imgbox7',{
      ...ukstage2, 
    })
    uktdk6c.to('#uk-imgbox8',{
      ...ukstage1, 
    })
    uktdk6d.to('.uk-text-container__main-box',{
      xPercent:-600,  
      })
    uktdk6e.to('.uk-scroll-circle>img',{
        rotation:'1080deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk7a.to('#uk-imgbox7',{
    ...ukstage3,  
    })
    uktdk7b.to('#uk-imgbox8',{
      ...ukstage2, 
    })
    uktdk7c.to('#uk-imgbox9',{
      ...ukstage1, 
    })
    uktdk7d.to('.uk-text-container__main-box',{
      xPercent:-700,  
      })
    uktdk7e.to('.uk-scroll-circle>img',{
        rotation:'1260deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk8a.to('#uk-imgbox8',{
    ...ukstage3,  
    })
    uktdk8b.to('#uk-imgbox9',{
      ...ukstage2, 
    })
    uktdk8c.to('#uk-imgbox10',{
      ...ukstage1, 
    })
    uktdk8d.to('.uk-text-container__main-box',{
      xPercent:-800,  
      })
    uktdk8e.to('.uk-scroll-circle>img',{
        rotation:'1440deg',
        transformOrigin:"center",
        duration:2
      })
    uktdk9a.to('#uk-imgbox9',{
    ...ukstage3,  
    })
    uktdk9b.to('#uk-imgbox10',{
      ...ukstage2, 
    })
    
    uktdk9d.to('.uk-text-container__main-box',{
      xPercent:-900,  
      })
    uktdk9e.to('.uk-scroll-circle>img',{
        rotation:'1620deg',
        opacity:0,
        transformOrigin:"center",
        duration:2
      })
    
  },
})




  
  // uktdk9c.to('#uk-imgbox10',{
//   ...ukstage1, 
// })








ScrollTrigger.create({
  snap: 1 /9// snap whole page to the closest section!
  // snap:'.b'
});
console.log('from cl');









