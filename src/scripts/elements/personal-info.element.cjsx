'use strict'

React      = require 'react'
ReactDOM   = require 'react-dom'
template   = require './personal-info.template'

element =
  propTypes:
    data: React.PropTypes.object
    onSubmit: React.PropTypes.func

  getInitialState: ->
    firstName   : this.props.data.firstName
    lastName    : this.props.data.lastName
    organization: this.props.data.organization

  firstNameChange: (e) ->
    this.setState firstName: e.target.value

  lastNameChange: (e) ->
    this.setState lastName: e.target.value

  organizationChange: (e) ->
    this.setState organization: e.target.value

  onSubmit: (e) ->
    e.preventDefault()

    firstName    = this.state.firstName.trim()
    lastName     = this.state.lastName.trim()
    organization = this.state.organization.trim()

    if firstName && lastName && organization
      this.props.onSubmit?(e, this.state)

  render: ->
    saveDisabled = false
    saveDisabled ||= !this.state.firstName.length
    saveDisabled ||= !this.state.lastName.length
    saveDisabled ||= !this.state.organization.length

    template
      state             : this.state
      saveDisabled      : saveDisabled
      firstNameChange   : this.firstNameChange
      lastNameChange    : this.lastNameChange
      organizationChange: this.organizationChange
      onSubmit          : this.onSubmit

module.exports = React.createClass element
