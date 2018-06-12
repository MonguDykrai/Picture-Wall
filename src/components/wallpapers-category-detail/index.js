import React from 'react'

export default class PWWPCategoryDetail extends React.Component {
  constructor(props) {
    super(props)

    console.log(`props:${props}`)

    this.state = {
      currentPath: this.props.match.url,
      url: ''
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
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
            <li className="ul-gallery-item">
              <a href="javascript: void(0);">
                <img src="../src/images/cars/125879.jpg" alt="car" />
              </a>
            </li>
          </ul>
          <div className="gallery-rightArrow-container">
              <span className="arrowRight">&gt;</span>
          </div>
        </div>
        <div className="category-detail-picture-container">
          <img src={ `../src/images/${this.state.url}` } alt="" />
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    const { currentPath } = this.state
    this._doFetch(currentPath)
    console.log(`currentPath:${currentPath}`);
  }

  _doFetch(path) {
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
}

