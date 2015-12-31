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

  getInitialState: ->
    currentPassword: ''
    newPassword: ''

  # handleClick: ->
  #   this.setState
  #     checked: !this.state.checked
  #     label: this.state.label

  #   this.props.onChange? !this.state.checked
  currentPasswordChange: (e) ->
    this.setState currentPassword: e.target.value

  newPasswordChange: (e) ->
    this.setState newPassword: e.target.value

  onSubmit: (e) ->
    e.preventDefault()
    currentPassword = this.state.currentPassword.trim()
    newPassword     = this.state.newPassword.trim()

    if currentPassword && newPassword
      this.props.onSubmit?(e, this.state)

  render: ->
    saveDisabled = !this.state.currentPassword.length || !this.state.newPassword.length

    template
      username             : 'Alex Tran'
      email                : 'alex@appirio.com'
      saveDisabled         : saveDisabled
      currentPasswordChange: this.currentPasswordChange
      newPasswordChange    : this.newPasswordChange
      onSubmit             : this.onSubmit


module.exports = React.createClass element
