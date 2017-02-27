(function _AppMainUserEditPasswordController_() {
  'use strict';

  MainUserEditPasswordController.$inject = ['$mdDialog', 'data'];

  function MainUserEditPasswordController($mdDialog, data) {
    var vm = this;

    vm.content = 'EditPassword';

    vm.data = data;
    vm.title = 'Edit User';
    if (vm.data === null) {
      vm.title = 'Create New User';
    }

    vm.content = 'View a User Detail Content';

    function hide() {
      $mdDialog.hide();
    }
    vm.hide = hide;

    function cancel() {
      $mdDialog.cancel();
    }
    vm.cancel = cancel;

    function save(a) {
      $mdDialog.hide(a);
    }
    vm.save = save;
  }

  angular.module('app.main.user.editPassword').controller('MainUserEditPasswordController', MainUserEditPasswordController);
}());
