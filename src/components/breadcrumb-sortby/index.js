import React from 'react'

export default function PWBreadCrumbSortBy(props) {
  return(
    <div className="breadcrumb-sortby-container">
      <div className="breadcrumb-sortby-inner display-flex">
        <div className="bread-crumb-nav">FEATURED WALLPAPERS</div>
        <div className="sort-by">
          Sort by:&nbsp;
          <a className="sort-type current" href="javascript: void(0);">
            Freshness
          </a>
          <a className="sort-type" href="javascript: void(0);">
            Downloads
          </a>
          <a className="sort-type" href="javascript: void(0);">
            Rating
          </a>
        </div>
      </div>
    </div>
  )
}