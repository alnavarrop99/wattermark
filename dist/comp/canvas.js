export const Canvas = (props) => {
    const defaultProps = Object.assign({
        width: 480,
        height: 270
    }, props);
    return `
    <canvas id=${defaultProps.id} width="${defaultProps.width}" height="${defaultProps.height}"></canvas>
  `;
};
