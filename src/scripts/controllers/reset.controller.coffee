'use strict'

ResetPasswordController = ($state) ->
  vm = this

  activate = ->
    vm

  activate()

ResetPasswordController.$inject = [
  '$state'
]

angular.module('appirio-tech-ng-login-reg').controller 'ResetPasswordController', ResetPasswordController
