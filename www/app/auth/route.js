(function _AppAuthRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.auth', {
      url: '/auth',
      abstract: true,
      views: {
        'content@app': {
          template: '<div ui-view="content" style="height:100%;"></div>'
        }
      }
    });
  }

  angular.module('app.auth').config(route);
}());
