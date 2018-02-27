define(['app'], function(app) {
	app.controller('classnewCtrl', function($scope) {
		$('body').scrollTop(0)
		layui.use(['element','form'], function() {
			console.log("classnewCtrl")
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