$(document).ready(function() {

var typed = new Typed('.typing', 
{
    strings: ["Nice to meet you, I'm Danitsa!", "I study Software Engineering.", "I work as an ABAP developer at SAP.", "Welcome to my portfolio."],
    typeSpeed: 50, // Typing speed
    backSpeed: 25, // Speed at which text is erased
    loop: true, // Loop the typing
    smartBackspace: true, // Only backspace what doesn't match the new string
    shuffle: false, // Shuffle the strings
    backDelay: 1000, // Delay before backspacing
    fadeOut: false, // Fade out instead of backspacing
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500, // Fade out 
});

});
