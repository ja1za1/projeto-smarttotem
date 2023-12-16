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

ScrollReveal().reveal(".texto-incendio-florestal", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'bottom',
    distance: "2rem",
})

ScrollReveal().reveal(".texto-fogo", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'bottom',
    distance: "2rem",
})

ScrollReveal().reveal(".texto-consequencias", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'bottom',
    distance: "2rem",
})