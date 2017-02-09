(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .service('vendMachine', vendMachine);

  /** @ngInject */
  function vendMachine($window) {

var vm = this;

  vm.change = 0;
  vm.coins = [100,50,20,10,5,2,1];
  vm.weights = [1,1,1,1,1,1,1];
  return {
    'weights':weights,
    getCoins: function(){

  //   $window.alert("big Brother");
    },
    setWeights: function (w) {
       this.weights = w;
    }

  }


  }

})();
