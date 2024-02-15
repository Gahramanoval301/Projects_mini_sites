// home section - belows are the motional images
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');

// about section variables
let desert_moon = document.getElementById('desert-moon');
let man = document.getElementById('man');

window.addEventListener('scroll', () => {
    // home section motions

    let value = window.scrollY;
    moon.style.top = value * .9 + 'px';
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + 'px';

    // about section motions
    desert_moon.style.top = value * .3 + 'px';
    man.style.left = value * 0.6 + 'px'
})

// progress bar 
let calcScrollValue = () => {
    let scrollProgress = document.getElementById('progress');
    let pos = document.documentElement.scrollTop
    // console.log(pos, window.scrollY); is the same thing

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight)
    // console.log(scrollValue); it defines the scroll progress over 100%


    // when it reaches the end of the screen-view then shows the progress
    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });
    // console.log(scrollValue);
    scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;