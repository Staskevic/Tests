

gsap.registerPlugin(ScrollTrigger);


smoothScroll("#content");

// gsap.to(".h11", {
//     scrollTrigger: {
//         trigger: ".h11",
//         start:"top 44%", 
//         end: "top 15%",
//         scrub: 1, 
//         markers: true,
//         // toggleActions: "restart reverse restart reverse" 
//         // play pause resume reverse restart reset complete none  

//     },
//     y: 300,
//     opacity:0,
//     // rotation: 360,
//     // duration: 3
//   }); 

// gsap.to(".ci", {
//     scrollTrigger: {
//         trigger: ".ci",
//         start:"top 0%", 
//         end: "top -250%",
//         // scrub: 1, 
//         pin: true,
//         pinSpacing: false,
//         markers: true
//         // toggleActions: "restart reverse restart reverse" 
//         // play pause resume reverse restart reset complete none  

//     },
//     // x: 500,
//     // rotation: 360,
//     // duration: 6
//   }); 



// gsap.to(".dict1", {
//   scrollTrigger: {
//       trigger: ".dict1",
//       start:"top 10%", 
//       end: "top -0%",
//       scrub: true, 
//       pin: true,
//       pinSpacing: false,
//       markers: true,
//       toggleActions: "restart reverse restart reverse" 
//       // play pause resume reverse restart reset complete none  

//   },

//   x: 500,
//   rotation: 360,
//   duration: 6
// }); 


//_____________________________________________________________________________________________________________________________________

//_____________________________________________________________________________________________________________________________________
//-------------------------------------------------------------------------------------------------------------------------------------
//_____________________________________________________________________________________________________________________________________
//_____________________________________________________________________________________________________________________________________
//-------------------------------------------------------------------------------------------------------------------------------------
//_____________________________________________________________________________________________________________________________________

//_____________________________________________________________________________________________________________________________________



gsap.to(".svg", {
  scrollTrigger: {
      trigger: ".svg",
      start:"top 24%", 
      end: "top -30%",
      pinSpacing: false,
      pin: true,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },
  opacity:-0.2,
  scale:.3,
  // opacity:0.4,
  // rotation: 360,
  // duration: 3
}); 




gsap.to(".svg", {
    scrollTrigger: {
        trigger: ".svg",
        start:"top -10%", 
        end: "top -233%",
        pin: true,
        pinSpacing: false,
        scrub: true , 
        // markers: true,
        // toggleActions: "restart reverse restart reverse" 
        // play pause resume reverse restart reset complete none  

    },
 
    
    opacity:.85,

  
    // rotation: 360,
    // duration: 3
  }); 


  
gsap.to(" .strip1", {
  scrollTrigger: {
      trigger: ".strip1",
      start:"40% 82%", 
      end: "center -15%",
      pin: true,
      pinSpacing: false,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },

  
  opacity:1,

//  y:200,
  
  // rotation: 360,
  // duration: 3
}); 

gsap.to(" .strip , .strip2", {
  scrollTrigger: {
      trigger: ".strip1",
      start:"27% 60%", 
      end: "center -60%",
      // pin: true,
      // pinSpacing: false,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },
  ease: "none",

  
  // opacity:1,

 y:-250,
  
  // rotation: 360,
  // duration: 3
}); 
  
gsap.to(" .h1", {
  scrollTrigger: {
      trigger: ".h1",
      start:"50% 75%", 
      end: "center -52%",
      pin: true,
      pinSpacing: false,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },

  
  opacity:1,
  
  // rotation: 360,
  // duration: 3
}); 

gsap.to(" .faceb", {
  scrollTrigger: {
      trigger: ".faceb",
      start:"50% 90%", 
      end: "center 10%",
      // pin: true,
      // pinSpacing: false,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },

  
  opacity:0.6,
  // y:-150,
  x:143,
  
  // rotation: 360,
  // duration: 3
}); 

gsap.to(" .twit", {
  scrollTrigger: {
      trigger: ".twit",
      start:"50% 95%", 
      end: "center 10%",
      // pin: true,
      // pinSpacing: false,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },

  
  opacity:.6,
  // y:-50,
  x:-140,
  
  // rotation: 360,
  // duration: 3
}); 



gsap.to(" .insta", {
  scrollTrigger: {
      trigger: ".insta",
      start:"50% 95%", 
      end: "center 10%",
      // pin: true,
      // pinSpacing: false,
      scrub: true , 
      // markers: true,
      // toggleActions: "restart reverse restart reverse" 
      // play pause resume reverse restart reset complete none  

  },

  
  opacity:.6,
  // y:-50,
  y:-100,
  
  // rotation: 360,
  // duration: 3
}); 








//_____________________________________________________________________________________________________________________________________

//_____________________________________________________________________________________________________________________________________
//-------------------------------------------------------------------------------------------------------------------------------------
//_____________________________________________________________________________________________________________________________________
//_____________________________________________________________________________________________________________________________________
//-------------------------------------------------------------------------------------------------------------------------------------
//_____________________________________________________________________________________________________________________________________

//_____________________________________________________________________________________________________________________________________


//    // this is the helper function that sets it all up. Pass in the content <div> and then the wrapping viewport <div> (can be the elements or selector text). It also sets the default "scroller" to the content so you don't have to do that on all your ScrollTriggers.
function smoothScroll(content, viewport, smoothness) {
  content = gsap.utils.toArray(content)[0];
  smoothness = smoothness || 0.55;

  gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100vh", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
  gsap.set(content, {overflow: "visible", width: "100%"});

  let getProp = gsap.getProperty(content),
    setProp = gsap.quickSetter(content, "y", "px"),
    setScroll = ScrollTrigger.getScrollFunc(window),
    removeScroll = () => content.style.overflow = "visible",
    killScrub = trigger => {
      let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
      scrub && scrub.kill();
      trigger.animation.progress(trigger.progress);
    },
    height, isProxyScrolling;

  function onResize() {
    height = content.clientHeight;
    content.style.overflow = "visible"
    document.body.style.height = height + "px";
  }
  onResize();
  ScrollTrigger.addEventListener("refreshInit", onResize);
  ScrollTrigger.addEventListener("refresh", () => {
    removeScroll();
    requestAnimationFrame(removeScroll);
  })
  ScrollTrigger.defaults({scroller: content});
  ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

  ScrollTrigger.scrollerProxy(content, {
    scrollTop(value) {
      if (arguments.length) {
        isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
        setProp(-value);
        setScroll(value);
        return;
      }
      return -getProp("y");
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    }
  });

  return ScrollTrigger.create({
    animation: gsap.fromTo(content, {y:0}, {
      y: () => document.documentElement.clientHeight - height,
      ease: "none",
      onUpdate: ScrollTrigger.update
    }),
    scroller: window,
    invalidateOnRefresh: true,
    start: 0,
    end: () => height - document.documentElement.clientHeight,
    scrub: smoothness,
    onUpdate: self => {
      if (isProxyScrolling) {
        killScrub(self);
        isProxyScrolling = false;
      }
    },

    
    // onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
  
  });
}

