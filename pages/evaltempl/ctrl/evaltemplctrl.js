define(['app', 'blockUI', 'jquery'], function(app) {
	app.controller('evalTempl', function($scope, $rootScope, $http, blockUI, $timeout, $modal, $log) {

		//		blockUI.start("数据读取中~")
		//		$timeout(function() {
		//			$scope.$apply(function() {
		//				blockUI.stop();
		//			});
		//		}, 2000, false)
		//初始化表格。获取当前所有模板
		//		$scope.init = function(){
		//			$http({
		//				method:"post",
		//				url:"",
		//				data:""
		//			}).then(function(res){
		//				
		//			},function(err){
		//				
		//			})
		//		}
		$scope.all = false;
		$scope.titleShow = true;
		$scope.allChk = function() {
			$scope.titleShow = !$scope.all;
			$rootScope.data.data.map(function(value) {
				value.chk = $scope.all;
				console.log(value.chk)
				return value
			})
		}
		$scope.itemChk = function(val) {
			console.log(val)
			var anyonetrue = false,
				anyonefalse = false
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				if($rootScope.data.data[i].chk == false) {
					$scope.all = false;
					anyonefalse = true
				} else {
					anyonetrue = true
				}
			}
			$scope.all = !anyonefalse;
			$scope.titleShow = !anyonetrue;
			if(!val) {
				$scope.all = false;
			} else {
				$scope.titleShow = false;
			}

		}

		$scope.addtempl = function() {
			var data = {
				id: "",
				username: "user-5",
				sex: "女",
				city: "城市-5",
				sign: "签名-5",
				experience: 173,
				logins: 68,
				wealth: 60344147,
				classify: "新模板",
				score: 87,
				state: 0,
				hascon: 1,
				chk: false,
				content: {
					title: "新建模板",
					code: "无",
					beizhu: "无",
					leimu: [{
						name: "类目1",
						items: ['1.问题1']
					}],
					suggestion: ['对老师的建议']
				}
			}
			$rootScope.data.data.unshift(data)
			$scope.open($rootScope.data.data[0], 0)
		}
		$('body').scrollTop(0);
		$rootScope.data = {
			"code": 0,
			"msg": "",
			"count": 1000,
			data: [{
				"id": 10000,
				"username": "user-0",
				"sex": "女",
				"city": "城市-0",
				"sign": "签名-0",
				"experience": 255,
				"logins": 24,
				"wealth": 82830700,
				"classify": "测试模板1",
				"score": 57,
				chk: false,
				state: 0,
				hascon: 1,
				content: {
					title: "测试模板1",
					code: "ashdk1231",
					beizhu: "beizhu1",
					leimu: [{
						name: "类目1",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}, {
						name: "类目2",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}],
					suggestion: ['对老师的建议', '对班级的建议']
				}
			}, {
				"id": 10001,
				"username": "user-1",
				"sex": "男",
				"city": "城市-1",
				"sign": "签名-1",
				"experience": 884,
				"logins": 58,
				"wealth": 64928690,
				"classify": "测试模板2",
				"score": 27,
				chk: false,
				state: 0,
				hascon: 0,
				content: {
					title: "测试模板2",
					code: "ashdk1231",
					beizhu: "beizhu1",
					leimu: [{
						name: "类目1",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}, {
						name: "类目2",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}],
					suggestion: ['对老师的建议', '对班级的建议']
				}
			}, {
				"id": 10002,
				"username": "user-2",
				"sex": "女",
				"city": "城市-2",
				"sign": "签名-2",
				"experience": 650,
				"logins": 77,
				"wealth": 6298078,
				"classify": "测试模板3",
				"score": 31,
				state: 1,
				hascon: 1,
				chk: false,
				content: {
					title: "测试模板3",
					code: "ashdk1231",
					beizhu: "beizhu1",
					leimu: [{
						name: "类目1",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}, {
						name: "类目2",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}],
					suggestion: ['对老师的建议', '对班级的建议']
				}
			}, {
				"id": 10003,
				"username": "user-3",
				"sex": "女",
				"city": "城市-3",
				"sign": "签名-3",
				"experience": 362,
				"logins": 157,
				"wealth": 37117017,
				"classify": "测试模板4",
				"score": 68,
				state: 1,
				hascon: 1,
				chk: false,
				content: {
					title: "测试模板4",
					code: "ashdk1231",
					beizhu: "beizhu1",
					leimu: [{
						name: "类目1",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}, {
						name: "类目2",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}],
					suggestion: ['对老师的建议', '对班级的建议']
				}
			}, {
				"id": 10004,
				"username": "user-4",
				"sex": "男",
				"city": "城市-4",
				"sign": "签名-4",
				"experience": 807,
				"logins": 51,
				"wealth": 76263262,
				"classify": "测试模板5",
				"score": 6,
				state: 1,
				hascon: 1,
				chk: false,
				content: {
					title: "测试模板5",
					code: "ashdk1231",
					beizhu: "beizhu1",
					leimu: [{
						name: "类目1",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}, {
						name: "类目2",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}],
					suggestion: ['对老师的建议', '对班级的建议']
				}
			}, {
				"id": 10005,
				"username": "user-5",
				"sex": "女",
				"city": "城市-5",
				"sign": "签名-5",
				"experience": 173,
				"logins": 68,
				"wealth": 60344147,
				"classify": "测试模板6",
				"score": 87,
				state: 1,
				hascon: 1,
				chk: false,
				content: {
					title: "测试模板6",
					code: "ashdk1231",
					beizhu: "beizhu1",
					leimu: [{
						name: "类目1",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}, {
						name: "类目2",
						items: ['1.问题1', '2.问题2', '3.问题3', '4.问题4']
					}],
					suggestion: ['对老师的建议', '对班级的建议']
				}
			}]
		}
		layui.use(['table', 'laypage'], function() {
			var table = layui.table;
			var laypage = layui.laypage;
			//执行一个laypage实例
			laypage.render({
				elem: 'pagination', //注意，是 ID，不用加 # 号
				count: 50 //数据总数，从服务端得到
			});

		});
		//ng模态框部分
		//		$rootScope.ddd = "12345qwer"
		// list  
		// open click  
		$scope.open = function(x, disable) {
			var modalInstance = $modal.open({
				templateUrl: 'evalTempl.html',
				controller: 'evalTemplModalCtrl', // specify controller for modal  
				//size: size,
				resolve: {
					items: function() {
						return x;
					}
				}
			});
			// modal return result  
			modalInstance.result.then(function(selectedItem) {
				$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date())
			});
		}
		//模板操作-预览
		$scope.preview = function(x) {
			if(!x.hascon) {
				return layer.confirm("该模板尚未添加考评内容，请先编辑", {
					icon: 0,
					title: "提示",
					btn: ['好']
				}, function(index) {
					layer.close(index)
				})
			}
			//弹出编辑模态窗口
			console.log(JSON.stringify(x))
			setCookie('data', JSON.stringify(x), 30)
			window.open("./preview.html")
			//$scope.open(x,1)
		}
		//设置cookie 封装函数
		function setCookie(k, v, ex) {
			var now = new Date()
			var d = now.getDate()
			now.setDate(d + ex)
			document.cookie = k + "=" + v + ";expires=" + now.toUTCString();
		}
		//模板操作-编辑
		$scope.edit = function(x) {
			if(x.state) {
				return layer.confirm("该模板正在使用中，无法编辑", {
					icon: 0,
					title: "提示",
					btn: ['好']
				}, function(index) {
					layer.close(index)
				})
			}
			//弹出编辑模态窗口
			$scope.open(x, 0)
		}
		//模板操作-复制
		$scope.templcopy = function(x) {
			console.log(x)
			//			$http({
			//				method: "post",
			//				url: "",
			//				data: x.id
			//			}).then(function(res) {
			//				layer.msg("模板复制成功")
			//				//$scope.init()
			//			}, function(err) {
			//				layer.msg("模板复制失败")
			//			})
			$rootScope.data.data.unshift({
				id: x.id + '-copy',
				username: "user-5",
				sex: "女",
				city: "城市-5",
				sign: "签名-5",
				experience: 173,
				logins: 68,
				wealth: '无',
				classify: x.classify + "-副本",
				score: 87,
				state: 0,
				hascon: 1,
				chk: false,
				content: {
					title: x.classify + "-副本",
					code: x.content.code + "-副本",
					beizhu: x.content.beizhu + "-副本",
					leimu: x.content.leimu,
					suggestion: x.content.suggestion
				}
			})

		}
		//模板操作-删除
		$scope.del = function(x) {
			$http({
				method: "post",
				url: "",
				data: x.id
			}).then(function(res) {
				layer.msg("模板删除成功")
				//$scope.init()
			}, function(err) {
				layer.msg("模板删除失败")
			})
		}
	});
	app.controller('evalTemplModalCtrl', function($rootScope, $scope, $modalInstance, items) {
		$scope.items = items;

		$scope.leimuAdd = function() {
			console.log(items.id)
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				console.log($rootScope.data.data[i].id)
				if($rootScope.data.data[i].id == items.id) {
					$rootScope.data.data[i].content.leimu.push({
						name: '新类目',
						items: ["1."]
					})
					console.log($rootScope.data.data[i])
					//$scope.$apply($rootScope.data)
					break
				}
			}
		}
		$scope.leimuRm = function(index) {
			console.log(items.id, index)
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				console.log($rootScope.data.data[i].id)
				if($rootScope.data.data[i].id == items.id) {
					$rootScope.data.data[i].content.leimu.splice(index, 1)
					break
				}
			}
		}
		$scope.leimuItemAdd = function(upindex) {
			console.log(items.id)
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				console.log($rootScope.data.data[i].id)
				if($rootScope.data.data[i].id == items.id) {
					$rootScope.data.data[i].content.leimu[upindex].items.push("111")
					break
				}
			}
		}
		$scope.leimuItemRm = function(upindex, index) {
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				console.log($rootScope.data.data[i].id)
				if($rootScope.data.data[i].id == items.id) {
					$rootScope.data.data[i].content.leimu[upindex].items.splice(index, 1)
					break
				}
			}
		}
		$scope.suggestionAdd = function() {
			console.log(items.id)
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				console.log($rootScope.data.data[i].id)
				if($rootScope.data.data[i].id == items.id) {
					$rootScope.data.data[i].content.suggestion.push("新建议")
					break
				}
			}
		}
		$scope.suggestionRm = function(index) {
			console.log(items.id, index)
			for(var i = 0; i < $rootScope.data.data.length; i++) {
				console.log($rootScope.data.data[i].id)
				if($rootScope.data.data[i].id == items.id) {
					$rootScope.data.data[i].content.suggestion.splice(index, 1)
					break
				}
			}
		}
		// ok click  
		$scope.ok = function() {
			layer.confirm("确定修改？", {
				icon: 0,
				title: "提示",
				btn: ["确认", "取消"]
			}, function(index) {
				layer.close(index);
				//发送至后端
				//					$http({
				//						method:"post",
				//						url:"",
				//						data:""
				//					}).then(function(res){
				//						
				//					},function(err){
				//						
				//					})
				$modalInstance.close('ok');
			}, function(index) {
				layer.close(index);
			})
		};
		// cancel click  
		$scope.cancel = function() {
			layer.confirm("确定退出？", {
				icon: 0,
				title: "提示",
				btn: ["确定", "取消"]
			}, function(index) {
				layer.close(index);
				$modalInstance.dismiss('cancel');
			}, function(index) {
				layer.close(index);
			})

		}
	});
});