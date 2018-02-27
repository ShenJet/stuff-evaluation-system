define(['routes', 'loader', 'angularAMD', 'ui-bootstrap',
	'angular-sanitize', 'blockUI', 'ui.route'
], function(config, loader, angularAMD) {
	var app = angular.module("webapp", ['ngSanitize',
		'ui.bootstrap', 'ui.router', 'blockUI'
	]);
	app.controller("root", function($rootScope, $scope, $state) {
		$rootScope.$state = $state;
		$rootScope.alllimits = [{
			title:"考评管理",
			state:false,
			items:['未审查询','考评列表','考评模板','已审查询'],
			itemsState:[false,false,false,false]
		},{
			title:"班级管理",
			state:false,
			items:['新增班级','修改班级'],
			itemsState:[false,false]
		},{
			title:"统计分析",
			state:false,
			items:['按月统计','按季统计','按年统计'],
			itemsState:[false,false,false]
		},{
			title:"用户管理",
			state:false,
			items:['用户列表','角色权限'],
			itemsState:[false,false]
		},{
			title:"个人中心",
			state:false,
			items:['个人信息','修改密码'],
			itemsState:[false,false]
		}] ;
		
		$rootScope.stars0 = ['星','星','星','星','星'] ;
		
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			console.log(toState.name);
			var state = toState.name
			$("#"+state).addClass('layui-this')
			$(".layui-nav-item").removeClass("layui-nav-itemed")
			$("#"+state).parent().parent().addClass('layui-nav-itemed')
		});
	})
	app.config(function($stateProvider, $urlRouterProvider) {
		// 配置路由
		if(config.routes != undefined) {
			angular.forEach(config.routes, function(route, path) {
				$stateProvider.state(path, {
					templateUrl: route.templateUrl,
					url: route.url,
					resolve: loader(route.dependencies),
					// allowAnonymous: route.allowAnonymous
				});
			});
		}
		// 默认路由
		if(config.defaultRoute != undefined) {
			$urlRouterProvider.when("", config.defaultRoute);
		}
	})
	return angularAMD.bootstrap(app);
});