(function _AppMainSupportInquiryBrowseRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.inquiry.browse', {
      url: '',
      views: {
        'content@app.main.support.inquiry': {
          templateUrl: 'app/main/support/inquiry/browse/index.html',
          controller: 'MainSupportInquiryBrowseController',
          controllerAs: 'inquiry'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/inquiry/browse/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.inquiry.browse').config(route);
}());
