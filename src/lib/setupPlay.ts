export const setupPlay = ( id: { play: string, video: string } ) => {
  const button = document.getElementById(id.play)! as HTMLButtonElement
  const video = document.getElementById(id.video)! as HTMLVideoElement
  button.addEventListener('click', () => video.play())
}
