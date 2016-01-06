'use strict'

`
import React, { PropTypes } from 'react'
import {reduxForm} from 'redux-form'
import template from './templates/personal-info.template'
import store from 'appirio-tech-client-app-layer'
`
fields = [
  'firstName'
  'lastName'
  'organization'
]

PersonalInfo = ({
  fields: {
    firstName
    lastName
    organization
  }
  handleSubmit
  submitting
}) ->
  <div>
    <pre>
      { JSON.stringify firstName, null, 2 }
    </pre>
    <header>
      <h4>my info</h4>
      <hr />
    </header>

    <main>
      <form>
        <h6>name</h6>

        <div className="flex">
          <div>
            <label>First Name</label>
            <input type="text" placeholder="Enter Name" {...firstName}/>
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Name" {...lastName}/>
          </div>
        </div>

        <label>Organization</label>
        <input type="text" placeholder="Enter Organization" {...organization}/>

        <button disabled={submitting} onClick={handleSubmit}>
          Submit
        </button>

      </form>
    </main>
  </div>

PersonalInfo.propTypes =
  fields: PropTypes.object.isRequired
  handleSubmit: PropTypes.func.isRequired
  submitting: PropTypes.bool.isRequired

decorateComponentWithForm = reduxForm({
    form: 'personalinfo'
    fields
  })

module.exports = decorateComponentWithForm(PersonalInfo)














