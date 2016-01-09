'use strict'

personalInfo = require '../elements/personal-info/personal-info.element'

directive = (reactDirective) ->
  reactDirective personalInfo

directive.$inject = ['reactDirective']

angular.module('appirio-tech-ng-login-reg').directive 'personalInfo', directive
