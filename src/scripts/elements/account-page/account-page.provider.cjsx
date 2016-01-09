'use strict'

React       = require 'react'
AccountPage = require './account-page.element'
Provider    = require('react-redux').Provider
store       = require('appirio-tech-client-app-layer').default

AccountPageProvider = ->
  <Provider store=store>
    <AccountPage />
  </Provider>

module.exports = AccountPageProvider
