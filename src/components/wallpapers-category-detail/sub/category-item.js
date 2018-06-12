import React from 'react'

export default function PWGalleryItem({address}) {
  console.log(address);
  return (
    <li className="ul-gallery-item">
      <a href="javascript: void(0);">
        <img src={`../src/images/${address}`} alt="car" />
      </a>
    </li>
  )
}