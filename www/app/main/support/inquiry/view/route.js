(function _AppMainSupportInquiryViewRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.inquiry.view', {
      url: '/:id',
      views: {
        'content@app.main.support.inquiry': {
          templateUrl: 'app/main/support/inquiry/view/index.html',
          controller: 'MainSupportInquiryViewController',
          controllerAs: 'inquiry'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/inquiry/view/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.inquiry.view').config(route);
}());
