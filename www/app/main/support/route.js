(function _AppMainSupportRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support', {
      url: '/support',
      abstract: true,
      views: {
        'content@app.main': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.support').config(route);
}());
