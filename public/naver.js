(function(){
var naver = angular.module("naver", ["ui.router", "ngMessages"]);
$provider = naver.provider;
$service = naver.service;
$controller = naver.controller;
$filter = naver.filter;
$directive = naver.directive;
$factory = naver.factory;

$provider("$naverRouter", function(){
	var viewRoot = "", ctrlRoot = "", $stateProvider = null;

	this.$get = function(){
		return this;
	};

	this.setViewRoot = function(vr){
		viewRoot = vr;
	};

	this.getViewRoot = function(){
		return viewRoot;
	};

	this.setCtrlRoot = function(cr){
		ctrlRoot = cr;
	};

	this.getCtrlRoot = function(){
		return ctrlRoot;
	};

	this.setStateProvider = function(sp){
		$stateProvider = sp;
	};

	var resolveDependencies = function ($q, $rootScope, dependencies) {
		var defer = $q.defer();
		require(dependencies, function () {
			defer.resolve();
			$rootScope.$apply()
		}, function(){
			alert("", "네트워크에 접속할 수 없습니다. 네트워크 연결상태를 확인해주세요.");
		});

		return defer.promise;
	};

	this.router = function(stateName, config) {
		var routeDef = {}, baseFileName = "";

		if(config.name){
			baseFileName = config.name.charAt(0).toLowerCase() + config.name.substr(1);
			baseFileName = (config.path || "") + "/" + baseFileName;
		}

		if(config.url){
			routeDef.url = config.url;
			routeDef.cache = true;
		}

		if(config.params){
			routeDef.params = config.params;
		}

		if(config.hasOwnProperty("abstract")){
			routeDef.abstract = config.abstract;
		}

		if(config.views){
			routeDef.views = { };
			if(baseFileName){
				routeDef.views[config.views] = {
					templateUrl: viewRoot + baseFileName + ".html",
					controller: config.name.charAt(0).toUpperCase() + config.name.substr(1),
					controllerAs: "vm"
				};
			}

			if(config.resolve){
				routeDef.views[config.views].resolve = config.resolve;
			}
			else{
				routeDef.views[config.views].resolve = {};
			}
			if(baseFileName){
				routeDef.views[config.views].resolve.load = function ($q, $rootScope) {
					var dependencies = [ctrlRoot + baseFileName + ".js"];
					return resolveDependencies($q, $rootScope, dependencies);
				};
			}
		}
		else{
			if(baseFileName){
				routeDef.templateUrl = viewRoot + baseFileName + ".html";
				routeDef.controller = config.name.charAt(0).toUpperCase() + config.name.substr(1);
				routeDef.controllerAs = "vm";
			}

			if(config.resolve){
				routeDef.resolve = config.resolve;
			}
			else{
				routeDef.resolve = {};
			}
			if(baseFileName){
				routeDef.resolve.load = function ($q, $rootScope) {
					var dependencies = [ctrlRoot + baseFileName + ".js"];
					return resolveDependencies($q, $rootScope, dependencies);
				}
			}
		}

		$stateProvider.state(stateName, routeDef);
	}
});

$service("$naverPopup", function($rootScope, $http, $q, $rootScope){
	this.alert = function(){
		
	};
});

})();