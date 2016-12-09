(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('IndexController', IndexController );

  /** @ngInject */



  function IndexController($scope,$mdSidenav, $state ,$log) {
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
  $log.info("Here and there")
   vm.logout = function(){
    alert("Fred");
  }
    $log.info("Here and there and everywhere")
    vm.title = 'homex';

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
