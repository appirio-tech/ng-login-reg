'use strict'

config = ($stateProvider) ->
  states = {}

  states['login'] =
    url         : '/'
    title       : 'login'
    templateUrl : 'views/login.example.html'

  states['registration'] =
    url         : '/registration'
    title       : 'registration'
    templateUrl : 'views/registration.example.html'

  states['forgot'] =
    url         : '/forgot'
    title       : 'forgot'
    templateUrl : 'views/forgot.example.html'

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('example').config(config).run()


