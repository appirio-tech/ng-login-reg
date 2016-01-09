'use strict'

React        = require 'react'
template     = require './account-page.template'
AccountInfo  = require '../account-info/account-info.container'
PersonalInfo = require '../personal-info/personal-info.container'

AccountPageElement = ->
  template {
    AccountInfo
    PersonalInfo
  }

module.exports = AccountPageElement
