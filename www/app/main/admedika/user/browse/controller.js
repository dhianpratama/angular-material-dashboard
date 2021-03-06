(function _AppMainAdmedikaUserBrowseController_() {
  'use strict';

  MainAdmedikaUserBrowseController.$inject = ['$mdDialog', '$ocLazyLoad', 'SweetAlert'];

  function MainAdmedikaUserBrowseController($mdDialog, $ocLazyLoad, SweetAlert) {
    var vm = this;
    var i;
    var originatorEv;

    function loadController() {
      $ocLazyLoad.load('app/main/admedika/user/view/controller.js');
      $ocLazyLoad.load('app/main/admedika/user/update/controller.js');
    }
    loadController();

    vm.content = 'Browse All Users Content';

    vm.users = [];
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
        controller: 'MainAdmedikaUserViewController',
        controllerAs: 'admedika',
        templateUrl: 'app/main/admedika/user/view/index.html',
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
          data: angular.copy(data)
        }
      });
    }
    vm.viewData = viewData;

    function showEditDataForm(ev, data) {
      $mdDialog.show({
        controller: 'MainAdmedikaUserUpdateController',
        controllerAs: 'admedika',
        templateUrl: 'app/main/admedika/user/update/index.html',
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

    function editData(ev, data) {
      showEditDataForm(ev, data);
    }
    vm.editData = editData;

    function createNewData(ev) {
      showEditDataForm(ev, null);
    }
    vm.createNewData = createNewData;

    function onDelete(ev, data) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure to delete this user?')
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
      vm.users = [];
      for (i = 1; i < 51; i += 1) {
        vm.users.push({
          name: 'AdMedika user ' + i,
          callCenter: '0800111000' + i,
          payorInfo: 'payor info ' + i,
          corporateInfo: 'corporate info ' + i,
          policyNumber: '0800000' + i,
          birthdate: '0000011122' + i,
          memberId: '9000' + i,
          memberType: (i % 2 === 0) ? 'Normal' : 'VIP',
          planType: (i % 2 === 0) ? 'Plan 1' : 'Plan 2',
          bpjsId: '123000' + i,
          bpjsClass: (i % 2 === 0) ? '1' : '2',
          bpjsFaskes: '-',
          employeeId: '2333211000' + i
        });
      }
    }
    vm.getData = getData;
    vm.getData();
  }

  angular.module('app.main.admedika.user.browse').controller('MainAdmedikaUserBrowseController', MainAdmedikaUserBrowseController);
}());
