(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part4Controller',Part4Controller);
/*
    .filter("trustUrl", ['$sce', function ($sce) {
      return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
      };

    }]);

*/


  function Part4Controller($http,$stateParams){

    var vm = this;
    // finds video files
    //

    vm.source = $stateParams.video;

    vm.eulerParams ={"video":vm.source,"noPyramids":5,"freqMin":0.6,"freqMax":1.0,"amplification":50};

    vm.eulerAmpVideo = function () {

      var url = "/api/euler" ;


      $http({
        method: "post",
        url: url,
        data: vm.eulerParams

      }).then(function mySucces(response) {

        vm.data = response.data;
        // alert(JSON.stringify(response));

      }, function myError(response) {

        //alert(JSON.stringify(response));
        vm.status = response.status;
        alert(vm.status + " Error");
      });


    }







    }





})();

