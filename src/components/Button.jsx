export const Button = (props) => {
  return (
    <button onClick={props.clickEvent} className={props.className} style={props.style}>{props.children}</button>
  )
}
