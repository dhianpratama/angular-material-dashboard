(function _AppMainSettingGoogleController_() {
  'use strict';

  MainSettingGoogleController.$inject = ['$mdDialog'];

  function MainSettingGoogleController($mdDialog) {
    var vm = this;

    vm.data = {};

    vm.title = 'Google Setting';

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

  angular.module('app.main.admedika.setting.google').controller('MainSettingGoogleController', MainSettingGoogleController);
}());
