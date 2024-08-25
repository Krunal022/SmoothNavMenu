var menu = document.querySelector("nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration: .6,
})
tl.from("#full h4", {
    x: 150,
    duration: 0.7,
    opacity: 0,
    stagger: .27
})
tl.from("#full i", {
    opacity: 0,
    duration: .5
})
tl.pause()

menu.addEventListener("click", function () {
    tl.play()
})
cross.addEventListener("click", function () {
    tl.reverse()

    // tl.to("#full",{
    //     x:300,
    //     opacity:0,
    //     duration:.8
    // })    
})