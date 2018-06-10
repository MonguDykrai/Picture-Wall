import React from 'react'

export default function PWLogo({screenInfo}) {

  return (
    <div className="logo-container">
      <div className="logo-inner">
        <img className="img-logo" src="../src/images/logo.png" alt="pic" />
        <p className="logo-description">Your current screen resolution is {screenInfo}</p>
      </div>
    </div>
  )
}