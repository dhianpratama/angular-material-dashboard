(function _AppMainAdmedikaSettingRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.admedika.setting', {
      url: '/setting',
      views: {
        'content@app.main.admedika': {
          templateUrl: 'app/main/admedika/setting/browse/index.html',
          controller: 'MainAdmedikaSettingController',
          controllerAs: 'setting'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/admedika/setting/browse/controller.js');
        }
      }
    });
  }

  angular.module('app.main.admedika.setting').config(route);
}());
