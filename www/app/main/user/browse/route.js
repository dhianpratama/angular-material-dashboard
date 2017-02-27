(function _AppMainUserBrowseRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.user.browse', {
      url: '',
      views: {
        'content@app.main.user': {
          templateUrl: 'app/main/user/browse/index.html',
          controller: 'MainUserBrowseController',
          controllerAs: 'user'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/user/browse/controller.js');
        }
      }
    });
  }

  angular.module('app.main.user.browse').config(route);
}());
