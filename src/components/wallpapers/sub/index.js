import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PWListItem({id, address, description, created, currentPathName}) {
  console.log(`currentPathName:${currentPathName}`)
  
  let url
  if (currentPathName === '/') {
    url = '/featured/' + id + ''
  } else {
    url = '' + currentPathName + '/' + id + ''
  }

  return (
    <li className="wp-list-item">
      <NavLink to={ url }>
        <div style={{"backgroundImage": `url(../src/images/${address})`}} className="wp-list-item-li-img"></div>
        <p className="pic-desc">1920x1080 px Joker</p>
        <p className="pic-created-time">Jun 07, 2018</p>
      </NavLink>
    </li>
  )
}
