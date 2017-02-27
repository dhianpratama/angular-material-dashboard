(function _AppMainUserUpdateRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.user.update', {
      url: '/update/:id',
      views: {
        'content@app.main.user': {
          templateUrl: 'app/main/user/update/index.html',
          controller: 'MainUserUpdateController',
          controllerAs: 'user'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/user/update/controller.js');
        }
      }
    });
  }

  angular.module('app.main.user.update').config(route);
}());
