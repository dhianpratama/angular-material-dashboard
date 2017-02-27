(function _AppMainSupportInquiryViewController_() {
  'use strict';

  MainSupportInquiryViewController.$inject = ['$mdDialog', 'data'];

  function MainSupportInquiryViewController($mdDialog, data) {
    var vm = this;

    vm.content = 'View an Inquiry Content';

    vm.data = data;

    function cancel() {
      $mdDialog.cancel();
    }
    vm.cancel = cancel;

    function reply() {
      $mdDialog.hide();
    }
    vm.reply = reply;
  }

  angular.module('app.main.support.inquiry.view').controller('MainSupportInquiryViewController', MainSupportInquiryViewController);
}());
