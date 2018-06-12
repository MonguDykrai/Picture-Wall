import React from 'react'
import PWGalleryItem from './sub/category-item'
import PWDetailPicture from './sub/detail-picture'

export default class PWWPCategoryDetail extends React.Component {
  constructor(props) {
    super(props)
    this._handleClickLeftArrow = this._handleClickLeftArrow.bind(this)
    this._handleClickRightArrow = this._handleClickRightArrow.bind(this)

    this.state = {
      currentPath: this.props.match.url,
      detailPicUrl: '',
      galleryItemsUrl: props.location.pathname.substr(0, props.location.pathname.lastIndexOf('/')),
      galleryItems: [],
    }

    this._gapLeft = 80
    this._gapRight = -80
  }

  render() {
    // console.log(`this.state.detailPicUrl:${this.state.detailPicUrl}`);
    return (
      <div className="wallpapers-category-detail-container">
        <div className="category-detail-gallery">
          <div className="gallery-leftArrow-container">
            <span className="arrowLeft" onClick={this._handleClickLeftArrow}>&lt;</span>
          </div>
          <ul className="ul-gallery" ref={ ul => this._ul = ul }>
            { this._renderPWGalleryItems() }
          </ul>
          <div className="gallery-rightArrow-container">
              <span className="arrowRight"  onClick={this._handleClickRightArrow}>&gt;</span>
          </div>
        </div>
        <PWDetailPicture detailPicUrl={ this.state.detailPicUrl } />
      </div>
    )
  }

  _handleClickLeftArrow() {
    console.log(`left`)
    this._gapLeft = this._gapLeft - 10
    this._ul.style.left = `${this._gapLeft}px`
  }

  _handleClickRightArrow() {
    console.log(`right`)
    this._gapRight = this._gapRight - 10
    this._ul.style.left = `${this._gapRight}px`
  }
  
  componentDidMount() {
    const { currentPath } = this.state
    const { galleryItemsUrl } = this.state
    this._doFetch(currentPath)
    console.log(`currentPath:${currentPath}`);

    this._doFetch(galleryItemsUrl)
  }

  _renderPWGalleryItems() {
    return this.state.galleryItems.map(item => {
      return (
        <PWGalleryItem key={ item.id } {...item} />
      )
    })
  }

  _doFetch(path) {
    fetch(`http://localhost:3004${path}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        // console.log(`data：${data}`);
        if (data.address) { // request for get detail picture url
          this.setState({
            detailPicUrl: data.address
          })
        } else {
          this.setState({
            galleryItems: data
          }, function () {
            // console.log(this.state.galleryItems);
          })
        }
      })
  }

  componentDidUpdate(prevProps) {
    const prevPathName = prevProps.location.pathname
    const currentPathName = this.props.location.pathname
    if (prevPathName !== currentPathName) {
      this._doFetch(currentPathName)
    }
  }
}

