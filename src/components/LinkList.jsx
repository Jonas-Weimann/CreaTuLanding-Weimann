import React from 'react'
import { Link } from 'react-router-dom'

export const LinkList = ({title, links}) => {
  return (
    <div className={'link-list ' + title.toLowerCase()}>
        <h6>{title}</h6>
        {
            links.map(link=>(
                <Link className='link' key={link} id={link}>{link}</Link>
            ))
        }
    </div>
  )
}
