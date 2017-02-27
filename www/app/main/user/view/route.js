(function _AppMainUserViewRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.user.view', {
      url: '/:id',
      views: {
        'content@app.main.user': {
          templateUrl: 'app/main/user/view/index.html',
          controller: 'MainUserViewController',
          controllerAs: 'user'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/user/view/controller.js');
        }
      }
    });
  }

  angular.module('app.main.user.view').config(route);
}());
