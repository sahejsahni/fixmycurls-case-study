// preloader

$(window).load(function() {
    $('.preloader').fadeOut('slow');
    $('body').css({'overflow':'auto', 'height':'auto', 'position':'relative'});
 });

gsap.registerPlugin(ScrollTrigger);


// hero animation

var heroOnLoad = gsap.timeline();
    words = "#heroText .word";
    btn = ".hero a"
    function heroParaSlideUp() {
        $(".hero p.splitting").addClass("slide-up")
    }
gsap.set("#heroText", {perspective: 400});

heroOnLoad.from(words, {
                    duration: 1,
                    opacity: 0,
                    scale:0.8,
                    y: 20,
                    skewX: 4,
                    rotationX:-64,
                    rotationZ: 8,
                    transformOrigin: "0 50% -50%",
                    ease: "back.out(0.5)",
                    stagger: 0.1
                }, )
                .from(".nat-badge", {opacity:0, scale: 0, y: 80, rotate: -90, duration: 2}, "<")
                .from (btn, {
                    duration: 1,
                    y: 40,
                    rotationZ: 2,
                    rotationX: 40,
                    opacity: 0,
                    ease: "back.out(1)"
                }, "<")
                .from("#heroImg", {
                    duration: 2,
                    opacity: 0,
                    rotationZ: -8,
                    rotationX: -16,
                    rotationY: 27,
                    x: -40,
                    y: 240,
                    ease: "back.out(0.5)",
                    onStart: heroParaSlideUp
                }, "-=1")
gsap.to(".nat-badge", {
    rotate: 360,
    scrollTrigger: {
        trigger: ".hero",
        scrub: 3,
    }
})

// heading animations

var h1Animations=[".comm-intro",".ethical"];

for (let i = 0; i < h1Animations.length; i++) { 
    
    var elem = h1Animations[i] + " h1 .char"

    gsap.from(elem, {
        scrollTrigger: {
            trigger: h1Animations[i],
            toggleActions: "restart none none none",
        },
        duration: 1,
        delay: 0.5,
        opacity: 0,
        scale:0.8,
        y: 20,
        rotationX:-24,
        rotationZ: 8,
        transformOrigin: "0 50% -50%",
        ease: "back.out(0.5)",
        stagger: 0.03,
    }, )  
}

var h2Animations=[".features", ".reviews"];

for (let i = 0; i < h2Animations.length; i++) { 
    
    var elem = h2Animations[i] + " h2 .char"
    gsap.from(elem, {
        scrollTrigger: {
            trigger: h2Animations[i],
            toggleActions: "restart none none none",
        },
        duration: 1,
        delay: 0.5,
        opacity: 0,
        scale:0.8,
        y: 20,
        rotationX:-24,
        rotationZ: 8,
        transformOrigin: "0 50% -50%",
        ease: "back.out(0.5)",
        stagger: 0.03,
    }, )  
}

// listing animation

function switchClass() {
    $( ".listing .photo-wrapper" ).toggleClass( "switch no-switch" )
    $(".listing .selector .title").toggleClass("switchSel noSwitchSel")
}
$( ".listing .title" ).mouseenter(function() {
    if ( $( this ).hasClass( "noSwitchSel" ) ) {switchClass()}
});

var switchFunction = null;
function startSetInterval() {
    switchFunction = setInterval(switchClass, 2500);
}

startSetInterval();

$('#cls-hover').hover(function() {
  clearInterval(switchFunction);
},function() {
  startSetInterval();
});

// 
ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
        
        // listing pinning                 
        
        let listingPin = gsap;

        listingPin.to(".display", {
            scrollTrigger: {
                trigger: ".listing .cta",
                pin: true,
                start: "top",
                end: "bottom center",
                markers: true
            }
        })
        
        // benefits scrolling

        let sections = gsap.utils.toArray(".benefit");

        gsap.to(sections, {
        xPercent: -118 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".stage",
            start: "top 120",
            pin: true,
            pinSpacer: true,
            scrub: 1,
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + 0.8*document.querySelector(".stage").offsetWidth
        }
        });
                
        // footer reveal 

        gsap.to(".footer", {
            y:"80vh" ,
            ease: "none",
            scrollTrigger: {
                trigger: ".footer",
                start: "top 20%",
                end: "bottom 20%",
                scrub: true,
            }
        })
    }
})


// var smoothScroll = gsap.timeline();
//                 speed1 = ".speed1";
//                 speed2 = ".speed2";

//     smoothScroll.to (speed1, {
//         y: -60,
//         scrollTrigger: {
//             trigger: speed1,
//             start: "top 20%",
//             end: "bottom",
//             scrub: 1.5,
//             toggleActions: "restart none none none",
//         }
//     })
//     .to (speed2, {
//         y: -120,
//         scrollTrigger: {
//             trigger: speed1,
//             start: "top 20%",
//             end: "bottom",
//             scrub: 1.5,
//             toggleActions: "restart none none none",
//         }
//     })
//  var h1words = ".comm-intro h1 .word"
//     gsap.from(h1words, {
//         scrollTrigger: {
//             trigger: ".comm-intro",
//             toggleActions: "restart none none none",
//         },
//         duration: 1,
//         opacity: 0,
//         scale:0.8,
//         y: 20,
//         skewX: 4,
//         rotationX:-64,
//         rotationZ: 8,
//         transformOrigin: "0 50% -50%",
//         ease: "back.out(0.5)",
//         stagger: 0.1
//     }, )



// gsap responsive