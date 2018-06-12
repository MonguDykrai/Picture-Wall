import React from 'react'

export default function PWDetailPicture({ url }) {
  return (
    <div className="category-detail-picture-container">
      <a href="javascript: void(0);">
        <img src={ `../src/images/${url}` } alt="" />
      </a>
    </div>
  )
}