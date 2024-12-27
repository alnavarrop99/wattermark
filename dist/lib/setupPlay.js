export const setupPlay = (id) => {
    const button = document.getElementById(id.play);
    const video = document.getElementById(id.video);
    button.addEventListener('click', () => video.play());
};
