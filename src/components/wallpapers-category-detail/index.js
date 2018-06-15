import React from 'react'
import PWGalleryItem from './sub/category-item'
import PWDetailPicture from './sub/detail-picture'

export default class PWWPCategoryDetail extends React.Component {
  constructor(props) {
    super(props)
    this._handleClickLeftArrow = this._handleClickLeftArrow.bind(this)
    this._handleClickRightArrow = this._handleClickRightArrow.bind(this)

    const galleryItemsUrl = props.location.pathname.substr(0, props.location.pathname.lastIndexOf('/'))

    this.state = {
      currentPath: this.props.match.url,
      detailPicUrl: '',
      galleryItemsUrl,
      galleryItems: [],
      ulGalleryStyleLeft: 0,
      isLoaded: false,
      ulGalleryMinLeft: 0
    }

    this.count = 0
  }

  render() {
    console.error(`生命周期钩子：render`)
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

  componentDidMount() {
    this.setState({
      ulGalleryStyleLeft: this._getCssProperty(this._ul, 'left').replace(/px/, '')
    })
    const { currentPath } = this.state
    const { galleryItemsUrl } = this.state
    this._doFetch(currentPath)
    console.warn(`currentPath: ${currentPath}`);

    this._doFetch(galleryItemsUrl)
  }

  componentDidUpdate(prevProps) {
    const prevPathName = prevProps.location.pathname
    const currentPathName = this.props.location.pathname
    if (prevPathName !== currentPathName) {
      this._doFetch(currentPathName)
    }
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
            galleryItems: data,
            isLoaded: true
          }, function () {
            // console.log(this.state.galleryItems);
          })
        }
      })
  }

  _renderPWGalleryItems() {
    this.count++
    console.log(`_renderPWGalleryItems: ${this.count}`)
    if (this.state.isLoaded) {
      if (this.state.ulGalleryMinLeft === 0) {
        const length = this.state.galleryItems.length
        this.setState({
          // 写死的，待优化
          ulGalleryMinLeft: (length * (114 + 18)) - 1090
        }, function () {
          console.log(this.state.ulGalleryMinLeft)
        })
      }
      return this.state.galleryItems.map(item => {
        return (
          <PWGalleryItem key={ item.id } {...item} />
        )
      })
    }

  }

  _getCssProperty(elem, property){
    return window.getComputedStyle(elem,null).getPropertyValue(property);
  }

  _handleClickLeftArrow() {
    const { ulGalleryStyleLeft } = this.state
    if (ulGalleryStyleLeft >= 80) return
    this._gapLeft = Number(ulGalleryStyleLeft) + 50
    this.setState({
      ulGalleryStyleLeft: this._gapLeft
    })
    this._ul.style.left = `${this._gapLeft}px`
  }

  _handleClickRightArrow() {
    const { ulGalleryStyleLeft } = this.state
    const { ulGalleryMinLeft } = this.state
    if (ulGalleryStyleLeft <= -ulGalleryMinLeft) return
    this._gapRight = Number(ulGalleryStyleLeft) - 50
    this.setState({
      ulGalleryStyleLeft: this._gapRight
    })
    this._ul.style.left = `${this._gapRight}px`
  }
}

