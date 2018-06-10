import React from 'react'
import PWNavigation from './navigation'
import PWLogo from './logo'
import PWCategories from './categories'
import PWBreadCrumbSortBy from './breadcrumb-sortby'
import PWWallpapers from './wallpapers'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenInfo: `${window.screen.width}x${window.screen.height}` // Screen resolution
    }
  }

  render() {
    return (
      <div className="picture-wall-wrapper">
        {/* Navigation */}
        <PWNavigation />
        {/* Logo */}
        <PWLogo screenInfo={this.state.screenInfo} />
        {/* Categories */}
        <PWCategories />
        {/* breadcrumb-sortby */}
        <PWBreadCrumbSortBy />
        {/* wallpapers */}
        <PWWallpapers />
      </div>
    )
  }
}