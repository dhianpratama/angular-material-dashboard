(function _AppAuthLoginController_() {
  'use strict';

  function AuthLoginController($log, $state, auth, graphql) {
    var vm = this;
    var query = [
      'mutation LoginAdmin($username: String!, $password: String!) {',
      '  loginAdmin(username: $username, password: $password) {',
      '    token',
      '  }',
      '}'
    ].join('');
    var variables = {
      username: 'iman@lussa.net',
      password: 'sukses2017'
    };

    vm.content = 'Login Content';

    graphql(query, variables)
      .then(function resolve(res) {
        var result = angular.copy(res).loginAdmin;
        return auth.setToken(result.token);
      })
      .then(function resolve() {
        $state.go('app.main.home');
      })
      .catch(function reject(err) {
        $log.debug(err);
      });
  }

  angular.module('app.auth.login').controller('AuthLoginController', AuthLoginController);
}());
