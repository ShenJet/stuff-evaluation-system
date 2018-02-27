define(['app'], function(app) {
	app.controller('users', function($scope, $http) {

		//		$http({
		//			method:'',
		//			url:'',
		//			data:
		//		
		//		}).then(function(res){
		//			
		//		},function(err){
		//			
		//		})
		$scope.all = false ;
		$scope.allChk = function(){
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
		layui.use(['form', 'laypage'], function() {
			window.form = layui.form;
			var laypage = layui.laypage;
			form.render();
			//监听提交
			form.on('submit(formDemo)', function(data) {
				layer.msg(JSON.stringify(data.field));
				return false;
			});
			form.on('submit(layerform)', function(data) {
				layer.msg(JSON.stringify(data.field));
				return false;
			});
			form.on('submit(mod)', function(data) {
				layer.msg(JSON.stringify(data.field));
				alert(222)
				return false;
			});
			//执行一个laypage实例
			laypage.render({
				elem: 'pagination', //注意，这里的 test1 是 ID，不用加 # 号
				count: 50 //数据总数，从服务端得到
			});
		});

		$scope.layer_useradd = function() {
			layer.open({
				type: 1,
				title: "新增用户",
				area:['640px', '600px'],
				content: `
				<form class="layui-form" id="layerform" action="">
				  <div class="layui-form-item">
				    <label class="layui-form-label">姓名</label>
				    <div class="layui-input-block">
				      <input type="text" name="name" required  lay-verify="required" placeholder="请输入用户姓名" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				    <div class="layui-form-item">
				    <label class="layui-form-label">职位</label>
				    <div class="layui-input-block">
				      <select name="position" lay-verify="required">
				        <option value="">--请选择职位--</option>
				        <option value="0">讲师</option>
				        <option value="1">管理员</option>
				        <option value="2">班主任</option>
				        <option value="3">其他</option>
				      </select>
				    </div>
				  </div>
				    <div class="layui-form-item">
				    <label class="layui-form-label">电话</label>
				    <div class="layui-input-block">
				      <input type="text" name="tel" required  lay-verify="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">邮箱</label>
				    <div class="layui-input-block">
				      <input type="text" name="mail" required  lay-verify="email" placeholder="请输入邮箱" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">角色</label>
				    <div class="layui-input-block">
				      <select name="role" lay-verify="required">
				        <option value="">--请选择角色--</option>
				        <option value="0">管理员</option>
				        <option value="1">管理员</option>
				        <option value="2">其他</option>
				      </select>
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">状态</label>
				    <div class="layui-input-block">
				      <input type="radio" name="state" value="0" title="启用" checked>
				      <input type="radio" name="state" value="1" title="禁用">
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
				      <button class="layui-btn" lay-submit lay-filter="layerform">立即提交</button>
				      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
				    </div>
				  </div>
				</form>
				`
			})
			form.render();
		}
			
		$scope.preview = function(id){
			console.log(id)
			//根据id获取其信息
//			$http({
//				method:"get",
//				url:""
//			}).then(function(res){
//			
//			},function(err){
//			
//			})
			layer.open({
				type: 1,
				title: "用户预览",
				area:['640px', '600px'],
				content: `
				<form class="layui-form" id="layerform" action="">
				  <div class="layui-form-item">
				    <label class="layui-form-label">姓名</label>
				    <div class="layui-input-block">
				      <input type="text" name="name" required  lay-verify="required" value="`
				+ 'jack' +
				`" autocomplete="off" class="layui-input" disabled>
				    </div>
				  </div>
				    <div class="layui-form-item">
				    <label class="layui-form-label">职位</label>
				    <div class="layui-input-block">
				      <input type="text" name="tel" required  lay-verify="position" value="`+
				      '主管'
				      +`" autocomplete="off" class="layui-input" disabled>
				    </div>
				  </div>
				    <div class="layui-form-item">
				    <label class="layui-form-label">电话</label>
				    <div class="layui-input-block">
				      <input type="text" name="tel" required  lay-verify="phone" value="`+
				      13814878888
				      +`" autocomplete="off" class="layui-input" disabled>
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">邮箱</label>
				    <div class="layui-input-block">
				      <input type="text" name="mail" required  lay-verify="email" value="`+
				      'test@qq.com'
				      +`" autocomplete="off" class="layui-input" disabled>
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">角色</label>
				    <div class="layui-input-block">
				      <input type="text" name="tel" required  lay-verify="role" value="`+
				      '讲师'
				      +`" autocomplete="off" class="layui-input" disabled>
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">状态</label>
				    <div class="layui-input-block">
				      <input type="radio" name="state" value="0" title="启用" checked disabled>
				      <input type="radio" name="state" value="1" title="禁用" disabled>
				    </div>
				  </div>
				  <div class="layui-form-item layui-form-text">
				    <label class="layui-form-label">备注</label>
				    <div class="layui-input-block">
				      <textarea name="beizhu" value="请输入备注" class="layui-textarea" disabled>
				      </textarea>
				    </div>
				  </div>
				</form>
				`
			})
			form.render();
		}
		$scope.mod = function(id){
			console.log(id)
			//根据id获取其信息
//			$http({
//				method:"get",
//				url:""
//			}).then(function(res){
//			
//			},function(err){
//			
//			})
			layer.open({
				type: 1,
				title: "修改信息",
				area:['640px', '600px'],
				content: `
				<form class="layui-form" id="layerform" action="">
				  <div class="layui-form-item">
				    <label class="layui-form-label">姓名</label>
				    <div class="layui-input-block">
				      <input type="text" name="name" required  lay-verify="required" placeholder="请输入用户姓名" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				    <div class="layui-form-item">
				    <label class="layui-form-label">职位</label>
				    <div class="layui-input-block">
				      <select name="position" lay-verify="required">
				        <option value="">--请选择职位--</option>
				        <option value="0">讲师</option>
				        <option value="1">管理员</option>
				        <option value="2">班主任</option>
				        <option value="3">其他</option>
				      </select>
				    </div>
				  </div>
				    <div class="layui-form-item">
				    <label class="layui-form-label">电话</label>
				    <div class="layui-input-block">
				      <input type="text" name="tel" required  lay-verify="phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">邮箱</label>
				    <div class="layui-input-block">
				      <input type="text" name="mail" required  lay-verify="email" placeholder="请输入邮箱" autocomplete="off" class="layui-input">
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">角色</label>
				    <div class="layui-input-block">
				      <select name="role" lay-verify="required">
				        <option value="">--请选择角色--</option>
				        <option value="0">管理员</option>
				        <option value="1">管理员</option>
				        <option value="2">其他</option>
				      </select>
				    </div>
				  </div>
				  <div class="layui-form-item">
				    <label class="layui-form-label">状态</label>
				    <div class="layui-input-block">
				      <input type="radio" name="state" value="0" title="启用" checked>
				      <input type="radio" name="state" value="1" title="禁用">
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
				      <button class="layui-btn" lay-submit lay-filter="mod">立即提交</button>
				      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
				    </div>
				  </div>
				</form>
				`
			})
			form.render();
		
			
		}
	})
});