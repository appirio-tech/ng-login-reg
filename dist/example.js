angular.module("app.constants", [])

.constant("API_URL", "https://api.topcoder.com")

.constant("AVATAR_URL", "https://www.topcoder.com")

.constant("SUBMISSION_URL", "https://studio.topcoder.com")

.constant("AUTH0_CLIENT_ID", "abc123")

.constant("AUTH0_DOMAIN", "topcoder.auth0.com")

.constant("AUTH0_TOKEN_NAME", "userJWTToken")

.constant("AUTH0_REFRESH_TOKEN_NAME", "userRefreshJWTToken")

;
(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router', 'ngResource', 'app.constants', 'appirio-tech-ng-login-reg'];

  angular.module('example', dependencies);

}).call(this);

angular.module("example").run(["$templateCache", function($templateCache) {$templateCache.put("views/forgot.example.html","<login-reg-shell flow=FORGOT></login-reg-shell>");
$templateCache.put("views/login.example.html","<login-reg-shell flow=LOGIN></login-reg-shell>");
$templateCache.put("views/registration-success.example.html","<login-reg-shell flow=REGISTRATION_SUCCESS></login-reg-shell>");
$templateCache.put("views/registration.example.html","<login-reg-shell flow=REGISTRATION></login-reg-shell>");
$templateCache.put("views/reset.example.html","<login-reg-shell flow=RESET></login-reg-shell>");
$templateCache.put("views/sso-callback.example.html","<sso-callback token=abc status=def message=ghi auto=false></sso-callback>");
$templateCache.put("views/sso-login.example.html","<sso-login org=sfdc-aspdev callback-state=SSO_CALLBACK auto=false></sso-login>");}]);
(function() {
  'use strict';
  var config;

  config = function($stateProvider) {
    var key, results, state, states;
    states = {};
    states['login'] = {
      url: '/',
      title: 'login',
      templateUrl: 'views/login.example.html'
    };
    states['registration'] = {
      url: '/registration',
      title: 'registration',
      templateUrl: 'views/registration.example.html'
    };
    states['registration-success'] = {
      url: '/registration-success',
      title: 'registration-success',
      templateUrl: 'views/registration-success.example.html'
    };
    states['forgot'] = {
      url: '/forgot',
      title: 'forgot',
      templateUrl: 'views/forgot.example.html'
    };
    states['reset'] = {
      url: '/reset',
      title: 'reset',
      templateUrl: 'views/reset.example.html'
    };
    states['SSO_LOGIN'] = {
      url: '/sso-login/:org',
      templateUrl: 'views/sso-login.example.html',
      "public": true
    };
    states['SSO_CALLBACK'] = {
      url: '/sso-callback?userJWTToken&status&message',
      templateUrl: 'views/sso-callback.example.html',
      "public": true
    };
    results = [];
    for (key in states) {
      state = states[key];
      results.push($stateProvider.state(key, state));
    }
    return results;
  };

  config.$inject = ['$stateProvider'];

  angular.module('example').config(config).run();

}).call(this);
