'use strict'

ctrl =  ->
  vm      = this
  vm.data =
    firstName   : 'bat'
    lastName    : 'batman'
    organization: 'Wayne Enterprises'

  vm.onSubmit = (e, data) ->
    vm.submittedData = data

  vm

ctrl.$inject = []

angular.module('example').controller 'PersonalInfoExampleController', ctrl


