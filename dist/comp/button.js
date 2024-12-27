export const Button = (props) => {
    const defaultProps = Object.assign({
        id: crypto.randomUUID(),
        label: ''
    }, props);
    return `
    <button id=${defaultProps.id}>${defaultProps.label}</button>
  `;
};
