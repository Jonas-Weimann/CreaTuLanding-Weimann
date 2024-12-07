import React from 'react'

export const Button = (props) => {
  return (
    <button className={props.className} style={props.style}>{props.children}</button>
  )
}
