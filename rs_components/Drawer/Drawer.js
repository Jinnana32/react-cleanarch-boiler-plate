/**
* forked from https://github.com/balloob/react-sidebar
* TODO make css to scss then try to move transforms to scss, for dynamic variables
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './css/drawer.css'

const CANCEL_DISTANCE_ON_SCROLL = 20

class Drawer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // the detected width of the sidebar in pixels
      sidebarWidth: props.defaultSidebarWidth,

      // keep track of touching params
      touchIdentifier: null,
      touchStartX: null,
      touchStartY: null,
      touchCurrentX: null,
      touchCurrentY: null,

      // if touch is supported by the browser
      dragSupported: false,
    }

    this.outsideClicked = this.outsideClicked.bind(this)
    this.onTouchStart = this.onTouchStart.bind(this)
    this.onTouchMove = this.onTouchMove.bind(this)
    this.onTouchEnd = this.onTouchEnd.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.saveSidebarRef = this.saveSidebarRef.bind(this)
  }

  componentDidMount () {
    this.setState({
      dragSupported: typeof window === 'object' && 'ontouchstart' in window,
    })
    this.saveSidebarWidth()
  }

  componentDidUpdate () {
    // filter out the updates when we're touching
    if (!this.isTouching()) {
      this.saveSidebarWidth()
    }
  }

  onTouchStart (ev) {
    // filter out if a user starts swiping with a second finger
    if (!this.isTouching()) {
      const touch = ev.targetTouches[0]
      this.setState({
        touchIdentifier: touch.identifier,
        touchStartX: touch.clientX,
        touchStartY: touch.clientY,
        touchCurrentX: touch.clientX,
        touchCurrentY: touch.clientY,
      })
    }
  }

  onTouchMove (ev) {
    if (this.isTouching()) {
      const touches = ev.targetTouches
      for (const i in touches) {
        // we only care about the finger that we are tracking
        if (touches[i].identifier === this.state.touchIdentifier) {
          this.setState({
            touchCurrentX: touches[i].clientX,
            touchCurrentY: touches[i].clientY,
          })
          break
        }
      }
    }
  }

  onTouchEnd () {
    if (this.isTouching()) {
      // trigger a change to open if sidebar has been dragged beyond dragToggleDistance
      const touchWidth = this.touchSidebarWidth()

      if (this.props.open && touchWidth < this.state.sidebarWidth - this.props.dragToggleDistance ||
          !this.props.open && touchWidth > this.props.dragToggleDistance) {
        this.props.onSetOpen(!this.props.open)
      }

      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchStartY: null,
        touchCurrentX: null,
        touchCurrentY: null,
      })
    }
  }

  // This logic helps us prevents the user from sliding the sidebar horizontally
  // while scrolling the sidebar vertically. When a scroll event comes in, we're
  // cancelling the ongoing gesture if it did not move horizontally much.
  onScroll () {
    if (this.isTouching() && this.inCancelDistanceOnScroll()) {
      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchStartY: null,
        touchCurrentX: null,
        touchCurrentY: null,
      })
    }
  }

  // True if the on going gesture X distance is less than the cancel distance
  inCancelDistanceOnScroll () {
    let cancelDistanceOnScroll

    if (this.props.pullRight) {
      cancelDistanceOnScroll = Math.abs(this.state.touchCurrentX - this.state.touchStartX) <
                                        CANCEL_DISTANCE_ON_SCROLL
    } else {
      cancelDistanceOnScroll = Math.abs(this.state.touchStartX - this.state.touchCurrentX) <
                                        CANCEL_DISTANCE_ON_SCROLL
    }
    return cancelDistanceOnScroll
  }

  isTouching () {
    return this.state.touchIdentifier !== null
  }

  outsideClicked () {
    if (this.props.open) {
      this.props.onSetOpen(false)
    }
  }

  saveSidebarWidth () {
    const width = this.sidebar && this.sidebar.offsetWidth || this.props.defaultSidebarWidth

    if (width !== this.state.sidebarWidth) {
      this.setState({ sidebarWidth: width })
    }
  }

  saveSidebarRef (node) {
    this.sidebar = node
  }

  // calculate the sidebarWidth based on current touch info
  touchSidebarWidth () {
    // if the sidebar is open and start point of drag is inside the sidebar
    // we will only drag the distance they moved their finger
    // otherwise we will move the sidebar to be below the finger.
    if (this.props.pullRight) {
      if (this.props.open && window.innerWidth - this.state.touchStartX < this.state.sidebarWidth) {
        if (this.state.touchCurrentX > this.state.touchStartX) {
          return this.state.sidebarWidth + this.state.touchStartX - this.state.touchCurrentX
        }
        return this.state.sidebarWidth
      }
      return Math.min(window.innerWidth - this.state.touchCurrentX, this.state.sidebarWidth)
    }

    if (this.props.open && this.state.touchStartX < this.state.sidebarWidth) {
      if (this.state.touchCurrentX > this.state.touchStartX) {
        return this.state.sidebarWidth
      }
      return this.state.sidebarWidth - this.state.touchStartX + this.state.touchCurrentX
    }
    return Math.min(this.state.touchCurrentX, this.state.sidebarWidth)
  }

  render () {
    let drawerRootClass = 'drawer-root'
    let drawerClass = 'drawer'
    let outsideClass = 'outside'
    let contentClass = 'content'

    const rootProps = {}
    const sidebarStyle = { width: this.state.sidebarWidth }
    const contentStyle = {}

    const useTouch = this.state.dragSupported && this.props.touch
    const isTouching = this.isTouching()
    let dragHandleClass = 'drag-handle'
    let dragHandle

    if (!this.props.docked) {
      contentClass += ' fixed'
    }

    // if there's pahiram header, move drawer below
    if (this.props.withHeader && (!this.props.open || this.props.docked)) {
      drawerRootClass += ' with-header'
    }

    if (this.props.withHeader && this.props.open && !this.props.docked) {
      drawerClass += ' with-header'
      dragHandleClass += ' with-header'
      contentClass += ' with-header'
    }

    // sidebarStyle right/left
    if (this.props.pullRight) {
      drawerClass += ' right'

      sidebarStyle.transform = 'translateX(100%)'
      sidebarStyle.WebkitTransform = 'translateX(100%)'
    } else {
      sidebarStyle.transform = 'translateX(-100%)'
      sidebarStyle.WebkitTransform = 'translateX(-100%)'
    }

    if (isTouching) {
      const percentage = this.touchSidebarWidth() / this.state.sidebarWidth

      let contentMargin = percentage * this.state.sidebarWidth
      contentMargin = contentMargin < 0 ? 0 : contentMargin

      // slide open to what we dragged
      if (this.props.pullRight) {
        sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`
        sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`
        contentStyle.marginRight = `${contentMargin}px`
      } else {
        sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`
        sidebarStyle.WebkitTransform = `translateX(-${(1 - percentage) * 100}%)`
        contentStyle.marginLeft = `${contentMargin}px`
      }
    } else if (this.props.docked) {
      // slide open sidebar
      sidebarStyle.transform = 'translateX(0%)'
      sidebarStyle.WebkitTransform = 'translateX(0%)'

      if (this.props.pullRight) {
        contentStyle.marginRight = `${this.state.sidebarWidth}px`
      } else {
        contentStyle.marginLeft = `${this.state.sidebarWidth}px`
      }
    } else if (this.props.open) {
      // slide open sidebar
      sidebarStyle.transform = 'translateX(0%)'
      sidebarStyle.WebkitTransform = 'translateX(0%)'

      // show outside
      outsideClass += ' show'

      // make space on the left/right side of the content for the sidebar
      if (this.props.pullRight) {
        contentStyle.marginRight = `${this.state.sidebarWidth}px`
      } else {
        contentStyle.marginLeft = `${this.state.sidebarWidth}px`
      }
    }

    if (isTouching) {
      drawerClass += ' no-transition'
      contentClass += ' no-transition'
    }

    if (useTouch) {
      if (!this.props.open) {
        if (this.props.pullRight) {
          dragHandleClass += ' right'
        } else {
          dragHandleClass += ' left'
        }

        dragHandle = (
          <div className={ dragHandleClass }
               onTouchStart={ this.onTouchStart } onTouchMove={ this.onTouchMove }
               onTouchEnd={ this.onTouchEnd } onTouchCancel={ this.onTouchEnd } />)
      } else {
        rootProps.onTouchStart = this.onTouchStart
        rootProps.onTouchMove = this.onTouchMove
        rootProps.onTouchEnd = this.onTouchEnd
        rootProps.onTouchCancel = this.onTouchEnd
        rootProps.onScroll = this.onScroll
      }
    }

    return (
      <div>
        {
          !this.props.hide &&
          <div className={ drawerRootClass } { ...rootProps }>
            <div className={ drawerClass } style={ sidebarStyle } ref={ this.saveSidebarRef }>
              { this.props.content }
            </div>
            <div className={ outsideClass } onClick={ this.outsideClicked } />
            <div className={ contentClass } style={ contentStyle }>
              { dragHandle }
              { this.props.children }
            </div>
          </div>
        }
        { this.props.hide && this.props.children }
      </div>
    )
  }
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  docked: PropTypes.bool,
  withHeader: PropTypes.bool,
  open: PropTypes.bool,
  touch: PropTypes.bool,
  pullRight: PropTypes.bool,
  dragToggleDistance: PropTypes.number,
  onSetOpen: PropTypes.func,
  defaultSidebarWidth: PropTypes.number,
  hide: PropTypes.bool,
}

Drawer.defaultProps = {
  withHeader: false,
  docked: false,
  open: false,
  touch: true,
  pullRight: false,
  dragToggleDistance: 30,
  onSetOpen: () => {},
  styles: {},
  defaultSidebarWidth: 250,
}

export default Drawer
