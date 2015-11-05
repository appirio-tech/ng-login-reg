'use strict'

SSOLoginController = ($scope, $state, $window, AUTH0_DOMAIN, AUTH0_CLIENT_ID, API_URL) ->
  vm            = this
  vm.error      = false

  org           = $scope.org
  callbackState = $scope.callbackState
  auto          = $scope.auto != 'false'

  activate = ->
    if auto && org
      callbackUrl = $state.href callbackState, {}, { absolute: true }

      authUrlParts = [
        "https://#{AUTH0_DOMAIN}/authorize?"
        "response_type=token"
        "&client_id=#{AUTH0_CLIENT_ID}"
        "&connection=#{org}"
        "&redirect_uri=#{API_URL}/pub/callback.html"
        "&state=#{encodeURIComponent(callbackUrl)}"
        "&scope=openid%20profile%20offline_access"
        "&device=device"
      ]

      authUrl = authUrlParts.join('')
      console.log authUrl

      $window.location.href = authUrl;

    else
      vm.error = 'No organization. Oh no!'

  activate()

  vm

SSOLoginController.$inject = [
  '$scope'
  '$state'
  '$window'
  'AUTH0_DOMAIN'
  'AUTH0_CLIENT_ID'
  'API_URL'
]

angular.module('appirio-tech-ng-login-reg').controller 'SSOLoginController', SSOLoginController


