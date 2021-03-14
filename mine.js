var cards_block = document.querySelector('.cards');
var cards = document.querySelectorAll('.cards > div');


function start() {
    var random = Math.floor(Math.random() * 15);
    cards_block.style.left = -random * 100 + 'px';
    setTimeout(function() {
        random++;
    }, 5000)
}