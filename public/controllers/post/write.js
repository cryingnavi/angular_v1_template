angular.module("app").register.controller("Write", function($rootScope, $scope, $state, $stateParams, $http){
	var vm = this;
	vm.item = {
		username: "",
		title: "",
		content: ""
	};

	vm.write = function(){
		vm.item.username = $rootScope.userData.username;
		$http.post("/api/list", vm.item).then(function(res){
			if(res.data.header.code === 20000){
				$state.go("list");
			}
			else{
				alert("실패!!");
			}
		});
	};
});