(function _AppMainSupportPagesViewController_() {
  'use strict';

  MainSupportPagesViewController.$inject = ['$mdDialog', 'data'];

  function MainSupportPagesViewController($mdDialog, data) {
    var vm = this;

    vm.content = 'View a Support Pages Content';

    vm.data = data;

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

  angular.module('app.main.support.pages.view').controller('MainSupportPagesViewController', MainSupportPagesViewController);
}());
