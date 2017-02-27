(function _AppMainUserUpdateRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.admedika.user.update', {
      url: '/update/:id',
      views: {
        'content@app.main.admedika.user': {
          templateUrl: 'app/main/admedika/user/update/index.html',
          controller: 'MainAdmedikaUserUpdateController',
          controllerAs: 'admedika'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/user/update/controller.js');
        }
      }
    });
  }

  angular.module('app.main.admedika.user.update').config(route);
}());
