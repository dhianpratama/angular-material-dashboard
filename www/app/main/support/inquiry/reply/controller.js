(function _AppMainSupportInquiryReplyController_() {
  'use strict';

  MainSupportInquiryReplyController.$inject = ['$mdDialog', 'data'];

  function MainSupportInquiryReplyController($mdDialog, data) {
    var vm = this;

    vm.content = 'Reply an Inquiry Content';

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

  angular.module('app.main.support.inquiry.reply').controller('MainSupportInquiryReplyController', MainSupportInquiryReplyController);
}());
