'use strict'

LoginController = ($rootScope, $location, $state, AuthService, UserV3Service) ->
  var vm      = this
  vm.title    = 'Login'
  vm.username = ''
  vm.password = ''
  vm.error    = false
  vm.submit   = null

  vm.submit = ->
    vm.error = false

    loginOptions =
      username: vm.username
      password: vm.password
      error   : loginFailure
      success : loginSuccess

    AuthService.login loginOptions

  loginFailure = (error) ->
    vm.error = true

  loginSuccess = ->
    vm.error = false;

    UserV3Service.loadUser().then (currentUser) ->
      urlToken = $location.search()

      if urlToken.retUrl
        $location.path(urlToken.retUrl).replace()
      else if urlToken.retState
        $state.go(urlToken.retState)
      else if $rootScope.preAuthState
        preAuthState = $rootScope.preAuthState

        delete $rootScope.preAuthState

        $state.go preAuthState
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
  'AuthService'
  'UserV3Service'
]

angular.module('ng-login-reg').controller 'LoginController', LoginController


