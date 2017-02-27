(function _AppConfig_() {
  'use strict';

  function graphql(graphqlProvider) {
    graphqlProvider.set({
      url: 'http://localhost:4321/graphql'
    });
  }

  function location($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  function log($logProvider) {
    $logProvider.debugEnabled(true);
  }

  angular.module('app')
    .config(graphql)
    .config(location)
    .config(log);
}());
