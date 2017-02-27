(function _AppModule_() {
  'use strict';

  var modules = [
    'ngSanitize',
    'ngMaterial',
    'md.data.table',
    'oc.lazyLoad',
    'ui.router',
    'angular-linq',
    'oitozero.ngSweetAlert',
    'chart.js',
    'textAngular',
    'app.providers',
    'app.auth',
    'app.main'
  ];

  angular.module('app', modules);
}());
