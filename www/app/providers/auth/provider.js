(function _AppProviderAuthProvider_() {
  'use strict';

  function auth() {
    var config = { key: 'token' };

    this.set = function set(userConfig) {
      angular.merge(config, userConfig);
    };

    this.$get = function get($window, jwtHelper) {
      var isAuthenticated = getSession();

      function logout() {
        return $window.localStorage.removeItem(config.key);
      }

      function getSession() {
        var payload;
        try {
          payload = jwtHelper.decodeToken(getToken());
        } catch (e) {
          //
        }
        return payload;
      }

      function getToken() {
        return $window.localStorage.getItem(config.key);
      }

      function setToken(token) {
        return $window.localStorage.setItem(config.key, token);
      }

      return {
        isAuthenticated: isAuthenticated,
        logout: logout,
        getSession: getSession,
        getToken: getToken,
        setToken: setToken
      };
    };
  }

  angular.module('app.providers.auth').provider('auth', auth);
}());
