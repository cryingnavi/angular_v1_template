"use strict";
require([
	"routes.js"
], function(routes){
	var app = angular.module("app", ["naver"]);
	app.config(function($naverRouterProvider, $stateProvider, $controllerProvider, $filterProvider, $compileProvider, $provide, $urlRouterProvider){
		$naverRouterProvider.setViewRoot("/views");
		$naverRouterProvider.setCtrlRoot("/controllers");
		$naverRouterProvider.setStateProvider($stateProvider);

		app.register = {
			controller: $controllerProvider.register,
			filter: $filterProvider.register,
			directive: $compileProvider.directive,
			service: $provide.service
		};
		
		//반드시 로그인된 상태에서만 진입 가능하도록 하기 위한 전처리 기능
		function checkLoggedin($q, $timeout, $rootScope, $state){
			var deferred = $q.defer();
			if($rootScope.isLogin === false){
				$timeout(function(){
					$state.go("home");
					deferred.reject();
				});
			}
			else{
				deferred.resolve();
			}
			return deferred.promise;
		}
		
		//반드시 로그인되지 않은 상태에서만 진입 가능하도록 하기 위한 전처리 기능
		function checkNoLoggedin($q, $timeout, $location, $rootScope){
			var deferred = $q.defer();
			if($rootScope.isLogin === false){
				deferred.resolve();
			}
			else{
				deferred.reject();
			}
			return deferred.promise;
		}

		var router = $naverRouterProvider.router;
		for(var route in routes){
			if(routes[route].isLogin === true){
				routes[route].resolve = {
					checkLoggedin: checkLoggedin
				};
			}

			if(routes[route].isLogin === false){
				routes[route].resolve = {
					checkNoLoggedin: checkNoLoggedin
				};
			}
			router(route, routes[route]);
		}

		$urlRouterProvider.otherwise("/");
	});
	
	app.run(function($q, $rootScope, $http, $state){
		//로그인 여부를 판단하는 속성
		$rootScope.isLogin = false;
		$rootScope.userData = {};

		$rootScope.$on("login", function(event, data){
			$rootScope.isLogin = true;
			$rootScope.userData = data;
		});
		
		$rootScope.$on("logout", function(){
			$rootScope.isLogin = false;
			$rootScope.userData = {};
		});

		
		$rootScope.logout = function(){
			$http.post("/api/logout").then(function(res){
				if(res.data.header.code === 20000){
					$rootScope.$emit("logout");
					$state.go("home");
				}
			});
		};
	});

	angular.bootstrap(document, ["app"]);
});