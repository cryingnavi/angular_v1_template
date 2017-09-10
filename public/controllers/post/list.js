angular.module("app").register.controller("List", function($scope, $state, $stateParams, $http){
	var vm = this;

	vm.items = [];
	vm.detail = function(id){
		$state.go("detail", {id: id});
	};

	$http.get("/api/list").then(function(res){
		vm.items = res.data.body;
	});

	vm.write = function(){
		$state.go("write");
	};
});