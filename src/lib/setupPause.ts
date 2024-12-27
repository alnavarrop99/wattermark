export const setupPause = ( id: { stop: string, video: string } ) => {
  const button = document.getElementById(id.stop)! as HTMLButtonElement
  const video = document.getElementById(id.video)! as HTMLVideoElement
  button.addEventListener('click', () => video.pause())

}
