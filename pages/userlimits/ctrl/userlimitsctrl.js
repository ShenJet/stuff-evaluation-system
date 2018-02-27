define(['app'], function(app) {
	app.controller('userlimits', function($rootScope, $scope, $http, $modal, $log) {
		console.log($rootScope.alllimits)
		//		$http({
		//			method:'',
		//			url:'',
		//			data:
		//		}).then(function(res){
		//			
		//		},function(err){
		//			
		//		})
		
		$scope.all = false ;
		$scope.allChk = function(){
			console.log(1)
			$scope.data.map(function(value){
				value.chk = $scope.all;
				console.log($scope.data)
				return value
			})
		}
		$scope.data = [{
			id: 1,
			name: "jack",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}, {
			id: 2,
			name: "steve",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}, {
			id: 3,
			name: "helen",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}, {
			id: 4,
			name: "steven",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}, {
			id: 5,
			name: "jonh",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}, {
			id: 6,
			name: "joe",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}, {
			id: 1,
			name: "York",
			position: "讲师",
			tel: "13866668888",
			mail: "666@qq.com",
			role: "管理员",
			state: 1,
			chk:false
		}]
		layui.use(['element', 'form', 'laypage'], function() {
			window.form = layui.form;
			var laypage = layui.laypage,
				element = layui.element;
			
			form.render();
			//监听提交
			form.on('submit(addrole)', function(data) {
				layer.msg(JSON.stringify(data.field));

				return false;
			});
			form.on('submit(mod)', function(data) {
				layer.msg(JSON.stringify(data.field));
				$rootScope.cancel()
				//				$http({
				//					method:"post",
				//					url:"",
				//					data:JSON.stringify(data.field)
				//				}).then(function(res){
				//					
				//				},function(err){
				//					
				//				})
				return false;
			});
			//执行一个laypage实例
			laypage.render({
				elem: 'pagination', //注意，这里的 test1 是 ID，不用加 # 号
				count: 50 //数据总数，从服务端得到
			});
		});

		$scope.layer_roleadd = function() {
			layer.open({
				type: 1,
				title: "新增用户",
				area: ['640px', '300px'],
				content: `
				<form class="layui-form" id="layerform">
				  <div class="layui-form-item">
				    <label class="layui-form-label">角色名</label>
				    <div class="layui-input-block">
				      <input type="text" name="name" required  lay-verify="required" placeholder="请输入角色名" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				   
				  <div class="layui-form-item layui-form-text">
				    <label class="layui-form-label">备注</label>
				    <div class="layui-input-block">
				      <textarea name="beizhu" placeholder="请输入备注" class="layui-textarea"></textarea>
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <div class="layui-input-block">
				      <button class="layui-btn" lay-submit lay-filter="addrole">确认新增</button>
				      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
				    </div>
				  </div>
				</form>
				`
			})
			form.render();
		}

		$scope.layer_limitsmod = function(x) {
			console.log(x)
			var modalInstance = $modal.open({
				title: "权限设置",
				keyboard: true,
				controller: ModalInstanceCtrl,
				resolve: {
					items: function() {
						return $rootScope.alllimits;
					}
				},
				windowClass: 'limitsele-Modal',
				template: `
				<p class="layui-layer-title">权限设置</p>
				<form class="layui-form" id="limitssele">
		  			<div class="limitssele">
						<ul class="layui-text" ng-repeat="x in alllimits track by $index" ng-init="index=$index">
							<h3><input name="{{x.title}}" type="checkbox" class="limitsele" ng-model="x.state" ng-change="sele(x)" /> {{x.title}}</h3>
							<li class="" ng-repeat="y in x.items track by $index">
								<input name="{{y}}" type="checkbox" class="limitsele" ng-model="x.itemsState[$index]" ng-change="itemsele(y,index,$index,x.itemsState[$index])" /> {{y}}
							</li>
						</ul>
					</div>
				  <div class="layui-form-item">
				    <div class="layui-input-block">
				      <button class="layui-btn" lay-submit lay-filter="mod">确认修改</button>
				    	  <button class="layui-btn layui-btn-primary" ng-click="cancel()">取消</button>
				    </div>
				  </div>
				</form>
				`
				
			});
		//form.render();
		}

		var ModalInstanceCtrl = function($scope, $modalInstance, items) {
//			$scope.items = items;
//			$scope.selected = {
//				item: $scope.items = []
//			};
//			$rootScope.ok = function() {
//				$modalInstance.close($scope.selected);
//			};
			$rootScope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
		}
		$rootScope.sele = function(x) {
			console.log(x)
			for(var i = 0; i < x.itemsState.length; i++) {
				x.itemsState[i] = x.state;
			}
		}
		$rootScope.itemsele = function(y, parentindex, index, state) {
			console.log(y, parentindex, index, state)
			if(!state) {
				$rootScope.alllimits[parentindex].state = false;
			} else {
				for(var i = 0; i < $rootScope.alllimits[parentindex].itemsState.length; i++) {
					if(!$rootScope.alllimits[parentindex].itemsState[i]) {
						return 0
					}
				}
				$rootScope.alllimits[parentindex].state = true;
			}
		}

	})
});