(function _AppMainUserRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.user', {
      url: '/user',
      abstract: true,
      views: {
        'content@app.main': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.user').config(route);
}());
