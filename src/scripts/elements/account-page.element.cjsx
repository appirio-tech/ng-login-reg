'use strict'

React        = require 'react'
template     = require './templates/account-page.template'
AccountInfo  = require './account-info.element'
PersonalInfo = require './personal-info.element'

element =
  propTypes:
    data    : React.PropTypes.object
    onSubmit: React.PropTypes.object

  getInitialState: ->
    data    : this.props.data
    onSubmit: this.props.onSubmit

  render: ->
    template
      AccountInfo : AccountInfo
      PersonalInfo: PersonalInfo
      data        : this.state.data
      onSubmit    : this.state.onSubmit

module.exports = React.createClass element
