(function _AppAuthLoginRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.auth.login', {
      url: '/login',
      views: {
        'content@app.auth': {
          templateUrl: 'app/auth/login/index.html',
          controller: 'AuthLoginController',
          controllerAs: 'auth'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/auth/login/controller.js');
        }
      }
    });
  }

  angular.module('app.auth.login').config(route);
}());
