'use strict'

AccountPageProvider = require '../elements/account-page/account-page.provider'

directive = (reactDirective) ->
  reactDirective AccountPageProvider

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-login-reg').directive 'accountPage', directive
