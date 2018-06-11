import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
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

          {/* wallpapers-category */}
          <Route exact path="/" component={PWWallpapers} />
          <Route exact path="/cars" component={PWWallpapers} />
          <Route exact path="/nature" component={PWWallpapers} />
          <Route exact path="/Video_Games" component={PWWallpapers} />
          
          {/* wallpapers-detail */}
          <Route path="/featured/:id" render={() => <h1>featured/:id</h1>} />
          <Route path="/cars/:id" render={() => <h1>cars/:id</h1>} />
          <Route path="/nature/:id" render={() => <h1>nature/:id</h1>} />
          <Route path="/Video_Games/:id" render={() => <h1>Video_Games/:id</h1>} />
        </div>
      </Router>
    )
  }
}