import React from 'react'

export default function PWDetailPicture({ detailPicUrl }) {
  return (
    <div className="category-detail-picture-container">
      <a href="javascript: void(0);">
        <img src={ `../src/images/${detailPicUrl}` } alt="" />
      </a>
    </div>
  )
}