'use strict'

store = require '../store'

ctrl = ($scope) ->
  vm       = this
  vm.store = store
  vm

ctrl.$inject = ['$scope']

angular.module('example').controller 'AccountPageExampleController', ctrl


