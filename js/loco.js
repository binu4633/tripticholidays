import LocomotiveScroll from 'locomotive-scroll';

const locoScroll = new LocomotiveScroll({
    // el: document.querySelector("[data-scroll-container]"),
    el: document.querySelector(".loco-about-container"),
    smooth: true,
  
    multiplier: 1,
    lerp: 0.05,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
    // gestureDirection: "both",
  });


console.log('from locom');