(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router', 'ngResource', 'app.constants', 'appirio-tech-ng-api-services', 'appirio-tech-ng-auth'];

  angular.module('appirio-tech-ng-login-reg', dependencies);

}).call(this);

angular.module("appirio-tech-ng-login-reg").run(["$templateCache", function($templateCache) {$templateCache.put("views/forgot-password.directive.html","<div ng-show=!vm.success><h1>forgot password</h1><p class=secondary>Enter your email and we\'ll send you a link to reset your password.</p><p ng-show=vm.error class=error>{{ vm.error }}</p><form ng-submit=vm.submit()><input type=email ng-model=vm.email required placeholder=email autofocus class=widest><button type=submit class=action>get reset link</button></form></div><p ng-show=vm.success class=success>Thanks, we\'ve emailed you a reset link. Please check your inbox. If you still need help, please contact us at <a href=mailto:support@topcoder.com>support@topcoder.com</a></p>");
$templateCache.put("views/login-reg-shell.directive.html","<header class=\"flex center middle\"><img src=/images/asp.svg></header><main ng-if=\"vm.flow == \'LOGIN\'\" class=\"light-bg elevated-bottom\"><h1>welcome back to appirio</h1><p class=secondary>Let\'s start building your app. Login or create your account below to begin.</p><login></login></main><footer ng-if=\"vm.flow == \'LOGIN\'\"><p>Don\'t have an account? <a ui-sref=register>Register Now</a></p></footer><main ng-if=\"vm.flow == \'REGISTRATION\'\" class=\"light-bg elevated-bottom\"><h1>welcome to appirio</h1><p class=secondary>Let\'s start building your app. Create your account below to begin.</p><registration></registration></main><footer ng-if=\"vm.flow == \'REGISTRATION\'\"><p>Already have an account? <a ui-sref=login>Login Here</a></p></footer><main ng-if=\"vm.flow == \'REGISTRATION_SUCCESS\'\" class=\"light-bg elevated-bottom\"><p>Thanks for creating an account. We\'ve sent you a confirmation link. Please check your email and click the link to activate your account. If you can\'t find the message please contact <a href=mailto:support@asp.com>support@asp.com</a></p></main><main ng-if=\"vm.flow == \'FORGOT\'\" class=\"light-bg elevated-bottom\"><forgot-password></forgot-password></main><footer ng-if=\"vm.flow == \'FORGOT\'\"><p><a ui-sref=login>Back to Login</a></p></footer><main ng-if=\"vm.flow == \'RESET\'\" class=\"light-bg elevated-bottom\"><reset-password></reset-password></main><footer ng-if=\"vm.flow == \'RESET\'\"><p><a ui-sref=login>Back to Login</a></p></footer>");
$templateCache.put("views/login.directive.html","<p ng-class=\"{ hide: !vm.error }\" class=\"error transition\">We can\'t find an account with the email / password you entered. Please try again.</p><div ng-if=vm.activated class=thankyou><p>Thank you for activating your account. Please sign in below.</p></div><loader ng-if=vm.loading></loader><form ng-submit=vm.submit() method=post class=\"flex column middle\"><input type=text ng-model=vm.username required placeholder=username autofocus class=widest><input type=password ng-model=vm.password required placeholder=password class=widest><div class=forgot><a ui-sref=FORGOT_PASSWORD>Forgot Password?</a></div><button type=submit class=action>login</button></form>");
$templateCache.put("views/registration.directive.html","<p ng-class=\"{ hide: !vm.error }\" class=error>{{ vm.errorMessage }}</p><loader ng-if=vm.loading></loader><form ng-submit=vm.submit()><div class=first-name><input type=text name=first-name ng-model=vm.firstName required placeholder=\"First Name\" maxlength=64 autofocus class=widest></div><div class=last-name><input type=text name=last-name ng-model=vm.lastName required placeholder=\"Last Name\" maxlength=64 class=widest></div><div class=organization><input type=text name=organization ng-model=vm.organization required placeholder=Organization class=widest></div><hr><div class=username><input type=text name=username ng-model=vm.username required placeholder=Username class=widest><div class=\"tooltip elevated\"><div class=arrow></div><p>Your username is public, please pick one that uses letters, numbers, and these special characters: (-_.{}[])</p></div></div><div class=password><input type=password name=password ng-model=vm.password required placeholder=Password class=widest><div class=\"tooltip elevated\"><div class=arrow></div><p class=header>Your password must be:</p><ul class=use><li><p>At least 8 characters long.</p></li><li><p>At least 1 letter (A-Z)</p></li><li><p>At least 1 number (0-9) or symbol (!?-_.,;)</p></li></ul></div></div><input type=email name=email ng-model=vm.email required placeholder=Email class=widest><button type=submit class=\"action submit\">Register</button></form>");
$templateCache.put("views/reset-password.directive.html","<div ng-show=!vm.success><h1>reset password</h1><p class=secondary>Please enter your new password.</p><p ng-show=vm.error class=error>{{ vm.error }}</p><form ng-submit=vm.submit()><input type=password ng-model=vm.password required placeholder=\"New Password\" autofocus class=widest><button type=submit class=action>reset password</button></form></div><p ng-show=vm.success class=success>Your password has been updated.</p>");
$templateCache.put("views/sso-callback.directive.html","<p>SSO Callback Directive. Now redirecting...</p>");
$templateCache.put("views/sso-login.directive.html","<p>SSO Login Directive. Now redirecting...</p>");}]);
(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/login-reg-shell.directive.html',
      controller: 'LoginRegShellController as vm',
      scope: {
        flow: '@'
      }
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('loginRegShell', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/forgot-password.directive.html',
      controller: 'ForgotPasswordController as vm',
      scope: true
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('forgotPassword', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/login.directive.html',
      controller: 'LoginController as vm',
      scope: true
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('login', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/registration.directive.html',
      controller: 'RegistrationController as vm',
      scope: true
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('registration', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/reset-password.directive.html',
      controller: 'ResetPasswordController as vm',
      scope: true
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('resetPassword', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/sso-callback.directive.html',
      controller: 'SSOCallbackController as vm',
      scope: {
        token: '@',
        status: '@',
        message: '@',
        auto: '@'
      }
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('ssoCallback', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/sso-login.directive.html',
      controller: 'SSOLoginController as vm',
      scope: {
        org: '@',
        callbackState: '@',
        auto: '@'
      }
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('ssoLogin', directive);

}).call(this);

(function() {
  'use strict';
  var ForgotPasswordController;

  ForgotPasswordController = function($stateParams, AuthService) {
    var failure, success, vm;
    vm = this;
    vm.email = '';
    vm.error = '';
    vm.success = false;
    vm.submit = function() {
      vm.error = false;
      return AuthService.sendResetEmail(vm.email).then(success)["catch"](failure);
    };
    success = function() {
      return vm.success = true;
    };
    failure = function(res) {
      return vm.error = res.result.content;
    };
    return vm;
  };

  ForgotPasswordController.$inject = ['$stateParams', 'AuthService'];

  angular.module('appirio-tech-ng-login-reg').controller('ForgotPasswordController', ForgotPasswordController);

}).call(this);

(function() {
  'use strict';
  var LoginController;

  LoginController = function($rootScope, $location, $state, $stateParams, AuthService, UserV3Service) {
    var activate, loginFailure, loginSuccess, vm;
    vm = this;
    vm.title = 'Login';
    vm.username = '';
    vm.password = '';
    vm.error = false;
    vm.submit = null;
    vm.loading = false;
    vm.activated = $stateParams.activated;
    vm.submit = function() {
      var loginOptions;
      vm.error = false;
      vm.loading = true;
      loginOptions = {
        username: vm.username,
        password: vm.password,
        error: loginFailure,
        success: loginSuccess
      };
      return AuthService.login(loginOptions);
    };
    loginFailure = function(error) {
      vm.error = true;
      return vm.loading = false;
    };
    loginSuccess = function() {
      vm.error = false;
      vm.loading = false;
      return UserV3Service.loadUser().then(function(currentUser) {
        var preAuthParams, preAuthState, urlToken;
        urlToken = $location.search();
        if (urlToken.retUrl) {
          return $location.path(urlToken.retUrl).replace();
        } else if (urlToken.retState) {
          return $state.go(urlToken.retState);
        } else if ($rootScope.preAuthState) {
          preAuthState = $rootScope.preAuthState;
          preAuthParams = $rootScope.preAuthParams;
          delete $rootScope.preAuthState;
          delete $rootScope.preAuthParams;
          return $state.go(preAuthState, preAuthParams);
        } else if (currentUser.role === 'customer') {
          return $state.go('view-work-multiple');
        } else if (currentUser.role === 'copilot') {
          return $state.go('copilot-projects');
        } else {
          return $state.go('home');
        }
      });
    };
    activate = function() {
      return vm;
    };
    return activate();
  };

  LoginController.$inject = ['$rootScope', '$location', '$state', '$stateParams', 'AuthService', 'UserV3Service'];

  angular.module('appirio-tech-ng-login-reg').controller('LoginController', LoginController);

}).call(this);

(function() {
  'use strict';
  var RegistrationController;

  RegistrationController = function($state, AuthService, UserV3Service) {
    var activate, registerError, registerSuccess, success, vm;
    vm = this;
    vm.title = 'Register';
    vm.username = '';
    vm.password = '';
    vm.error = false;
    vm.errorMessage = 'Error Creating User';
    vm.submit = null;
    vm.loading = false;
    vm.submit = function() {
      var afterActivationURL, registerOptions;
      vm.error = false;
      vm.loading = true;
      afterActivationURL = $state.href('login', {
        activated: true
      }, {
        absolute: true
      });
      registerOptions = {
        handle: vm.username,
        password: vm.password,
        email: vm.email,
        afterActivationURL: afterActivationURL
      };
      return UserV3Service.createUser(registerOptions, registerSuccess, registerError);
    };
    registerError = function(error) {
      vm.error = true;
      vm.loading = false;
      return vm.errorMessage = error.data.result.content;
    };
    success = function() {
      return $state.go('view-work-multiple');
    };
    registerSuccess = function() {
      var loginOptions;
      vm.error = false;
      vm.loading = false;
      $state.go('registration-success');
      loginOptions = {
        username: vm.username,
        password: vm.password,
        success: success
      };
      return AuthService.login(loginOptions);
    };
    activate = function() {
      return vm;
    };
    return activate();
  };

  RegistrationController.$inject = ['$state', 'AuthService', 'UserV3Service'];

  angular.module('appirio-tech-ng-login-reg').controller('RegistrationController', RegistrationController);

}).call(this);

(function() {
  'use strict';
  var ResetPasswordController;

  ResetPasswordController = function($stateParams, $state, AuthService) {
    var failure, handle, success, token, vm;
    vm = this;
    vm.password = '';
    vm.success = false;
    vm.error = '';
    token = $stateParams.token;
    handle = $stateParams.handle;
    vm.submit = function() {
      vm.error = false;
      return AuthService.resetPassword(handle, token, vm.password).then(success)["catch"](failure);
    };
    success = function() {
      vm.success = true;
      return $state.go('login', {
        passwordReset: true
      });
    };
    failure = function(res) {
      return vm.error = res.data.result.content;
    };
    return vm;
  };

  ResetPasswordController.$inject = ['$stateParams', '$state', 'AuthService'];

  angular.module('appirio-tech-ng-login-reg').controller('ResetPasswordController', ResetPasswordController);

}).call(this);

(function() {
  'use strict';
  var SSOCallbackController;

  SSOCallbackController = function($scope, $state, TokenService, UserV3Service) {
    var activate, auto, message, status, token, vm;
    vm = this;
    token = $scope.token;
    status = $scope.status;
    message = $scope.message;
    auto = $scope.auto !== 'false';
    activate = function() {
      if (token) {
        TokenService.setAppirioJWT(token);
      }
      if (auto) {
        return UserV3Service.loadUser().then(function(currentUser) {
          if (currentUser.role === 'customer') {
            return $state.go('view-work-multiple');
          } else if (currentUser.role === 'copilot') {
            return $state.go('copilot-projects');
          } else {
            return $state.go('home');
          }
        });
      }
    };
    activate();
    return vm;
  };

  SSOCallbackController.$inject = ['$scope', '$state', 'TokenService', 'UserV3Service'];

  angular.module('appirio-tech-ng-login-reg').controller('SSOCallbackController', SSOCallbackController);

}).call(this);

(function() {
  'use strict';
  var SSOLoginController;

  SSOLoginController = function($scope, $state, $window, AUTH0_DOMAIN, AUTH0_CLIENT_ID, API_URL) {
    var activate, auto, callbackState, org, vm;
    vm = this;
    vm.error = false;
    org = $scope.org;
    callbackState = $scope.callbackState;
    auto = $scope.auto !== 'false';
    activate = function() {
      var authUrl, authUrlParts, callbackUrl;
      if (auto && org) {
        callbackUrl = $state.href(callbackState, {}, {
          absolute: true
        });
        authUrlParts = ["https://" + AUTH0_DOMAIN + "/authorize?", "response_type=token", "&client_id=" + AUTH0_CLIENT_ID, "&connection=" + org, "&redirect_uri=" + API_URL + "/pub/callback.html", "&state=" + (encodeURIComponent(callbackUrl)), "&scope=openid%20profile%20offline_access", "&device=device"];
        authUrl = authUrlParts.join('');
        console.log(authUrl);
        return $window.location.href = authUrl;
      } else {
        return vm.error = 'No organization. Oh no!';
      }
    };
    activate();
    return vm;
  };

  SSOLoginController.$inject = ['$scope', '$state', '$window', 'AUTH0_DOMAIN', 'AUTH0_CLIENT_ID', 'API_URL'];

  angular.module('appirio-tech-ng-login-reg').controller('SSOLoginController', SSOLoginController);

}).call(this);

(function() {
  'use strict';
  var LoginRegShellController;

  LoginRegShellController = function($scope) {
    var activate, vm;
    vm = this;
    vm.flow = $scope.flow || 'LOGIN';
    activate = function() {
      return vm;
    };
    return activate();
  };

  LoginRegShellController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-login-reg').controller('LoginRegShellController', LoginRegShellController);

}).call(this);
