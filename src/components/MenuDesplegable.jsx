import React from 'react'
import { DropdownIcon } from './DropdownIcon'

export const MenuDesplegable = ({children, currentMode}) => {
  return (
    <div>{children} <DropdownIcon size='16' currentMode={currentMode}/></div>
  )
}
