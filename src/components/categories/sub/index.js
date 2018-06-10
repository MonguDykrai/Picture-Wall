import React from 'react'

export default function PWCategoriesItem ({category}) {
  return (
    <li className="ul-categories-item">
      <a href="javascript: void(0);">{ category }</a>
    </li>
  )
}