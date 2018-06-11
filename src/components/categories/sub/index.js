import React from 'react'
import { NavLink as Link } from 'react-router-dom'

export default function PWCategoriesItem ({ category }) {
  return (
    <li className="ul-categories-item">
      <Link to={`/${category}`} activeClassName="current">{ category }</Link>
    </li>
  )
}