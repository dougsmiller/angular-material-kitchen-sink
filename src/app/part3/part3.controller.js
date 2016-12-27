(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part3Controller',Part3Controller);

function Part3Controller(vendMachine){

  var vm = this;

  vm.change =123;

  vm.coins = [1,2,5,10,20,50,100];

  vm.weights = [100,20,33,16,5,10];



  vendMachine.setWeights(vm.weights);
  vendMachine.getCoins();

}



})();

