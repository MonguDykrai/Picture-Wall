import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PWListItem({_id, address, description, created, currentPathName}) {
  console.log(`currentPathName:${currentPathName}`)
  
  let url
  if (currentPathName === '/') {
    url = '/featured/' + _id + ''
  } else {
    url = '' + currentPathName + '/' + _id + ''
  }

  return (
    <li className="wp-list-item">
      <NavLink to={ url }>
        <div style={{"backgroundImage": `url(../src/images/${address})`}} className="wp-list-item-li-img"></div>
        <p className="pic-desc">{ description }</p>
        <p className="pic-created-time">{ created }</p>
      </NavLink>
    </li>
  )
}
