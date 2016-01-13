'use strict'

if process.env.ENV == 'MOCK'
  store = require('../store/mock-store').default
else
  store = require('appirio-tech-client-app-layer').default

ctrl =  ->
  vm       = this
  vm.store = store
  vm.data  =
    firstName   : 'bat'
    lastName    : 'batman'
    organization: 'Wayne Enterprises'

  vm.onSubmit = (e, data) ->
    vm.submittedData = data

  vm

ctrl.$inject = []

angular.module('example').controller 'PersonalInfoExampleController', ctrl


