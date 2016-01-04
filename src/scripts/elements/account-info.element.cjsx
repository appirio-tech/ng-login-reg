'use strict'

React    = require 'react'
template = require './account-info.template'

element =
  propTypes:
    data: React.PropTypes.object
    onSubmit: React.PropTypes.func

  getInitialState: ->
    username       : this.props.data.username
    email          : this.props.data.email
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
      state                : this.state
      saveDisabled         : saveDisabled
      currentPasswordChange: this.currentPasswordChange
      newPasswordChange    : this.newPasswordChange
      onSubmit             : this.onSubmit

module.exports = React.createClass element
