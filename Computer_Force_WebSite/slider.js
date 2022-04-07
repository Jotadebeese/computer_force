const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

function mine(x) {
    if (x.matches) {
        buttonRight.onclick = function () {
            document.getElementById('container').scrollLeft += 150;
        };
        buttonLeft.onclick = function () {
            document.getElementById('container').scrollLeft -= 150;
        };
    } else {
        buttonRight.onclick = function () {
            document.getElementById('container').scrollLeft += 500;
        };
        buttonLeft.onclick = function () {
            document.getElementById('container').scrollLeft -= 500;
        };
    }
}

var x = window.matchMedia("(max-width: 600px)")
mine(x)
x.addListener(mine)