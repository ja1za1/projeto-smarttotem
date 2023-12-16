ScrollReveal().reveal(".texto-sucessao-ecologica", {
    delay: 250,
    duration: 600,
    easing: 'ease',
    reset: true,
    origin: 'bottom',
    distance: "2rem",
})

const videos = document.getElementsByTagName('video')

for (video of videos) {
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