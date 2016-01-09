'use strict'

`
import React, { PropTypes, createElement } from 'react'
import { reduxForm } from 'redux-form'
import AccountInfo from './account-info.element'
import { updatePassword } from 'appirio-tech-client-app-layer'
`
fields = [
  'currentPassword'
  'password'
]

Container = React.createClass
  propTypes:
    fields: PropTypes.object.isRequired
    handleSubmit: PropTypes.func.isRequired
    submitting: PropTypes.bool.isRequired

  submit: (values, dispatch) ->
    this.props.dispatch updatePassword(values)
    Promise.resolve(null)

  render: ->
    createElement AccountInfo,
      fields: this.props.fields
      submitting: this.props.submitting
      handleSubmit: this.props.handleSubmit(this.submit)

formProps =
  form: 'accountInfo'
  fields: fields

module.exports = reduxForm(formProps)(Container)














