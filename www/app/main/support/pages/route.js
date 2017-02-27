(function _AppMainSupportPagesRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.pages', {
      url: '/pages',
      abstract: true,
      views: {
        'content@app.main.support': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.support.pages').config(route);
}());
