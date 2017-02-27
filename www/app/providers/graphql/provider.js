(function _AppProviderGraphqlProvider_() {
  'use strict';

  function graphql() {
    var config = { url: '/graphql' };

    this.set = function set(userConfig) {
      angular.merge(config, userConfig);
    };

    this.$get = function get($q, $http, auth) {
      return function send(query, variables) {
        return $q(function graphqlRequest(resolve, reject) {
          $http({
            method: 'POST',
            url: config.url,
            headers: {
              'x-access-token': auth.isAuthenticated && auth.getToken()
            },
            data: {
              query: query,
              variables: variables
            }
          }).then(function success(res) {
            if (res.data.errors) throw res;
            resolve(res.data && res.data.data);
          }).catch(function failed(err) {
            reject(err && err.data && err.data.errors && err.data.errors[0].message);
          });
        });
      };
    };
  }

  angular.module('app.providers.graphql').provider('graphql', graphql);
}());
