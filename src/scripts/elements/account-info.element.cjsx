'use strict'

React      = require 'react'
ReactDOM   = require 'react-dom'
classNames = require 'classnames'
template   = require './account-info.template'

element =
  propTypes:
    username: React.PropTypes.string
    email   : React.PropTypes.string
    onSubmit: React.PropTypes.func

  getInitialState: ->
    username       : this.props.username
    email          : this.props.email
    currentPassword: ''
    newPassword    : ''

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
      username             : this.state.username
      email                : this.state.email
      saveDisabled         : saveDisabled
      currentPasswordChange: this.currentPasswordChange
      newPasswordChange    : this.newPasswordChange
      onSubmit             : this.onSubmit

module.exports = React.createClass element
