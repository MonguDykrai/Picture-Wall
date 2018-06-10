import React from 'react'

export default function PWListItem({address, description, created}) {
  return (
    <li className="wp-list-item">
      <a href="javascript: void(0);">
        <div style={{"backgroundImage": `url(../src/images/${address})`}} className="wp-list-item-li-img"></div>
        <p className="pic-desc">1920x1080 px Joker</p>
        <p className="pic-created-time">Jun 07, 2018</p>
      </a>
    </li>
  )
}
