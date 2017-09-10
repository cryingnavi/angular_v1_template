angular.module("app").register.controller("Detail", function($rootScope, $scope, $stateParams, $http, $state){
	var vm = this;
	vm.item = {};

	$http.get("/api/list/" + $stateParams.id).then(function(res){
		vm.item = res.data.body;
	});

	vm.delete = function(){
		if(window.confirm("삭제하겠습니까?")){
			$http.delete("/api/list/" + $stateParams.id).then(function(res){
				if(res.data.header.code === 20000){
					$state.go("list");
				}
			});
		}
	};
	vm.edit = function(){
		$state.go("edit", {
			id: $stateParams.id
		});
	};
});