define(['app'], function(app) {
	app.controller('joinCtrl', function($scope) {
		$('body').scrollTop(0)
		layui.use(['form', 'laypage'], function() {
			var form = layui.form;
			var laypage = layui.laypage;
			form.render();
			//监听提交
			form.on('submit(formDemo)', function(data) {
				layer.msg(JSON.stringify(data.field));
				return false;
			});
			//执行一个laypage实例
			laypage.render({
				elem: 'pagination', //注意，这里的 test1 是 ID，不用加 # 号
				count: 50 //数据总数，从服务端得到
			});
		});
	});
});