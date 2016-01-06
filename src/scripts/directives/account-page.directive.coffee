'use strict'

accountPage = require '../elements/account-page.element'

directive = (reactDirective) ->
  reactDirective accountPage

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-login-reg').directive 'accountPage', directive
