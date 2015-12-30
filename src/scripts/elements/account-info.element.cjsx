'use strict'

React      = require 'react'
ReactDOM   = require 'react-dom'
classNames = require 'classnames'
template   = require './account-info.template'

element =
  # propTypes:
  #   checked : React.PropTypes.bool
  #   label   : React.PropTypes.string
  #   onChange: React.PropTypes.func

  # getInitialState: ->
  #   checked: this.props.checked
  #   label: this.props.label

  # handleClick: ->
  #   this.setState
  #     checked: !this.state.checked
  #     label: this.state.label

  #   this.props.onChange? !this.state.checked

  render: ->
    template
      username: 'Alex Tran'
      email: 'alex@appirio.com'


module.exports = React.createClass element