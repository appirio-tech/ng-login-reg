'use strict'

SSOLoginController = ($scope) ->
  vm     = this
  vm.org = $scope.org

  vm

SSOLoginController.$inject = [
  '$scope'
]

angular.module('appirio-tech-ng-login-reg').controller 'SSOLoginController', SSOLoginController


