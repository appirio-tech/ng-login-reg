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

  states['registration-success'] =
    url         : '/registration-success'
    title       : 'registration-success'
    templateUrl : 'views/registration-success.example.html'

  states['forgot'] =
    url         : '/forgot'
    title       : 'forgot'
    templateUrl : 'views/forgot.example.html'

  states['reset'] =
    url         : '/reset'
    title       : 'reset'
    templateUrl : 'views/reset.example.html'

  states['ACCOUNT_PAGE'] =
    url         : '/account-page'
    controller  : 'AccountPageExampleController as vm'
    title       : 'Account Page'
    templateUrl : 'views/account-page.example.html'

  states['ACCOUNT_INFO'] =
    url         : '/account-info'
    controller  : 'AccountInfoExampleController as vm'
    title       : 'Account Info'
    templateUrl : 'views/account-info.example.html'

  states['PERSONAL_INFO'] =
    url         : '/personal-info'
    controller  : 'PersonalInfoExampleController as vm'
    title       : 'Personal Info'
    templateUrl : 'views/personal-info.example.html'

  states['SSO_LOGIN'] =
    url: '/sso-login/:org'
    templateUrl: 'views/sso-login.example.html'
    public: true

  states['SSO_CALLBACK'] =
    url: '/sso-callback?userJWTToken&status&message'
    templateUrl: 'views/sso-callback.example.html'
    public: true

  for key, state of states
    $stateProvider.state key, state

config.$inject = ['$stateProvider']

angular.module('example').config(config).run()


