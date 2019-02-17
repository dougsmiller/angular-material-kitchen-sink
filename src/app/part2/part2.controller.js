
(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part2Controller', Part2Controller);


  /** @ngInject */
  function Part2Controller($http,$log) {

    var vm = this;

    vm.loadTable = function(){

      //var url = "http://localhost:8080/api/mail/data";
      var url = "/api/mail/data";
      //alert(url);

      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {

        vm.data = response.data;
       // alert(JSON.stringify(response));

      }, function myError(response) {

       //alert(JSON.stringify(response));
        vm.status = response.status;
        alert(vm.status + " <== Error");
      });

    };

    vm.listOptions = {
      title: "Video Campaigns",
      noDataMessage: "You have no campaigns within this time range.",
      columns: {
        "Campaign Name": "item.campaign",
        "Name": "item.name",
        "Email": "item.email",
        "Question": "item.question",
        "Duration": "item.duration",
        "Date Sent": "item.created_at",
        "Date Received ": "item.received"
      }
    };

    vm.loadTable();
  }





})();












