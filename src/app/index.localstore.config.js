(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(localStoreConfig);

  /** @ngInject */
  function localStoreConfig(localStorageServiceProvider) {
    // Enable log


    localStorageServiceProvider
      .setPrefix('ang_k_s');

  }

})();
