import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {

  state = {
    visible: ''
  }

  componentDidMount() {
    this._timer = null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== '' && this.state.visible === '') {
      this.setTimer()
      this.setState({visible: 'show'})
    }
  }

  componentWillUnmount() {
    clearTimeout(this._timer)
  }

  setTimer() {
    this._timer = setTimeout(() => {
      this.setState({visible: ''})
      this._timer = null
    }, 3000)
  }

  render() {
    return (
      <div className={"message message-"+ this.props.type + " " + this.state.visible}>
        {this.props.text}
      </div>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Message
