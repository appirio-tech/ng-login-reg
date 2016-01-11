'use strict'

`
import { PropTypes, createElement } from 'react'
import { reduxForm } from 'redux-form'
import AccountInfo from './account-info.element'
import { updatePassword } from 'appirio-tech-client-app-layer'
`

fields = [
  'currentPassword'
  'password'
]

submit = (values, dispatch) ->
  dispatch updatePassword(values)

  Promise.resolve {}

Container = (props) ->
  createElement AccountInfo,
    fields: props.fields
    submitting: props.submitting
    handleSubmit: props.handleSubmit(submit)

Container.propTypes =
  fields: PropTypes.object.isRequired
  handleSubmit: PropTypes.func.isRequired
  submitting: PropTypes.bool.isRequired

formProps =
  form: 'accountInfo'
  fields: fields

module.exports = reduxForm(formProps)(Container)