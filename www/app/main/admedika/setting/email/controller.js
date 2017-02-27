(function _AppMainSettingEmailController_() {
  'use strict';

  MainSettingEmailController.$inject = ['$mdDialog'];

  function MainSettingEmailController($mdDialog) {
    var vm = this;

    vm.data = {};

    vm.title = 'Email Setting';

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

  angular.module('app.main.admedika.setting.email').controller('MainSettingEmailController', MainSettingEmailController);
}());
