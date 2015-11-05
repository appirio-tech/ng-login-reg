'use strict'

directive = ->
  restrict        : 'E'
  templateUrl     : 'views/sso-login.directive.html'
  controller      : 'SSOLoginController as vm'
  scope           :
    org           : '@'
    callbackState : '@'
    auto          : '@'

angular.module('appirio-tech-ng-login-reg').directive 'ssoLogin', directive
