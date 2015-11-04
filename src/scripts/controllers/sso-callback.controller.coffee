'use strict'

SSOCallbackController = ($scope, UserV3Service) ->
  vm         = this
  vm.token   = $scope.token
  vm.status  = $scope.status
  vm.message = $scope.message

  redirect = ->
    vm.error = false

    UserV3Service.loadUser().then (currentUser) ->
      urlToken = $location.search()

      if currentUser.role == 'customer'
        $state.go 'view-work-multiple'
      else if currentUser.role == 'copilot'
        $state.go 'copilot-projects'
      else
        $state.go 'home'

  vm

SSOCallbackController.$inject = [
  '$scope'
  'UserV3Service'
]

angular.module('appirio-tech-ng-login-reg').controller 'SSOCallbackController', SSOCallbackController


