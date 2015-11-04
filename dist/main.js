(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router', 'ngResource', 'app.constants', 'appirio-tech-ng-api-services', 'appirio-tech-ng-auth'];

  angular.module('appirio-tech-ng-login-reg', dependencies);

}).call(this);

angular.module("appirio-tech-ng-login-reg").run(["$templateCache", function($templateCache) {$templateCache.put("views/forgot-password.directive.html","<p class=\"success\">Thanks, we\'ve emailed you a reset link. Please check your inbox. If you still need help, please contact us at support@topcoder.com</p><form ng-submit=\"vm.submit()\" method=\"post\"><input type=\"text\" ng-model=\"vm.email\" required=\"required\" placeholder=\"email\" class=\"wide\"/><button type=\"submit\" class=\"action\">send reset link</button></form>");
$templateCache.put("views/login.directive.html","<p ng-class=\"{ invisible: !vm.error }\" class=\"error\">We can\'t find an account with the email / password you entered. Please try again.</p><form ng-submit=\"vm.submit()\" method=\"post\" class=\"flex column middle\"><input type=\"text\" ng-model=\"vm.username\" required=\"required\" placeholder=\"username\" class=\"wide\"/><input type=\"password\" ng-model=\"vm.password\" required=\"required\" placeholder=\"password\" class=\"wide\"/><button type=\"submit\" class=\"action\">login</button></form>");
$templateCache.put("views/registration.directive.html","<p ng-class=\"{ invisible: !vm.error }\" class=\"error\">{{ vm.errorMessage }}</p><form ng-submit=\"vm.submit()\"><div class=\"first-name\"><input type=\"text\" name=\"first-name\" ng-model=\"vm.firstName\" required=\"required\" placeholder=\"first name\" class=\"widest\"/></div><div class=\"last-name\"><input type=\"text\" name=\"last-name\" ng-model=\"vm.lastName\" required=\"required\" placeholder=\"last name\" class=\"widest\"/></div><div class=\"organization\"><input type=\"text\" name=\"organization\" ng-model=\"vm.organization\" required=\"required\" placeholder=\"organization\" class=\"widest\"/></div><hr/><input type=\"text\" name=\"username\" ng-model=\"vm.username\" required=\"required\" placeholder=\"username\" class=\"widest\"/><input type=\"password\" name=\"password\" ng-model=\"vm.password\" required=\"required\" placeholder=\"password\" class=\"widest\"/><input type=\"email\" name=\"email\" ng-model=\"vm.email\" required=\"required\" placeholder=\"email\" class=\"widest\"/><button type=\"submit\" class=\"action submit\">Register</button></form><p class=\"thanks\">Thanks for creating an account.  We\'ve sent you a confirmation link.  Please check your email and click the lick to activate your account. If you can\'t find the message please contact <a href=\"mailto:support@asp.com\">support@asp.com</a></p>");
$templateCache.put("views/reset-password.directive.html","<p class=\"success\">Your password has been updated.</p><form ng-submit=\"vm.submit()\" method=\"post\"><input type=\"password\" ng-model=\"vm.email\" required=\"required\" placeholder=\"New Password\" class=\"wide\"/><button type=\"submit\" class=\"action\">reset password</button></form>");
$templateCache.put("views/sso-callback.directive.html","<p>SSO Callback Directive. Now redirecting...</p>");
$templateCache.put("views/sso-login.directive.html","<p>SSO Login Directive. Now redirecting...</p>");}]);
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
        message: '@'
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
        org: '@'
      }
    };
  };

  angular.module('appirio-tech-ng-login-reg').directive('ssoLogin', directive);

}).call(this);

(function() {
  'use strict';
  var ForgotPasswordController;

  ForgotPasswordController = function($state) {
    var activate, vm;
    vm = this;
    activate = function() {
      return vm;
    };
    return activate();
  };

  ForgotPasswordController.$inject = ['$state'];

  angular.module('appirio-tech-ng-login-reg').controller('ForgotPasswordController', ForgotPasswordController);

}).call(this);

(function() {
  'use strict';
  var LoginController;

  LoginController = function($rootScope, $location, $state, AuthService, UserV3Service) {
    var activate, loginFailure, loginSuccess, vm;
    vm = this;
    vm.title = 'Login';
    vm.username = '';
    vm.password = '';
    vm.error = false;
    vm.submit = null;
    vm.submit = function() {
      var loginOptions;
      vm.error = false;
      loginOptions = {
        username: vm.username,
        password: vm.password,
        error: loginFailure,
        success: loginSuccess
      };
      return AuthService.login(loginOptions);
    };
    loginFailure = function(error) {
      return vm.error = true;
    };
    loginSuccess = function() {
      vm.error = false;
      return UserV3Service.loadUser().then(function(currentUser) {
        var preAuthState, urlToken;
        urlToken = $location.search();
        if (urlToken.retUrl) {
          return $location.path(urlToken.retUrl).replace();
        } else if (urlToken.retState) {
          return $state.go(urlToken.retState);
        } else if ($rootScope.preAuthState) {
          preAuthState = $rootScope.preAuthState;
          delete $rootScope.preAuthState;
          return $state.go(preAuthState);
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

  LoginController.$inject = ['$rootScope', '$location', '$state', 'AuthService', 'UserV3Service'];

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
    vm.submit = function() {
      var afterActivationURL, registerOptions;
      vm.error = false;
      afterActivationURL = $state.href('view-work-multiple', [], {
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
      return vm.errorMessage = error.data.result.content;
    };
    success = function() {
      return $state.go('view-work-multiple');
    };
    registerSuccess = function() {
      var loginOptions;
      vm.error = false;
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

  ResetPasswordController = function($state) {
    var activate, vm;
    vm = this;
    activate = function() {
      return vm;
    };
    return activate();
  };

  ResetPasswordController.$inject = ['$state'];

  angular.module('appirio-tech-ng-login-reg').controller('ResetPasswordController', ResetPasswordController);

}).call(this);

(function() {
  'use strict';
  var SSOCallbackController;

  SSOCallbackController = function($scope, UserV3Service) {
    var redirect, vm;
    vm = this;
    vm.token = $scope.token;
    vm.status = $scope.status;
    vm.message = $scope.message;
    redirect = function() {
      vm.error = false;
      return UserV3Service.loadUser().then(function(currentUser) {
        var urlToken;
        urlToken = $location.search();
        if (currentUser.role === 'customer') {
          return $state.go('view-work-multiple');
        } else if (currentUser.role === 'copilot') {
          return $state.go('copilot-projects');
        } else {
          return $state.go('home');
        }
      });
    };
    return vm;
  };

  SSOCallbackController.$inject = ['$scope', 'UserV3Service'];

  angular.module('appirio-tech-ng-login-reg').controller('SSOCallbackController', SSOCallbackController);

}).call(this);
