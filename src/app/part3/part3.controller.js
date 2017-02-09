(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part3Controller',Part3Controller);

function Part3Controller($http,$state){

  var vm = this;
  // finds video files
  vm.data = [];

//alert("part3");






  vm.findVideos = function(){

    var url = "http://ziller2.dyndns.org:9080/api/mail/videos";

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
    title: "Videos Received",
    noDataMessage: "You have no campaigns within this time range.",
    columns: {
      "Video": "item._id",
      "Name": "item.name",
      "Date Sent": "item.created_at",
      "Date Received ": "item.received"

    }
  };


 vm.selectVideo = function(video){


   $state.go("part4",{"video": video+".webm"});

 }


  vm.findVideos();






}



})();

