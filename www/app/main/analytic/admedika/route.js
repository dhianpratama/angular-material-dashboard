(function _AppMainAnalyticAdmedikaRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.analytic.admedika', {
      url: '/admedika',
      views: {
        'content@app.main.analytic': {
          templateUrl: 'app/main/analytic/admedika/index.html',
          controller: 'MainAnalyticAdmedikaController',
          controllerAs: 'analytic'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/analytic/admedika/controller.js');
        }
      }
    });
  }

  angular.module('app.main.analytic.admedika').config(route);
}());
