angular.module("app").register.controller("Home", function($scope, $stateParams, $state, $http){
	var vm = this;
	vm.username = "super";
	vm.pwd = "";

	vm.login = function(){
		//로그인 API
		$http.post("/api/login", {
			username: vm.username,
			pwd: vm.pwd
		}).then(function(res){
			if(res.data.header.code === 20000){
				$scope.$emit("login", res.data.body);
				$state.go("list");
			}
		});
	};
});