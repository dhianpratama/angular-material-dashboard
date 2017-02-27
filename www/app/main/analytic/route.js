(function _AppMainAnalyticRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.analytic', {
      url: '/analytic',
      abstract: true,
      views: {
        'content@app.main': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.analytic').config(route);
}());
