(function _AppMainSupportPagesUpdateRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.pages.update', {
      url: '/update/:id',
      views: {
        'content@app.main.support.pages': {
          templateUrl: 'app/main/support/pages/update/index.html',
          controller: 'MainSupportPagesUpdateController',
          controllerAs: 'pages'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/pages/update/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.pages.update').config(route);
}());
