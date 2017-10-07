(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part6Controller',Part6Controller);
/*
    .filter("trustUrl", ['$sce', function ($sce) {
      return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
      };

    }]);

*/


  function Part6Controller($http,$stateParams) {

    var vm = this;
    // finds video files
    //

    vm.source = $stateParams.video;
  }

})();

