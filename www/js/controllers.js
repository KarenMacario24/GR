// iNICIAR FIREBASE
var config = {
	apiKey: "AIzaSyDiWiSXIcjQL1gaB05kPPz2yZwxlRSVRd4",
    authDomain: "grrrr-445fc.firebaseapp.com",
    databaseURL: "https://grrrr-445fc.firebaseio.com",
    projectId: "grrrr-445fc",
    storageBucket: "grrrr-445fc.appspot.com",
    messagingSenderId: "289156197296"
};
firebase.initializeApp(config);
var database = firebase.database();
angular.module('starter.controllers', [])

//.controller('DashCtrl', function($scope) {})
.controller("registro", function($scope) {
	$scope.user = {}
	$scope.validar = function(x) {
		$scope.user = x;
		firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(data){
			database.ref('users/' + data.user.uid).set({
				username: $scope.user.name,
				email: $scope.user.email
			});
}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  console.log(errorMessage)
});

	}
})
 
.controller("loginCtrl", function($scope,$state) {
	$scope.user={};
	$scope.inicio=function(x){
	$scope.user=x;
	firebase.auth().signInWithEmailAndPassword($scope.user.usuario, $scope.user.password).then(function(data){
		$state.go("inicio")
	}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
	}
})

.controller("inicio",function($scope){
	$scope.conta={
		"cuentas":"https://i.ytimg.com/vi/s9Jf1Kt6eDc/maxresdefault.jpg",
		"t-grafica":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAhSmLti3qd0mYO0ZFdHg9KUXvbGk0Rl6CquR44Ii5Tg3q-QF",
		"clasificacion":"http://elcontador.net/wp-content/uploads/2014/06/titular-debito-credito-saldo.png",
		"IVA":"https://economipedia.com/wp-content/uploads/2015/10/IVA-Impuesto-Valor-A%C3%B1adido.jpg"
	}





})












/*
$scope.cuentas = {
	"caja":"activo",
	"bancos": "activo",
	"clientes":"activo",
	"proveedores":"pasivo",
	"comisiones":"pasivo",
	"debito fiscal":"pasivo"
	
}

*/
