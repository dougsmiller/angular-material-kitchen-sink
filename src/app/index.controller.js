(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('IndexController', IndexController );

  /** @ngInject */



  function IndexController($mdSidenav, $state) {
    var vm = this;
    vm.menuItems = [
      {name: 'autocomplete', path: 'autocomplete'},
     // {name: 'bottom sheet', path: 'bottomSheet'},
      {name: 'button', path: 'button'}
      // {name: 'card', path: 'card'},
      // {name: 'date picker', path: 'datePicker'},
      // {name: 'grid list', path: 'gridList'},
      // {name: 'input', path: 'input'},
      // {name: 'progress circular', path: 'progressCircular'},
      // {name: 'progress linear', path: 'progressLinear'},
      // {name: 'toast', path: 'toast'},
      // {name: 'whiteframe', path: 'whiteframe'},
    ];

    vm.title = 'home';

    vm.go = function (path, title) {
      $state.go(path);
      vm.title = title;
    }

    vm.toggleLeft = function () {
      $mdSidenav('left')
        .toggle();
    }

    vm.menuIcon = 'menu';
    vm.menuToggle = function () {
      if ($mdSidenav('left').isOpen()) {
        $mdSidenav('left')
          .close();
        vm.menuIcon = 'menu';
      }
      else {
        $mdSidenav('left')
          .open();
        vm.menuIcon = 'arrow_back';
      }
    }
  }
})()
