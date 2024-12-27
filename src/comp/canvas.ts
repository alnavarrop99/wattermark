type Props = Partial<{
  id: string,
  width: number, 
  height: number
}>

export const Canvas = ( props: Props ) => {
  const defaultProps = Object.assign({
    width: 480,
    height: 270
  }, props)
  return `
    <canvas id=${defaultProps.id} width="${defaultProps.width}" height="${defaultProps.height}"></canvas>
  `
}
