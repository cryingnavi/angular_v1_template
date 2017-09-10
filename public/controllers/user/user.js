angular.module("app").register.controller("User", function($rootScope, $scope, $stateParams, $http, $state){
	var vm = this;
	vm.item = {};

	$http.get("/api/user/" + $stateParams.username).then(function(res){
		vm.item = res.data.body;
	});
});