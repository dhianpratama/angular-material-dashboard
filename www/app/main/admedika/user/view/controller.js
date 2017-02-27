(function _AppMainAdmedikaUserViewController_() {
  'use strict';

  MainAdmedikaUserViewController.$inject = ['$mdDialog', 'data'];

  function MainAdmedikaUserViewController($mdDialog, data) {
    var vm = this;

    vm.content = 'View a User Detail Content';

    vm.data = data;

    function cancel() {
      $mdDialog.cancel();
    }
    vm.cancel = cancel;
  }

  angular.module('app.main.admedika.user.view').controller('MainAdmedikaUserViewController', MainAdmedikaUserViewController);
}());
