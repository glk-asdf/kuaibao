var kuaibao=angular.module('kuaibao',['ngAnimate','ngTouch','ngRoute'])
kuaibao.controller('kuaibaoCtrl',['$scope',function($scope){
	
}])
kuaibao.controller('kbCtrl',['$scope',function($scope){
	$scope.asd=123;

}]).controller('spCtrl',['$scope',function($scope){

}]).controller('zbCtrl',['$scope',function($scope){

}]).controller('gzCtrl',['$scope',function($scope){
	
}]).controller('ylCtrl',['$scope',function($scope){
	
}]).controller('shCtrl',['$scope',function($scope){
	
}]).controller('mnCtrl',['$scope',function($scope){
	
}]).controller('jsCtrl',['$scope',function($scope){
	
}])
kuaibao.directive('kbGheader',[function(){
	return {
		restrict:'E',
		templateUrl:'views/template1/header.html',
		replace:true,
		link:function($scope,elem){
			$scope.qwe=789;
			// $scope.$apply();
		}
	}
}])
kuaibao.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		controller:"kbCtrl",
		templateUrl:'views/template1/kuaibao.html'
	}).when('/kuaibao',{
		controller:"kbCtrl",
		templateUrl:'views/template1/kuaibao.html'
	}).when('/shipin',{
		controller:"spCtrl",
		templateUrl:'views/template1/shipin.html'
	}).when('/zhibo',{
		controller:"zbCtrl",
		templateUrl:'views/template1/zhibo.html'
	}).when('/guanzhu',{
		controller:"gzCtrl",
		templateUrl:'views/template1/guanzhu.html'
	}).when('/yvle',{
		controller:"ylCtrl",
		templateUrl:'views/template1/yvle.html'
	}).when('/shehui',{
		controller:"shCtrl",
		templateUrl:'views/template1/shehui.html'
	}).when('/meinv',{
		controller:"mnCtrl",
		templateUrl:'views/template1/meinv.html'
	}).when('/junshi',{
		controller:"jsCtrl",
		templateUrl:'views/template1/junshi.html'
	}).otherwise({
		redirectTo:'/'
	})
}])