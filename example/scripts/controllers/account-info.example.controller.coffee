'use strict'

ctrl =  ->
  vm      = this
  vm.data =
    username: 'batman666'
    email   : 'batman@wayneenterprises.com'

  vm.onSubmit = (e, data) ->
    vm.submittedData = data

  vm

ctrl.$inject = []

angular.module('example').controller 'AccountInfoExampleController', ctrl


