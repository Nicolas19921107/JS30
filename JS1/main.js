window.addEventListener('keydown', function (e) {
    const KeyTouch = e.keyCode;
    const AudioChoose = document.querySelector(`audio[id="${KeyTouch}"]`);
    const KeyAnimate = document.querySelector(`.keybutton[id="${KeyTouch}"]`);
    console.log(AudioChoose);
    if (!AudioChoose) {
        console.log("無此代碼");
        return;
    }
    AudioChoose.currentTime = 0;
    KeyAnimate.classList.add(`playing`);
    // KeyAnimate.classList.remove(`playing`);
    AudioChoose.play();
    window.addEventListener('transitionend', function (e) {
        KeyAnimate.classList.remove(`playing`);
    })
})