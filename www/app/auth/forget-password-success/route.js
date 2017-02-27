(function _AppAuthForgetPasswordSuccessRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.auth.forget-password-success', {
      url: '/forget-password-success',
      views: {
        'content@app.auth': {
          templateUrl: 'app/auth/forget-password-success/index.html',
          controller: 'AuthForgetPasswordSuccessController',
          controllerAs: 'auth'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/auth/forget-password-success/controller.js');
        }
      }
    });
  }

  angular.module('app.auth.forget-password-success').config(route);
}());
