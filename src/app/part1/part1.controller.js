(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .controller('Part1Controller', Part1Controller);

  /** @ngInject */
  function Part1Controller($http)
  {

    var vm = this;

    vm.email = "";
    vm.time = "1";
    vm.question="";
    vm.name ="";
    vm.campaign="";

    vm.send = function () {

    // '/mail/:to/name:/:campaign/:time/:question'
      var url = "/api/mail/"+vm.email+"/"+vm.name+"/"+vm.campaign+"/"+vm.time+"/"+vm.question;
     // var url = "http://ziller2.dyndns.org:9080/api/mail/"+vm.email+"/"+vm.name+"/"+vm.campaign+"/"+vm.time+"/"+vm.question;

    //  alert(url);
      $http({
        method: "POST",
        url: url
      }).then(function mySucces(response) {
        vm.response = response.data;
        alert(angular.toJson(vm.response));
      }, function myError(response) {
        vm.status = response.statusText;
       // alert(vm.status + " quack");
      });

    }

  }
})();
