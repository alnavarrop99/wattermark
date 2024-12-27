type Props = Partial<{
  id: string
  label: string
}>

export const Button = ( props: Props ) => {
  const defaultProps = Object.assign({
    id: crypto.randomUUID(),
    label: ''
  }, props)

  return `
    <button id=${defaultProps.id}>${defaultProps.label}</button>
  `
}
