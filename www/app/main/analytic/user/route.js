(function _AppMainAnalyticUserRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.analytic.user', {
      url: '/user',
      views: {
        'content@app.main.analytic': {
          templateUrl: 'app/main/analytic/user/index.html',
          controller: 'MainAnalyticUserController',
          controllerAs: 'analytic'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/analytic/user/controller.js');
        }
      }
    });
  }

  angular.module('app.main.analytic.user').config(route);
}());
