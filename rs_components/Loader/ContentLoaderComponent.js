import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/style.css'
import ContentLoader, {
  Facebook,
  Instagram,
  List,
  Code,
  BulletList
} from 'react-content-loader'

class SkeletalLoader extends Component {
  render () {
    const {
      className,
      radius,
      circleSizeObject,
      boxSizeObject,
      titleSizeObject,
      shapeCircle,
      shapeBox,
      showFacebookComponent,
      showInstagramComponent,
      showBulletListComponent,
      showCodeComponent,
      showSizeContent,
      showListComponent,
      shapeTitle,
      shapeCodeComponent,
    } = this.props

    return (
      <div className = { `${ className }` }>
      {
        shapeBox &&
        <ContentLoader
          width = { boxSizeObject && boxSizeObject.width }
          height = { boxSizeObject && boxSizeObject.height }
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          >
      		<rect
            width={ boxSizeObject && boxSizeObject.width }
            height={ boxSizeObject && boxSizeObject.height } />
        </ContentLoader>
      }
      {
        shapeTitle &&
        <ContentLoader
          height={ titleSizeObject && titleSizeObject.height }
      		width={ titleSizeObject && titleSizeObject.width }
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          >
          <rect
            width = { titleSizeObject && titleSizeObject.width }
            height = { titleSizeObject && titleSizeObject.height } />
        </ContentLoader>
      }
      {
        shapeCircle &&
        <ContentLoader
          height = { circleSizeObject && circleSizeObject.height }
          width = { circleSizeObject && circleSizeObject.width }
          speed={2}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          >
      	   <circle r = { radius } />
        </ContentLoader>
        }
        {
          showFacebookComponent &&
          <Facebook
            width = { '100%' }
            height = { '100%' }/>
        }

        {
          showInstagramComponent &&
          <Instagram
            width = { '100%' }
            height = { '100%' }/>
        }

        {
          showCodeComponent &&
          <Code
            width = { '100%' }
            height = { '100%' }
            />
        }
        {
          showBulletListComponent &&
          <BulletList
            width = { '100%' }
            height = { '100%' }
            />
        }
        {
          showListComponent &&
          <List
            width = { '100%' }
            height = { '100%' }
            />
        }
      </div>
    )
  }
}

SkeletalLoader.propTypes = {
  circleSizeObject : PropTypes.object,
  boxSizeObject: PropTypes.object,
  titleSizeObject: PropTypes.object,
  radius : PropTypes.number,
  className : PropTypes.string,
  shapeCircle : PropTypes.bool,
  showFacebookComponent : PropTypes.bool,
  shapeBox : PropTypes.bool,
  showInstagramComponent : PropTypes.bool,
  showCodeComponent : PropTypes.bool,
  showBulletListComponent : PropTypes.bool,
  showListComponent : PropTypes.bool,
  shapeTitle : PropTypes.bool,
}

SkeletalLoader.defaultProps = {
  showListComponent : false,
  showFacebookComponent : false,
  showInstagramComponent : false,
  showCodeComponent : false,
  showBulletListComponent : false,
  shapeTitle : false,
  shapeCircle : false,
  shapeBox : false,
  boxSizeObject: {
    width: 0,
    height : 0
  },
  circleSizeObject: {
    width: 0,
    height : 0
  },
  titleSizeObject: {
    width: 0,
    height : 0
  },
}
export default SkeletalLoader
