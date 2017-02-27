(function _AppMainUserRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.admedika.user', {
      abstract: true,
      views: {
        'content@app.main.admedika': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.admedika.user').config(route);
}());
