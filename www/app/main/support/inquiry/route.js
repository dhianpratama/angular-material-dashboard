(function _AppMainSupportInquiryRoute_() {
  'use strict';

  function route($stateProvider) {
    $stateProvider.state('app.main.support.inquiry', {
      url: '/inquiry',
      abstract: true,
      views: {
        'content@app.main.support': {
          template: '<div ui-view="content"></div>'
        }
      }
    });
  }

  angular.module('app.main.support.inquiry').config(route);
}());
