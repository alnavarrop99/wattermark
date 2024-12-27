// https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_manipulation
export const setupVideo = (id) => {
    const video = document.getElementById(id.video);
    const canvas = document.getElementById(id.canvas);
    const ctx = canvas.getContext("2d");
    const watermark = new Image();
    const src = '/vite.svg';
    watermark.src = src;
    video.addEventListener('play', onPlay, false);
    function onPlay() {
        canvas.width = video.width;
        canvas.height = video.height;
        timerCallback();
    }
    function computeFrame() {
        // wattermark size config
        const watermarkWidth = 50;
        const watermarkHeight = 50;
        // wattermark size posicion
        const x = canvas.width - watermarkWidth - 10;
        const y = canvas.height - watermarkHeight - 10;
        // video draw
        ctx.drawImage(video, 0, 0, video.width, video.height);
        // wattermark draw
        ctx.drawImage(watermark, x, y, watermarkWidth, watermarkHeight);
    }
    function timerCallback() {
        if (video.paused || video.ended)
            return;
        computeFrame();
        // set frames (60fps) !imp
        setTimeout(() => {
            timerCallback();
        }, 16);
    }
};
