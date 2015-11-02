'use strict'

ForgotPasswordController = ($state) ->
  vm = this

  activate = ->
    vm

  activate()

ForgotPasswordController.$inject = [
  '$state'
]

angular.module('app.auth').controller 'ForgotPasswordController', ForgotPasswordController
