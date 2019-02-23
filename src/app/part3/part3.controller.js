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

    vm.job_id = "XXX";




    vm.findVideos = function(){

     // var url = "http://ziller2.dyndns.org:9080/api/mail/videos";

      // var url = "http://localhost:8080/api/mail/videos";
      var url = "/api/mail/videos";
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {

        vm.data = response.data;


      }, function myError(response) {
        vm.status = response.status;
        alert(vm.status + "ERROR");
      });

    };


    vm.listOptions = {
      title: "Videos Received",
      noDataMessage: "You have no campaigns within this time range.",
      columns: {
        "Video": "item._id",
        "Campaign":"item.campaign",
        "Name": "item.name",
        "Email":"item.email",
        "Date Sent": "item.created_at",
        "Date Received ": "item.received"

      }
    };

  vm.transformMP4 = function(){

    var url = "/api/mp4/" +  vm.video;
    $http({
      method: "GET",
      url: url
    }).then(function mySucces(response) {

    alert("transformed to mp4");


    }, function myError(response) {
      vm.status = response.status;
      alert(vm.status + "ERROR");
    });


  };

  vm.sendToAI = function(){

    var url = "/api/ai/" + vm.video;
    $http({
      method: "GET",
      url: url
    }).then(function mySucces(response) {

     // alert("received from AI interface: Job ID is "+response.data);

      vm.job_id = response.data;

      alert("received from AI interface: Job ID is " + vm.job_id);

    }, function myError(response) {
      vm.status = response.status;
      alert(vm.status + "ERROR");
    });


  };
  /*
  *
  *
  *
  *
  * */

  vm.getJobs = function(){

    var url = "/api/jobs/";
    $http({
      method: "GET",
      url: url
    }).then(function mySucces(response) {

      alert("Jobs are: "+ response.data);


    }, function myError(response) {
      vm.status = response.status;
      alert(vm.status + "ERROR");
    });

  };




  /*
  *
  *   JOB Results
    *
    * */

    vm.getJobResults = function(){

      var url = "/api/job_results/"+ vm.job_id;
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {

        alert("Job Status : "+ response.data);


      }, function myError(response) {
        vm.status = response.status;
        alert(vm.status + "ERROR");
      });


    };
/*
*
*   JOB Status
*
* */

  vm.getJobStatus = function(){

    var url = "/api/job_status/"+ vm.job_id;
    $http({
      method: "GET",
      url: url
    }).then(function mySucces(response) {

      alert("Job Status : "+ response.data.status);


    }, function myError(response) {
      vm.status = response.status;
      alert(vm.status + "ERROR");
    });


    };


    vm.showVideo = function(video) {
      vm.video = video;
      var videocontainer = document.getElementById('video-1');
      var videosource = document.getElementById('videoSrc');
      videocontainer.pause();

      //	videosource.setAttribute('src', "" + videoElement.src);
      var urlString = "https://ziller2.dyndns.org:9001/uploads/" + video; //upload_7c36bd5526c330fe8a355e3a4322f0eb.webm";

      //videoElement.src = str;

      //alert(urlString);

      videosource.setAttribute('src',urlString);
      videocontainer.load();
    };



/*
    vm.showTabDialog = function(ev,video){












     // $state.go("part4",{"video": video+".webm"});
      alert(video);

      alert($mdDialog);

      $mdDialog.show({
        controller: vm.DialogController,
        templateUrl: 'tabDialog.tmpl.html',
        parent: angular.element($document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });


    };

*/
    vm.findVideos();

/*
  vm.DialogController = function ($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
*/


  }
//  Part3Controller.$inject = ['$http','$state','$mdDialog','$document'];


})();
