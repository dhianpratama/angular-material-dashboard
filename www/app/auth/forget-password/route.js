(function _AppAuthForgetPasswordRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.auth.forget-password', {
      url: '/forget-password',
      views: {
        'content@app.auth': {
          templateUrl: 'app/auth/forget-password/index.html',
          controller: 'AuthForgetPasswordController',
          controllerAs: 'auth'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/auth/forget-password/controller.js');
        }
      }
    });
  }

  angular.module('app.auth.forget-password').config(route);
}());
