
(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part2Controller', Part2Controller);


  /** @ngInject */
  function Part2Controller() {
    var vm = this;

    vm.title1 = 'Part1';
    vm.number = '0';
    vm.change ='0';

    var  coins = [100,50,20,10,5,2,1];
    vm.clear = function(){
      vm.number=0;
      vm.change=0;

    }
    function minCoinDynamic(amount,coins){

      var S = [];
      var N = [];
      var V = [];
      var P = [];


      for (var i = 1;i<= amount;i++){
        S[i] = -1;
      }
      S[0] = 0;

// go through all the coins

      for (var k = 0;k < coins.length;k++){
        var p = 1;
        do{


// add a coin for all solved  till less or equal to the amount

          for (i = 0 ; i < amount;i++){

            if (S[i] != -1){

              var na = i + p * coins[k];

              if ( S[na] === -1 || S[na] > S[i] + p ){

                S[na] = S[i] + p;

                N[na] = p; V[na] = k; P[na] = i


              }
            }

          }

          p++;

        } while (p*coins[k] <=amount)
      }

      var usedCoins=[0,0,0,0,0,0,0];

      var z = amount;
     // var noCoins = S[amount];

      do{

        usedCoins[V[z]] = usedCoins[V[z]]+N[z];



        z = P[z];



      } while ( z!=0)





      return usedCoins;
    }


    vm.calculate = function(){
      vm.number=minCoinDynamic(vm.change,coins)

    }

  }
})();












