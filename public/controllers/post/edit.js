angular.module("app").register.controller("Edit", function($scope, $stateParams, $http, $state){
	var vm = this;
	vm.item = {};

	$http.get("/api/list/" + $stateParams.id).then(function(res){
		vm.item = res.data.body;
	});

	vm.edit = function(){
		$http.put("/api/edit/" + $stateParams.id, {
			title: vm.item.title,
			content: vm.item.content
		}).then(function(res){
			if(res.data.header.code === 20000){
				$state.go("detail", {
					id: $stateParams.id
				});
			}
		});
		
	};
});