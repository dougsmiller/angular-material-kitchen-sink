(function() {
  'use strict';
  angular
    .module('angularMaterialKitchenSink')
    .controller('Part3Controller', Part3Controller);

  function Part3Controller($http, $state, $mdToast, $timeout, $log,localStorageService) {
    var vm = this;
    // finds video files
    vm.data = [];
    //alert("part3");

    if(!localStorageService.isSupported) {
      //...
      alert("We do not have local Storage!!");

    }


   var localVideoServer =  localStorageService.get('localVideoServer');




    vm.job_id = "XXX";
    vm.showToast = function(msg) {
      $mdToast.show(
        $mdToast.simple()
          .textContent(msg)
          .hideDelay(1500)
          .position('top right')
      );
    };

    /*
     *
     *
     * Process Video One Click
     *
     *
     * */
    vm.processVideoOneClick = function() {
      if (vm.video) {
        vm.showToast("Transforming to MP4");
        var url = "/api/mp4/" + vm.video;
        $http({
          method: "GET",
          url: url
        })
          .then(function mySuccess(response) {
            vm.showToast("transformed to mp4");
            var url = "/api/ai/" + vm.video;
            return $http({
              method: "GET",
              url: url
            })
          })
          .then(function(response) {
            vm.showToast(" Received ID from AI portal    " + response.data);
            vm.job_id = response.data;
            vm.startTimer(15000);
            //Start timer to look at status
          })
          .catch(function(error) {
            // this catches errors from the $http calls as well as from the explicit throw
            vm.showToast("An error occured: " + error);
          })
      } else {
        vm.showToast(vm.status + "No Video selected");
      }
    };

    /**
     *
     * StartTimer
     *
     *
     */
    vm.startTimer = function(interval) {
      //alert("Starting timer ......"+interval);
      $timeout(vm.getJobStatusRepeat, interval);
    };

    /**
     *
     * Find Videos
     *
     *
     */
    vm.findVideos = function() {
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
        vm.showToast(vm.status + "ERROR");
      });
    };
    vm.listOptions = {
      title: "Videos Received",
      noDataMessage: "You have no campaigns within this time range.",
      columns: {
        "Video": "item._id",
        "Campaign": "item.campaign",
        "Name": "item.name",
        "Email": "item.email",
        "Date Sent": "item.created_at",
        "Date Received ": "item.received"
      }
    };

    /*
     *
     * return Transformed
     *
     *
     * */
    vm.transformMP4 = function() {
      if (!!vm.video) {
        //foo is defined
        vm.showToast("Transforming to MP4");
        var url = "/api/mp4/" + vm.video;
        $http({
          method: "GET",
          url: url
        }).then(function mySucces(response) {
          vm.showToast("transformed to mp4");
        }, function myError(response) {
          vm.status = response.status;
          vm.showToast("ERROR" + vm.status);
        });
      } else {
        vm.showToast("No video selected");
      }
    };

    /**
     *
     *  Send To AI
     *
     */
    vm.sendToAI = function() {
      var url = "/api/ai/" + vm.video;
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {
        // alert("received from AI interface: Job ID is "+response.data);
        vm.job_id = response.data;
        vm.showToast("received from AI interface: Job ID is " + vm.job_id);
      }, function myError(response) {
        vm.status = response.status;
        vm.showToast(vm.status + "ERROR");
      });
    };
    /*
     *
     *
     *
     *
     * */
    vm.getJobs = function() {
      var url = "/api/jobs/";
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {
        vm.showToast("Jobs are: " + response.data);
      }, function myError(response) {
        vm.status = response.status;
        vm.showToast(vm.status + "ERROR");
      });
    };
    /**
     *
     *
     */
    vm.playVTT = function(){

      vm.showVideo(vm.video);

    };








    /*
     *
     *   JOB Results
     *
     * */
    vm.getJobResults = function() {
      var url = "/api/job_results/" + vm.job_id + "/" + vm.video;
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {


        alert("Job Results : " + response.data);


      }, function myError(response) {
        vm.status = response.status;
        vm.showToastt(vm.status + "ERROR");
      });
    };

    /*
     *
     *   JOB Status
     *
     * */
    vm.getJobStatus = function() {
      var url = "/api/job_status/" + vm.job_id;
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {
        vm.showToast("Job Status : " + response.data.status);
        vm.poll_again_after_seconds = response.data.poll_again_after_seconds;
        $log.info("polling after", vm.poll_again_after_seconds);
      }, function myError(response) {
        vm.status = response.status;
        vm.showToast(vm.status + "ERROR");
      });
    };
    /*
         *
         *   JOB ID
         *
         * */
    vm.setJobID = function() {

      var url = "/api/set_job/" + vm.job_id +"/" + vm.video;
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {
        $log.info("Setting Job id for video", vm.job_id,vm.video);
      }, function myError(response) {
        vm.status = response.status;
        vm.showToast(vm.status + "ERROR");
      });
    };
    /**
     *
     * StartTimer
     *
     *
     */
    vm.startTimer = function(interval) {
      $log.info("Starting timer ......", interval);
      $timeout(vm.getJobStatusRepeat, interval);
    };

    /*
     *
     *   JOB Status
     *
     * */
    // lazy coding do properly later
    vm.getJobStatusRepeat = function() {
      var url = "/api/job_status/" + vm.job_id;
      $http({
        method: "GET",
        url: url
      }).then(function mySucces(response) {
        //alert("poll again is "+ response.data.poll_again_after_seconds);
        vm.showToast("Job Status : " + response.data.status);
        vm.poll_again_after_seconds = response.data.poll_again_after_seconds * 1000;
        $log.info("polling after", vm.poll_again_after_seconds);
        //alert("polling after"+ vm.poll_again_after_seconds);
        if (vm.poll_again_after_seconds != 0) {
          vm.startTimer(vm.poll_again_after_seconds);
        } else if (response.data.status === 'finished') {
          vm.setJobID();
          vm.showToast("Getting Data");
          vm.getJobResults();
        }
      }, function myError(response) {
        vm.status = response.status;
        vm.showToast(vm.status + "ERROR");
      });
    };

    /**
     *
     * Show video
     *
     *
     * @param video
     */
    vm.showVideo = function(video) {
      vm.video = video;


      var videocontainer = document.getElementById('video-1');
      var videosource = document.getElementById('videoSrc');
      var videotrack = document.getElementById('video-1-track');
      videocontainer.pause();
      //	videosource.setAttribute('src', "" + videoElement.src);

    // var vttSource   = "http://ziller2.dyndns.org:9000/uploads/mp4/" +video.slice(0,-4) +'vtt';
      var vttSource   = "/static/temp/" + video.slice(0,-4) +'vtt';


    //  var videoSource = "http://ziller2.dyndns.org:9000/uploads/" + video; //upload_7c36bd5526c330fe8a355e3a4322f0eb.webm";




     // console.log("local video source is ",localVideoServer);

      var videoSource = localVideoServer +"/uploads/" + video; //upload_7c36bd5526c330fe8a355e3a4322f0eb.webm";
      //added alert to find video source
      alert(videoSource);

      videosource.setAttribute('src', videoSource);
      videotrack.setAttribute('src', vttSource);
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
