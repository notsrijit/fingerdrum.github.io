window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#8a2be2",
        "#4169e1",
        "#3cb371",
        "#FFFF00",
        "#ff6347",
        "#b03060"
    ];

    // Sound Test
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; //resets current time to 0 so that we dont have to wait
            sounds[index].play();  //track only plays one time if upper line not added
            createBalls(index);
        });
    });

    // Create Visuals
    const createBalls = (index) => {
        const ball = document.createElement('div');
        visual.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = 'jump 1s ease';
        ball.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    }
});

