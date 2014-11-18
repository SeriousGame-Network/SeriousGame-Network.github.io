'use strict';

console.log("directives.js ...");

/* Directives */
angular.module('sgnApp.directives', [])
  .directive('timer', function($timeout) {
    return  {
      restrict: 'E',
      templateUrl: 'templates/timer.html',
      replace: true,
      link: function(scope, element, attrs) {
      var startTime = new Date();
      var timeoutId;

      function updateTime() {
        scope.timeTaken = new Date() - startTime;
      }

      function updateLater() {
        timeoutId = $timeout(function() {
          updateTime();
          updateLater();
        }, 1000);
      }

      element.bind('$destroy', function() {
        $timeout.cancel(timeoutId);
      });

      updateTime();
      updateLater();
    }
  }
});
