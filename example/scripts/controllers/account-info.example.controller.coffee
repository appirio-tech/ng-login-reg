'use strict'

ctrl =  ->
  vm          = this
  vm.username = 'batman666'
  vm.email    = 'batman@wayneenterprises.com'

  vm.onSubmit = (e, data) ->
    vm.submittedData = data

  vm

ctrl.$inject = []

angular.module('example').controller 'AccountInfoExampleController', ctrl


