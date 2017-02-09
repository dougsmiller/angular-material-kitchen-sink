(function () {
  'use strict';


  angular
    .module('angularMaterialKitchenSink')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('tech', {
        url: '/tech',
        templateUrl: 'app/tech/tech.html',
        controller: 'TechController',
        controllerAs: 'tech'
      })
      .state('part1', {
        url: '/part1',
        templateUrl: 'app/part1/part1.html',
        controller: 'Part1Controller',
        controllerAs: 'part1'
      })
      .state('part2', {
        url: '/part2',
        templateUrl: 'app/part2/part2.html',
        controller: 'Part2Controller',
        controllerAs: 'part2'
      })
      .state('part3', {
        url: '/part3',
        templateUrl: 'app/part3/part3.html',
        controller: 'Part3Controller',
        controllerAs: 'part3'
      })
      .state('part4', {
        url: '/part4/:video',
        templateUrl: 'app/part4/part4.html',
        controller: 'Part4Controller',
        controllerAs: 'part4'
      })
      .state('autocomplete', {
        url: '/autocomplete',
        templateUrl: 'app/autocomplete/autocomplete.html',
        controller: 'AutocompleteController',
        controllerAs: 'autocomplete'
      })

      .state('button', {
        url: '/button',
        templateUrl: 'app/button/button.html',
        controller: 'ButtonController',
        controllerAs: 'button'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
