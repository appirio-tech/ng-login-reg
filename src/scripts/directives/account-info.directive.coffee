'use strict'

accountInfo = require '../elements/account-info.element'

directive = (reactDirective) ->
  reactDirective accountInfo

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-login-reg').directive 'accountInfo', directive
