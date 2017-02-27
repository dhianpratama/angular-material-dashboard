(function _AppMainSettingAdmedikaController_() {
  'use strict';

  MainSettingAdmedikaController.$inject = ['$mdDialog'];

  function MainSettingAdmedikaController($mdDialog) {
    var vm = this;

    vm.data = {};

    vm.title = 'Admedika Setting';

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

  angular.module('app.main.admedika.setting.admedika').controller('MainSettingAdmedikaController', MainSettingAdmedikaController);
}());
