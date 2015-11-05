angular.module("app.constants", [])

.constant("API_URL", "https://api.topcoder-dev.com")

.constant("AVATAR_URL", "https://www.topcoder.com")

.constant("SUBMISSION_URL", "https://studio.topcoder.com")

.constant("AUTH0_CLIENT_ID", "JFDo7HMkf0q2CkVFHojy3zHWafziprhT")

.constant("AUTH0_DOMAIN", "topcoder-dev.auth0.com")

.constant("AUTH0_TOKEN_NAME", "userJWTToken")

.constant("AUTH0_REFRESH_TOKEN_NAME", "userRefreshJWTToken")

;
(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router', 'ngResource', 'app.constants', 'appirio-tech-ng-login-reg'];

  angular.module('example', dependencies);

}).call(this);

angular.module("example").run(["$templateCache", function($templateCache) {$templateCache.put("views/forgot.example.html","<forgot-password></forgot-password>");
$templateCache.put("views/login.example.html","<login></login>");
$templateCache.put("views/registration.example.html","<registration></registration>");
$templateCache.put("views/reset.example.html","<reset-password></reset-password>");
$templateCache.put("views/sso-callback.example.html","<sso-callback token=\"abc\" status=\"def\" message=\"ghi\" auto=\"false\"></sso-callback>");
$templateCache.put("views/sso-login.example.html","<sso-login org=\"sfdc-aspdev\" callback-state=\"SSO_CALLBACK\" auto=\"false\"></sso-login>");}]);
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
