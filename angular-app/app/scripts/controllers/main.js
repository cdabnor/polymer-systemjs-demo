'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope) {

    $scope.handleClick = function() {
    	console.log('angular-app: moment version: ' + moment.version);
    };

  });
