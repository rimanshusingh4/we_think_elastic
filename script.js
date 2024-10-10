let lastScrollY = window.scrollY;
const menu = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    gsap.to("nav",{
        opacity: 0,
        duration: 0.5,
        y: 50,
    })

} else {
    // Scroll up - show the menu
    gsap.to("nav",{
        opacity: 1,
        scale: 1,
        duration: 0.7,
        y: 0,
    })
  }
  lastScrollY = window.scrollY;
});

var tl = gsap.timeline();

tl.from("nav img",{
    opacity: 0,
    duration: 1,
    y: -20,
    delay: 0.5,
})

tl.from(".nav-part2 h4",{
    opacity: 0,
    duration: 0.3,
    y: -20,
    stagger: 0.3,
})

tl.from(".page1 h1",{
    opacity: 0,
    scale: 0.3,
    y: 20,
    duration: 1,
    delay: 0.23,
})


gsap.from(".video",{
    scale:0.3,
    duration: 5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".video",
        scroller: "body",
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
    }
})


//custom_cursor

var custom_cursor = document.querySelector(".custom_cursor");
var cursor = document.querySelector(".cursor")
custom_cursor.addEventListener("mousemove", function(dets) {
    var bounds = custom_cursor.getBoundingClientRect(); // Get the bounding box of the custom_cursor
    gsap.to(cursor, {
        x: dets.clientX - bounds.left,
        y: dets.clientY - bounds.top,
        duration: 0.5,
    });
});

var video = document.querySelector(".custom_cursor .left");
video.addEventListener("mouseenter",function(){
    gsap.to(video,{
        scale: 1.1,
        delay: 0.2,
    });
    gsap.to(cursor, {
        scale: 2,
    })
})

video.addEventListener("mouseleave",function(){
    gsap.to(video,{
        scale: 1,
        delay:0.2,
    });
    gsap.to(cursor,{
        scale: 1,
    })
})

var coffee = document.querySelector(".custom_cursor  img");
coffee.addEventListener("mouseenter",function(){
    gsap.to(coffee,{
        scale: 1.1,
        delay: 0.2,
    });
    gsap.to(cursor, {
        scale: 2,
    })
})

coffee.addEventListener("mouseleave",function(){
    gsap.to(coffee,{
        scale: 1,
        delay:0.2,
    });
    gsap.to(cursor,{
        scale: 1,
    })
})



//svg modify
var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";
var svgElement = document.querySelector("#svg svg");

svgElement.addEventListener("mousemove", function(dets){
    // Get bounding rectangle of the SVG element to adjust mouse position relative to it
    var svgRect = svgElement.getBoundingClientRect();
    var relativeY = dets.clientY - svgRect.top;

    // Update the path with the new Y-coordinate based on mouse movement
    path = `M 10 100 Q ${dets.x} ${relativeY} 990 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        ease: "elastic.out(2,0.1)",
    });
});

svgElement.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: { d: finalPath },
    });
});

// experience
gsap.to(".page3 h1",{
    transform: "translateX(-186%)",
    scrollTrigger:{
        trigger: ".page3",// jb pin props use kreng to child hata dete hai keval parent ko trigger krte hai
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
    }
})