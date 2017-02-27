(function _AppMainAdmedikaRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.admedika', {
      url: '/admedika',
      abstract: true,
      views: {
        'content@app.main': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.admedika').config(route);
}());
