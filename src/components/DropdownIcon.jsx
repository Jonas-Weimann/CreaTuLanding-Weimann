import React from 'react'

export const DropdownIcon = ({size, currentMode}) => {
  let color = currentMode == 'dark' ? "#B996FF" : "#1E1E1E";
return(
<svg width={size} height={size} viewBox={'0 0' + ' ' + size + ' ' + size} xmlns="http://www.w3.org/2000/svg">

<rect x="0" fill="none" width={size} height={size}/>

<g
    stroke="black"
    strokeWidth='2'
    fill='none'
  >
<path stroke={color} d="M1 5l5 5 5-5"/>

</g>

</svg>
)
}
