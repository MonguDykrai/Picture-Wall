import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function PWGalleryItem({_id, address}) {
  // console.log(id)
  const url = address.substr(0, address.lastIndexOf('/'))
  // console.log(`/${url}/${id}`);
  const styles = {
    link: {borderColor: '#ce4444'}
  }
  return (
    <li className="ul-gallery-item">
      <Link 
      to={`/${url}/${_id}`} 
      activeClassName="link-active" 
      activeStyle={styles.link}>
        <img src={`../src/images/${address}`} alt="car" />
      </Link>
    </li>
  )
}