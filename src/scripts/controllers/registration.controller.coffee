'use strict'

RegistrationController = ($state, $scope, AuthService, UserV3Service) ->
  vm                        = this
  vm.title                  = 'Register'
  vm.username               = ''
  vm.password               = ''
  vm.error                  = false
  vm.errorMessage           = 'Error Creating User'
  vm.submit                 = null
  vm.loading                = false

  vm.submit = ->
    vm.error = false
    vm.loading = true

    config =
      param:
        handle            : vm.username
        email             : vm.email
        utmSource         : 'connect'
        credential        :
          password        : vm.password
      options:
        afterActivationURL: $state.href('login', { activated: true }, { absolute: true })

    UserV3Service.createUser(config).then(registerSuccess, registerError)

  registerError = (error) ->
    $scope.$apply ->
      vm.error        = true
      vm.loading      = false
      vm.errorMessage = error.message

  registerSuccess = ->
    vm.error   = false
    vm.loading = false
    $state.go 'registration-success'

  activate = ->
    vm

  activate()

RegistrationController.$inject = [
  '$state'
  '$scope'
  'AuthService'
  'UserV3Service'
]

angular.module('appirio-tech-ng-login-reg').controller 'RegistrationController', RegistrationController
