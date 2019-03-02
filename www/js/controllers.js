// iNICIAR FIREBASE
var config = {
	apiKey: "AIzaSyDOqrfYKD17L-yC17PPgg1ws1lGCFd_QzQ",
	authDomain: "groca-b65e5.firebaseapp.com",
	databaseURL: "https://groca-b65e5.firebaseio.com",
	projectId: "groca-b65e5",
	storageBucket: "groca-b65e5.appspot.com",
	messagingSenderId: "763527136279"
};
firebase.initializeApp(config);

angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {})
.controller("registro", function($scope) {
	$scope.user = {}
	$scope.validar = function(x) {
		$scope.user = x;
		firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
});

	}
})
 
