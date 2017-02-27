(function _AppMainSupportInquiryReplyRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.inquiry.reply', {
      url: '/reply/:id',
      views: {
        'content@app.main.support.inquiry': {
          templateUrl: 'app/main/support/inquiry/reply/index.html',
          controller: 'MainSupportInquiryReplyController',
          controllerAs: 'inquiry'
        }
      },
      resolve: {
        controller: function getController($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/support/inquiry/reply/controller.js');
        }
      }
    });
  }

  angular.module('app.main.support.inquiry.reply').config(route);
}());
