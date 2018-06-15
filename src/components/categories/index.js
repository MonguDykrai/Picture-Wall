import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import PropTypes from 'prop-types'
import PWCategoriesItem from './sub'

export default class PWCategories extends React.Component {
  static defaultProps = {
    isLoaded: false
  }

  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      isLoaded: this.props.isLoaded
    }
  }
  render() {
    return (
      <div className="categories-container">
        <div className="categories-inner">
          <ul className="ul-categories">
            {this._renderPWCategoriesItem()}
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount() {
    fetchJsonp('http://localhost:5000/category/')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      this.setState({
        categories: data,
        isLoaded: true
      })
    })
    .catch(err => {
      console.error(err)
    })
  }
  _renderPWCategoriesItem() {
    const { isLoaded } = this.state
    if (!isLoaded) return
    return this.state.categories.map(item => {
      return <PWCategoriesItem key={item._id} {...item} />
    })
  }
}