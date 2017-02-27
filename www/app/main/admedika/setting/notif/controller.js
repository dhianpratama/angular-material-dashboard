(function _AppMainSettingNotifController_() {
  'use strict';

  MainSettingNotifController.$inject = ['$mdDialog'];

  function MainSettingNotifController($mdDialog) {
    var vm = this;

    vm.data = {};

    vm.title = 'Notif Setting';

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

  angular.module('app.main.admedika.setting.notif').controller('MainSettingNotifController', MainSettingNotifController);
}());
