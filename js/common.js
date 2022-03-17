window.addEventListener('resize', () => { 
    document.querySelector(':root').style
      .setProperty('--vw', window.innerWidth/100 + 'px');
    document.querySelector(':root').style
      .setProperty('--vh', window.innerHeight/100 + 'px');
  })
window.addEventListener('load', () => { 
    document.querySelector(':root').style
      .setProperty('--vw', window.innerWidth/100 + 'px');
    document.querySelector(':root').style
      .setProperty('--vh', window.innerHeight/100 + 'px');
  })