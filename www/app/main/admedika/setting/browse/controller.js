(function _AppMainAdmedikaSettingController_() {
  'use strict';

  MainAdmedikaSettingController.$inject = ['$mdDialog', '$ocLazyLoad', 'SweetAlert'];

  function MainAdmedikaSettingController($mdDialog, $ocLazyLoad, SweetAlert) {
    var vm = this;

    vm.content = 'Setting Technical Configuration Content';

    function loadController() {
      $ocLazyLoad.load('app/main/admedika/setting/admedika/controller.js');
      $ocLazyLoad.load('app/main/admedika/setting/email/controller.js');
      $ocLazyLoad.load('app/main/admedika/setting/google/controller.js');
      $ocLazyLoad.load('app/main/admedika/setting/notif/controller.js');
    }
    loadController();

    function openAdMedika(ev) {
      $mdDialog.show({
        controller: 'MainSettingAdmedikaController',
        controllerAs: 'setting',
        templateUrl: 'app/main/admedika/setting/admedika/index.html',
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function done() {
          SweetAlert.swal('Saved!', 'Setting successfully saved', 'success');
        });
    }
    vm.openAdMedika = openAdMedika;

    function openEmail(ev) {
      $mdDialog.show({
        controller: 'MainSettingEmailController',
        controllerAs: 'setting',
        templateUrl: 'app/main/admedika/setting/email/index.html',
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function done() {
          SweetAlert.swal('Saved!', 'Setting successfully saved', 'success');
        });
    }
    vm.openEmail = openEmail;

    function openGoogle(ev) {
      $mdDialog.show({
        controller: 'MainSettingGoogleController',
        controllerAs: 'setting',
        templateUrl: 'app/main/admedika/setting/google/index.html',
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function done() {
          SweetAlert.swal('Saved!', 'Setting successfully saved', 'success');
        });
    }
    vm.openGoogle = openGoogle;

    function openNotif(ev) {
      $mdDialog.show({
        controller: 'MainSettingNotifController',
        controllerAs: 'setting',
        templateUrl: 'app/main/admedika/setting/notif/index.html',
        targetEvent: ev,
        clickOutsideToClose: true
      })
        .then(function done() {
          SweetAlert.swal('Saved!', 'Setting successfully saved', 'success');
        });
    }
    vm.openNotif = openNotif;
  }

  angular.module('app.main.admedika.setting').controller('MainAdmedikaSettingController', MainAdmedikaSettingController);
}());
