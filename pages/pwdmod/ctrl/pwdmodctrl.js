define(['app'], function (app) {
    app.controller('pwdmod', function ($scope) {
		layui.use(['element','form'], function() {
			var element = layui.element;
			var form = layui.form;
			form.render();
			//监听提交
			form.on('submit(formDemo)', function(data) {
				layer.msg(JSON.stringify(data.field));
				
				return false;
			});
		});
    	
    });
}); 
