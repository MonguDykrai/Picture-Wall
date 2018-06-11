import React from 'react'
import PropTypes from 'prop-types'
import PWListItem from './sub'

export default class PWWallpapers extends React.Component {

  constructor(props) {
    super(props)
    console.warn(`PWWallpapers组件生命周期钩子：constructor`)
    
    this.state = {
      listItems: [],
      currentPathName: this.props.location.pathname,
      isLoaded: false
    }
  }

  render() {
    console.error(`PWWallpapers组件生命周期钩子：render`)
    return(
      <div className="wallpapers-container">
        <ul className="wp-list">
          {this._renderPWListItem()}
        </ul>
      </div>
    )
  }

  componentDidMount(props) {
    console.error(`PWWallpapers组件生命周期钩子：componentDidMount`)
    const { currentPathName } = this.state
    const path = currentPathName === '/' ? `/featured`: currentPathName
    this._doFetch(path)
  }

  componentWillReceiveProps(nextProps) {
    // console.warn(`PWWallpapers组件生命周期钩子：componentWillReceiveProps`)
  }

  _renderPWListItem() {
    const { currentPathName } = this.state
    return this.state.listItems.map(item => {
      console.log(item) // _renderPWListItem执行了两次
      return <PWListItem key={ item.id } { ...item } currentPathName={ currentPathName } />
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.error(`PWWallpapers组件生命周期钩子：componentDidUpdate`)
    const prevPathName = prevProps.location.pathname
    const currentPathName = this.props.location.pathname
    if (prevPathName !== currentPathName) {
      this.setState({
        currentPathName
      })
      const path = currentPathName === '/' ? `/featured`: currentPathName
      this._doFetch(path)
    }
  }

  _doFetch(path) {
    fetch(`http://localhost:3004${path}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          listItems: data
        })
      })
  }
}