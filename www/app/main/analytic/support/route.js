(function _AppMainAnalyticSupportRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.analytic.support', {
      url: '/support',
      views: {
        'content@app.main.analytic': {
          templateUrl: 'app/main/analytic/support/index.html',
          controller: 'MainAnalyticSupportController',
          controllerAs: 'analytic'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/analytic/support/controller.js');
        }
      }
    });
  }

  angular.module('app.main.analytic.support').config(route);
}());
