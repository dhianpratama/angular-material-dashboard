(function _AppMainAdmedikaUserBrowseRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.admedika.user.browse', {
      url: '',
      views: {
        'content@app.main.admedika.user': {
          templateUrl: 'app/main/admedika/user/browse/index.html',
          controller: 'MainAdmedikaUserBrowseController',
          controllerAs: 'admedika'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/admedika/user/browse/controller.js');
        }
      }
    });
  }

  angular.module('app.main.admedika.user.browse').config(route);
}());
