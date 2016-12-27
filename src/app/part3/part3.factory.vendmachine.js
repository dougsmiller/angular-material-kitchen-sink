(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .service('vendMachine', vendMachine);

  /** @ngInject */
  function vendMachine() {

  var vm = this;
/*
  vm.change = change;
  vm.coins = coins;
  vm.weights = weights;
*/
  return {

    getCoins: function(){

      //alert("big Brother");
    }

  }


  }

})();
