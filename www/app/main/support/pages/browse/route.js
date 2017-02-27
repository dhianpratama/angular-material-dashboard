(function _AppMainSupportPagesBrowseRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.pages.browse', {
      url: '',
      views: {
        'content@app.main.support.pages': {
          templateUrl: 'app/main/support/pages/browse/index.html',
          controller: 'MainSupportPagesBrowseController',
          controllerAs: 'pages'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/pages/browse/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.pages.browse').config(route);
}());
