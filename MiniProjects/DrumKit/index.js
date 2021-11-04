function sound(key) {
    switch (key) {
        case "a":
            var sound1 = new Audio("sounds/clap.wav");
            sound1.play();
            break;

        case "s":
            var sound2 = new Audio("sounds/hithat.wav");
            sound2.play();
            break;

        case "d":
            var sound2 = new Audio("sounds/kick.wav");
            sound2.play();
            break;

        case "f":
            var sound3 = new Audio('sounds/openhat.wav');
            sound3.play();
            break;

        case "g":
            var sound4 = new Audio('sounds/boom.wav');
            sound4.play();
            break;

        case "h":
            var sound5 = new Audio('sounds/ride.wav');
            sound5.play();
            break;

        case "j":
            var sound6 = new Audio('sounds/snare.wav');
            sound6.play();
            break;

        case "k":
            var sound7 = new Audio('sounds/tom.wav');
            sound7.play();
            break;
        case "l":
            var sound7 = new Audio('sounds/tink.wav');
            sound7.play();
            break;

        default:
            console.log(key);
    }
}

function animation(key) {
    var animate = document.querySelector("." + key);
    console.log(animate);
    animate.classList.add('pressed');
    setTimeout(function() {
        animate.classList.remove("pressed");
    }, 1000);
}

document.addEventListener("keypress", function(event) {
    console.log(event.key);
    sound(event.key);
    animation(event.key);
});