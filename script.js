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
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
    }
})