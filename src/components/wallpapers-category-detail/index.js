import React from 'react'
import PWGalleryItem from './sub/category-item'
import PWDetailPicture from './sub/detail-picture'

export default class PWWPCategoryDetail extends React.Component {
  constructor(props) {
    super(props)

    console.log(`props`)

    this.state = {
      currentPath: this.props.match.url,
      url: '',
      galleryItemsUrl: props.location.pathname.substr(0, props.location.pathname.lastIndexOf('/')),
      galleryItems: []
    }
  }

  render() {
    console.log(`this.state.url:${this.state.url}`);
    return (
      <div className="wallpapers-category-detail-container">
        <div className="category-detail-gallery">
          <div className="gallery-leftArrow-container">
            <span className="arrowLeft">&lt;</span>
          </div>
          <ul className="ul-gallery">
            { this._renderPWGalleryItems() }
          </ul>
          <div className="gallery-rightArrow-container">
              <span className="arrowRight">&gt;</span>
          </div>
        </div>
        <PWDetailPicture url={ this.state.url } />
      </div>
    )
  }
  
  componentDidMount() {
    const { currentPath } = this.state
    this._doFetchPic(currentPath)
    console.log(`currentPath:${currentPath}`);

    this._doFetchGallery(this.state.galleryItemsUrl)
  }



  _renderPWGalleryItems() {
    return this.state.galleryItems.map(item => {
      return (
        <PWGalleryItem key={ item.id } {...item} />
      )
    })
  }

  _doFetchPic(path) {
    fetch(`http://localhost:3004${path}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({
          url: data.address
        })
      })
  }

  _doFetchGallery(path) {
    fetch(`http://localhost:3004${path}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          galleryItems: data
        }, function () {
          console.log(this.state.galleryItems);
        })
      })
  }
}

