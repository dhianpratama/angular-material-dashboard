(function _AppMainSupportInquiryBrowseController_() {
  'use strict';

  MainSupportInquiryBrowseController.$inject = ['$mdDialog', '$ocLazyLoad', 'SweetAlert'];

  function MainSupportInquiryBrowseController($mdDialog, $ocLazyLoad, SweetAlert) {
    var vm = this;
    var i;
    var originatorEv;

    vm.content = 'Browse All User\'s Inquiry Content';

    function loadController() {
      $ocLazyLoad.load('app/main/support/inquiry/view/controller.js');
      $ocLazyLoad.load('app/main/support/inquiry/reply/controller.js');
    }
    loadController();

    vm.data = [];
    vm.selected = [];

    vm.query = {
      order: 'name',
      limit: 10,
      page: 1
    };

    vm.filter = {
      show: false,
      keyword: null
    };

    vm.options = {
      rowSelection: true,
      multiSelect: true,
      autoSelect: true,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: false,
      limitSelect: true,
      pageSelect: true
    };

    function closeSearch() {
      vm.filter.show = false;
      vm.filter.keyword = null;
    }
    vm.closeSearch = closeSearch;

    vm.selected = [];

    function openMenu($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    }
    vm.openMenu = openMenu;

    function openPopup() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );
      originatorEv = null;
    }
    vm.openPopup = openPopup;

    function viewData(ev, data) {
      $mdDialog.show({
        controller: 'MainSupportInquiryViewController',
        controllerAs: 'inquiry',
        templateUrl: 'app/main/support/inquiry/view/index.html',
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          data: angular.copy(data)
        }
      })
        .then(function done() {
          replyInquiry(ev, data);
        });
    }
    vm.viewData = viewData;

    function showReplyInquiry(ev, data) {
      $mdDialog.show({
        controller: 'MainSupportInquiryReplyController',
        controllerAs: 'inquiry',
        templateUrl: 'app/main/support/inquiry/reply/index.html',
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          data: angular.copy(data)
        }
      })
        .then(function done() {
          SweetAlert.swal('Saved!', 'Data successfully saved', 'success');
        });
    }

    function replyInquiry(ev, data) {
      showReplyInquiry(ev, data);
    }
    vm.replyInquiry = replyInquiry;

    function createNewData(ev) {
      showReplyInquiry(ev, null);
    }
    vm.createNewData = createNewData;

    function onDelete(ev, data) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure to delete this page?')
        .textContent(data.name)
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Yes!')
        .cancel('Cancel');

      $mdDialog.show(confirm)
        .then(function done() {
          SweetAlert.swal('Deleted!', 'Data successfully deleted', 'success');
        });
    }
    vm.onDelete = onDelete;

    function getData() {
      vm.data = [];
      for (i = 1; i < 51; i += 1) {
        vm.data.push({
          page: 'Page ' + i,
          subPage: 'Sub Page ' + i,
          content: 'Content ' + i
        });
      }
    }
    vm.getData = getData;
    vm.getData();
  }

  angular.module('app.main.support.inquiry.browse').controller('MainSupportInquiryBrowseController', MainSupportInquiryBrowseController);
}());
