(function _AppMainAdmedikaUserViewRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.admedika.user.view', {
      url: '/:id',
      views: {
        'content@app.main.admedika.user': {
          templateUrl: 'app/main/admedika/user/view/index.html',
          controller: 'MainAdmedikaUserViewController',
          controllerAs: 'admedika'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/admedika/user/view/controller.js');
        }
      }
    });
  }

  angular.module('app.main.admedika.user.view').config(route);
}());
