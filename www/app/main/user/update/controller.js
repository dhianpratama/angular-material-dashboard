(function _AppMainUserUpdateController_() {
  'use strict';

  MainUserUpdateController.$inject = ['$mdDialog', 'data', 'SweetAlert'];

  function MainUserUpdateController($mdDialog, data, SweetAlert) {
    var vm = this;

    vm.content = 'Update a User Data Content';

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

    function editPassword($event) {
      vm.cancel();
      showEditPasswordForm($event, vm.data);
    }
    vm.editPassword = editPassword;

    function showEditPasswordForm(ev, d) {
      $mdDialog.show({
        controller: 'MainUserEditPasswordController',
        controllerAs: 'user',
        templateUrl: 'app/main/user/editPassword/index.html',
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          data: angular.copy(d)
        }
      })
        .then(function done() {
          SweetAlert.swal('Password Changed!', 'Password successfully changed', 'success');
        });
    }
  }

  angular.module('app.main.user.update').controller('MainUserUpdateController', MainUserUpdateController);
}());
