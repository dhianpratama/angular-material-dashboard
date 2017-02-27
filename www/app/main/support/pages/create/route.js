(function _AppMainSupportPagesCreateRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.pages.create', {
      url: '/create',
      views: {
        'content@app.main.support.pages': {
          templateUrl: 'app/main/support/pages/create/index.html',
          controller: 'MainSupportPagesCreateController',
          controllerAs: 'pages'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/pages/create/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.pages.create').config(route);
}());
