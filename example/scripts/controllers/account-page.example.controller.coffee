'use strict'

store = require('appirio-tech-client-app-layer').default

ctrl = ($scope) ->
  vm       = this
  vm.store = store
  vm.data  =
    username    : 'batman666'
    email       : 'batman@wayneenterprises.com'
    firstName   : 'bat'
    lastName    : 'batman'
    organization: 'Wayne Enterprises'

  vm.onSubmit =
    accountInfo: (e, data) ->
      vm.saveAccountInfoData = data

      $scope.$apply()

    personalInfo: (e, data) ->
      vm.savePersonalInfoData = data

      $scope.$apply()

  vm

ctrl.$inject = ['$scope']

angular.module('example').controller 'AccountPageExampleController', ctrl


