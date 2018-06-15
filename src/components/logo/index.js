import React from 'react'
import { Link } from 'react-router-dom'

export default function PWLogo({screenInfo}) {

  return (
    <div className="logo-container">
      <div className="logo-inner">
        <Link to="/" >
          <img className="img-logo" src="../src/images/logo.png" alt="pic" />
        </Link>
        <p className="logo-description">Your current screen resolution is {screenInfo}</p>
      </div>
    </div>
  )
}