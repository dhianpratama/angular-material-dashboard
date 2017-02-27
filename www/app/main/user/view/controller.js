(function _AppMainUserViewController_() {
  'use strict';

  MainUserViewController.$inject = ['$mdDialog', 'data'];

  function MainUserViewController($mdDialog, data) {
    var vm = this;
    vm.data = data;
    vm.content = 'View a User Detail Content';

    function hide() {
      $mdDialog.hide();
    }
    vm.hide = hide;

    function cancel() {
      $mdDialog.cancel();
    }
    vm.cancel = cancel;

    function answer(a) {
      $mdDialog.hide(a);
    }
    vm.answer = answer;
  }

  angular.module('app.main.user.view').controller('MainUserViewController', MainUserViewController);
}());
