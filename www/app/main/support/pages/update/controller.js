(function _AppMainSupportPagesUpdateController_() {
  'use strict';

  MainSupportPagesUpdateController.$inject = ['$mdDialog', 'data'];

  function MainSupportPagesUpdateController($mdDialog, data) {
    var vm = this;

    vm.content = 'Update a Support Pages Content';

    vm.data = data;
    vm.title = 'Edit Page';
    if (vm.data === null) {
      vm.title = 'Create New Page';
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

  angular.module('app.main.support.pages.update').controller('MainSupportPagesUpdateController', MainSupportPagesUpdateController);
}());
