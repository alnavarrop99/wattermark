export const setupPause = (id) => {
    const button = document.getElementById(id.stop);
    const video = document.getElementById(id.video);
    button.addEventListener('click', () => video.pause());
};
