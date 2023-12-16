const videos = document.getElementsByTagName('video')

for (let video of videos) {
    console.log(video)
    video.addEventListener('click', () => {
        if (video.paused) {
            /* if video is currently paused, play it */
            video.play();
        } else {
            /* video isn't paused... */
            if (video.ended) {
                /* if we're at the end, reset currentTime and play */
                video.currentTime=0;
                video.play();
            } else {
                /* otherwise, just pause */
                video.pause();
            }
        }
    })
}

ScrollReveal().reveal(".sobre", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'left',
    distance: "1rem",
})

ScrollReveal().reveal(".ajude-nos", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'right',
    distance: "1rem",
})

ScrollReveal().reveal(".saiba-mais", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'bottom',
    distance: "2rem",
})

