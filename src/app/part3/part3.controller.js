(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part3Controller',Part3Controller);

function Part3Controller(vendMachine){

  vendMachine.getCoins();

}



})();

