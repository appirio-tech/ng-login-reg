'use strict'

LoginController = ($rootScope, $location, $state, $scope, $stateParams, AuthService, UserV3Service) ->
  vm           = this
  vm.title     = 'Login'
  vm.username  = ''
  vm.password  = ''
  vm.error     = false
  vm.submit    = null
  vm.loading   = false
  vm.activated = $stateParams.activated

  vm.submit = ->
    vm.error   = false
    vm.loading = true

    options =
      username: vm.username
      password: vm.password

    AuthService.login(options).then(loginSuccess, loginFailure)

  loginFailure = (error) ->
    $scope.$apply ->
      vm.error   = true
      vm.loading = false

  loginSuccess = ->
    UserV3Service.loadUser().then (currentUser) ->
      urlToken = $location.search()

      if urlToken.retUrl
        $location.path(urlToken.retUrl).replace()
      else if urlToken.retState
        $state.go(urlToken.retState)
      else if $rootScope.preAuthState
        preAuthState = $rootScope.preAuthState
        preAuthParams = $rootScope.preAuthParams

        delete $rootScope.preAuthState
        delete $rootScope.preAuthParams

        $state.go preAuthState, preAuthParams
      else if currentUser.role == 'customer'
        $state.go 'view-work-multiple'
      else if currentUser.role == 'copilot'
        $state.go 'copilot-projects'
      else
        $state.go 'home'

  activate = ->
    vm

  activate()

LoginController.$inject = [
  '$rootScope'
  '$location'
  '$state'
  '$scope'
  '$stateParams'
  'AuthService'
  'UserV3Service'
]

angular.module('appirio-tech-ng-login-reg').controller 'LoginController', LoginController


