'use strict';

angular.module('realTimeForumApp', ['firebase'])
  .controller('ThreadCtrl', function ($scope, $firebase)  {

  	var ref = new Firebase('https://jmchat.firebaseio.com');
  	
  	$scope.threads = $firebase(ref);
 
  	$scope.addThread= function(e) {
  		if (e.keyCode !==13) {
  			return;
  		}
  		$scope.threads.$add({
  			body: $scope.newThread
  		});
  	}
});