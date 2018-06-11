import React from 'react'
import PropTypes from 'prop-types'
import PWCategoriesItem from './sub'

export default class PWCategories extends React.Component {
  static defaultProps = {
    initCategories: [
      {id: 0, category: 'cars'},
      {id: 1, category: 'nature'},
      {id: 2, category: 'Video_Games'},
      {id: 3, category: 'Landscapes'},
      {id: 4, category: 'animals'},
      {id: 5, category: 'anime'},
      {id: 6, category: 'mountains'},
      {id: 7, category: 'Clouds'},
      {id: 8, category: 'water'},
      {id: 9, category: 'Trees'},
      {id: 10, category: 'fantasy art'},
      {id: 11, category: 'Flowers'},
      {id: 12, category: 'outer space'},
      {id: 13, category: 'Abstract'},
      {id: 14, category: 'ocean'},
      {id: 15, category: 'citys'}
    ]
  }

  constructor(props) {
    super(props)

    this.state = {
      categories: this.props.initCategories
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

  _renderPWCategoriesItem() {
    return this.state.categories.map(item => {
      return <PWCategoriesItem key={item.id} {...item} />
    })
  }
}