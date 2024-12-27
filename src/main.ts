import { Video, Canvas, Button } from './comp'
import { setupPause, setupPlay, setupVideo } from './lib'

const ID = {
  play: 'play-video',
  stop: 'stop-video',
  video: 'video-id',
  canvas: 'canvas-id'
}

document.querySelector('#app')!.innerHTML = `
  <div>
    ${Video({ id: ID.video, width: 500, height: 300 })}
    ${Canvas({ id: ID.canvas, width: 500, height: 300 })}
    ${Button({ id: ID.play, label: "PLAY"})}
    ${Button({ id: ID.stop, label: "STOP"})}
  </div>
`
setupVideo(ID)
setupPlay(ID)
setupPause(ID)

