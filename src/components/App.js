import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import PWNavigation from './navigation'
import PWLogo from './logo'
import PWCategories from './categories'
import PWBreadCrumbSortBy from './breadcrumb-sortby'
import PWWallpapers from './wallpapers'
import PWWPCategoryDetail from './wallpapers-category-detail'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenInfo: `${window.screen.width}x${window.screen.height}` // Screen resolution
    }
  }

  render() {
    return (
      <Router>
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
          <Route exact path="/" component={PWWallpapers} />
          <Route exact path="/cars" component={PWWallpapers} />
          <Route exact path="/nature" component={PWWallpapers} />
          <Route exact path="/Video_Games" component={PWWallpapers} />
          
          {/* wallpapers-detail */}
          <Route path="/featured/:id" component={PWWPCategoryDetail} />
          <Route path="/cars/:id" component={PWWPCategoryDetail} />
          <Route path="/nature/:id" component={PWWPCategoryDetail} />
          <Route path="/Video_Games/:id" component={PWWPCategoryDetail} />
        </div>
      </Router>
    )
  }
}