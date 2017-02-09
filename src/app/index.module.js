(function() {
  'use strict';

  angular
    .module('angularMaterialKitchenSink', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial','ngMdIcons', 'toastr'])
    .directive('jnList', [
        function()  {
        return {
          restrict: 'E',
          scope: {
            data: "=",
            options: "="
          },
          templateUrl: 'jn_list.html',
          link: function(scope, element, attrs) {
          // Set the column count as the number passed in options
          if (scope.options.columns) {
    scope.columnCount = Object.keys(scope.options.columns).length;
  }
}
};
}
  ]);

})();
