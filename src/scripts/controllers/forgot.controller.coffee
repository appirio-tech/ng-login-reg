'use strict'

ForgotPasswordController = ($state) ->
  vm = this

  activate = ->
    vm

  activate()

ForgotPasswordController.$inject = [
  '$state'
]

angular.module('appirio-tech-ng-login-reg').controller 'ForgotPasswordController', ForgotPasswordController
