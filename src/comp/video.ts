import { FORMATS } from '../const'
import { getSrc } from '../lib'

type Props = Partial<{
  id: string
  width: number,
  height: number
  formats: Array<string>
}>

export const Video = ( props: Props ) => {
  const defaultProps = Object.assign({
    width: 480,
    height: 270,
    formats: FORMATS
  }, props)
  return `
    <video id=${defaultProps.id} controls width="${defaultProps.width}" height="${defaultProps.height}" crossorigin="anonymous">
      ${(defaultProps.formats).map(value => `
        <source
          src=${getSrc(value)}
          type="video/${value}" />
      `)}
    </video>
  `
}
