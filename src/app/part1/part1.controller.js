(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part1Controller', Part1Controller);


  /** @ngInject */
  function Part1Controller() {
    var vm = this;

    vm.title1 = 'Part1';
    vm.number = '0';
    vm.change ='0';

    var  coins = [100,50,20,10,5,2,1];
    vm.clear = function(){
      vm.number=0;
      vm.change=0;

    }

    function minCoinDynamic(change,coins) {
      var coinReq = []; // this will store the optimal solution
      coinReq.length = change+1;
      // for all the values -- from 0 to
      // given amount.
      var CC = []; // resets for every smaller problems
      // and minimum in it is the optimal
      // solution for the smaller problem.
      CC.length = coins.length;
      coinReq[0] = 0; // 0 coins are required to make the change for 0
      // now solve for all the amounts
      for (var amt = 1; amt <= change; amt++) {
        for (var j = 0; j < CC.length; j++) {
          CC[j] = -1;
        }
        // Now try taking every coin one at a time and fill the solution in
        // the CC[]
        for (j = 0; j < coins.length; j++) {
          if (coins[j] <= amt) { // check if coin value is less than
            // amount
            CC[j] = coinReq[amt - coins[j]] + 1; // if available,
            // select the
            // coin and add
            // 1 to solution
            // of
            // (amount-coin
            // value)
          }
        }
        //Now solutions for amt using all the coins is stored in CC[]
//			take out the minimum (optimal) and store in coinReq[amt]
        coinReq[amt] = -1;
        for (j = 0; j < coins.length; j++) {
          if (CC[j] > 0 && (coinReq[amt] == -1 || coinReq[amt] > CC[j])) {
            coinReq[amt] = CC[j];
          }
        }
      }
      //return the optimal solution for amount
      return coinReq[change];

    }
    vm.calculate = function(){
      vm.number=minCoinDynamic(vm.change,coins)

    }

  }
})();
