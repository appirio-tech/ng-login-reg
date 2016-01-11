'use strict'

`
import React, { PropTypes, createElement } from 'react'
import { reduxForm } from 'redux-form'
import PersonalInfoElement from './personal-info.element'
import { loadProfile, updatePassword } from 'appirio-tech-client-app-layer'
`
fields = [
  'firstName'
  'lastName'
  'organization'
]

PersonalInfo = React.createClass
  propTypes:
    fields: PropTypes.object.isRequired
    handleSubmit: PropTypes.func.isRequired
    submitting: PropTypes.bool.isRequired

  componentWillMount: ->
    this.props.dispatch(loadProfile(40141336))

  submit: (values, dispatch) ->
    this.props.dispatch updateProfile(values)
    Promise.resolve(null)

  render: ->
    createElement PersonalInfoElement,
      fields: this.props.fields
      submitting: this.props.submitting
      handleSubmit: this.props.handleSubmit(this.submit)

mapStateToProps = (state) ->
  userId = state.user.id

  initialValues: state.entities.profiles[userId]

formProps =
  form: 'personalInfo'
  fields: fields

module.exports = reduxForm(formProps, mapStateToProps)(PersonalInfo)
