let score = 0;
let popped = 0;

const balloons = document.querySelectorAll('.balloon');

balloons.forEach(balloon => {
    balloon.addEventListener('click', function(e) {
        if (e.target.className === 'balloon') {
            e.target.style.backgroundColor = '#ededed';
            e.target.textContent = '펑!';
            score += 10;
            popped++;
            updateScore();
            checkAllPopped();
            removeEvent(e);
        }
    });
});

function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
}

function removeEvent(e) {
    e.target.removeEventListener('click', function() {});
}

function checkAllPopped() {
    if (popped === 24) {
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
}