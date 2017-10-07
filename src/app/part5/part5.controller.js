(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part5Controller',Part5Controller);

function Part5Controller($http,$state){

  var vm = this;
  // finds video files
  vm.data = [];

//alert("part3");






  vm.findVideos = function(){

    var url = "http://ziller2.dyndns.org:9080/api/transformed";

   // var url = "http://localhost:8080/api/mail/videos";

    $http({
      method: "GET",
      url: url
    }).then(function mySucces(response) {

      vm.data = response.data;


    }, function myError(response) {
      vm.status = response.status;
      alert(vm.status + "ERROR");
    });

  }


  vm.listOptions = {
    title: "Videos Amplified",
    noDataMessage: "You have no campaigns within this time range.",
    columns: {
      "Video": "item"
/*
      "Name": "item.name",
      "Date Sent": "item.created_at",
      "Date Received ": "item.received"
      */

    }
  };


 vm.selectTransformedVideo = function(video){


   $state.go("part6",{"video": video });

 }


  vm.findVideos();






}



})();

