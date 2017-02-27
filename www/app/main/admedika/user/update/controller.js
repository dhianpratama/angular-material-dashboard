(function _MainAdmedikaUserUpdateController_() {
  'use strict';

  MainAdmedikaUserUpdateController.$inject = ['$mdDialog', 'data'];

  function MainAdmedikaUserUpdateController($mdDialog, data) {
    var vm = this;

    vm.content = 'Update a User Data Content';

    vm.data = data;
    vm.title = 'Edit AdMedika User';
    if (vm.data === null) {
      vm.title = 'Create New AdMedika User';
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

  angular.module('app.main.user.update').controller('MainAdmedikaUserUpdateController', MainAdmedikaUserUpdateController);
}());
