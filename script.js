var typed = new Typed(".text", {
    strings: ["Desenvolvedor Front-end", "Desenvolvedor FullStack",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

window.sr = ScrollReveal({ reset: true });

sr.reveal('.home', {
    duration: 3500
});

sr.reveal('.about', {
    duration: 3500
});
sr.reveal('.projects',{
    rotate: {x: 0, y: 80, z:0},
    duration: 3500
} )