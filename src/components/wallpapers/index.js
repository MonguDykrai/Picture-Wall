import React from 'react'
import PropTypes from 'prop-types'
import PWListItem from './sub'

export default class PWWallpapers extends React.Component {
  static defaultProps = {
    initListItems: [
      {id: '588771', address: 'featured/588771.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '002447', address: 'featured/002447.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '786555', address: 'featured/786555.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '986632', address: 'featured/986632.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '587422', address: 'featured/587422.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '452114', address: 'featured/452114.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '589622', address: 'featured/589622.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '125889', address: 'featured/125889.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '124777', address: 'featured/124777.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '125489', address: 'featured/125489.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '125888', address: 'featured/125888.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '233333', address: 'featured/233333.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '235777', address: 'featured/235777.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '254845', address: 'featured/254845.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '269887', address: 'featured/269887.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'},
      {id: '588777', address: 'featured/588777.jpg', description: '1920x1080 px Joker', created: 'Jun 07, 2018'}
    ]
  }

  constructor(props) {

    super(props)
    // console.warn(`PWWallpapers组件生命周期钩子：constructor`)

    this.state = {
      listItems: this.props.initListItems,
      currentPath: this.props.location.pathname
    }
  }

  render() {
    // console.warn(`PWWallpapers组件生命周期钩子：render`)
    return(
      <div className="wallpapers-container">
        <ul className="wp-list">
          {this._renderPWListItem()}
        </ul>
      </div>
    )
  }

  componentDidMount(props) {
    // console.warn(`PWWallpapers组件生命周期钩子：componentDidMount`)
    const { currentPath } = this.state
    const path = currentPath === '/' ? `/featured`: currentPath
    this._doFetch(path)
  }

  componentWillReceiveProps(nextProps) {
    // console.warn(`PWWallpapers组件生命周期钩子：componentWillReceiveProps`)
  }

  _renderPWListItem() {
    return this.state.listItems.map(item => {
      return <PWListItem key={item.id} {...item} />
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // console.warn(`PWWallpapers组件生命周期钩子：componentDidUpdate`)
    const prevPathName = prevProps.location.pathname
    const currentPathName = this.props.location.pathname
    if (prevPathName !== currentPathName) {
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