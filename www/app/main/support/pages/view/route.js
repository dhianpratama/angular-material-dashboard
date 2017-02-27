(function _AppMainSupportPagesViewRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.pages.view', {
      url: '/:id',
      views: {
        'content@app.main.support.pages': {
          templateUrl: 'app/main/support/pages/view/index.html',
          controller: 'MainSupportPagesViewController',
          controllerAs: 'pages'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/pages/view/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.pages.view').config(route);
}());
