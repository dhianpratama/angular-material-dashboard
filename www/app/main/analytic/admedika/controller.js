(function _AppMainAnalyticAdmedikaController_() {
  'use strict';

  function MainAnalyticAdmedikaController() {
    var vm = this;

    vm.content = 'View MyAdmedika Analytic Content';

    vm.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    vm.series = ['Series A', 'Series B'];
    vm.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    vm.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    vm.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  }

  angular.module('app.main.analytic.admedika').controller('MainAnalyticAdmedikaController', MainAnalyticAdmedikaController);
}());
