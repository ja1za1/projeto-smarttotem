

window.onload = function() {
    let videos = document.getElementsByTagName('video')
    for (let video of videos) {
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
}
