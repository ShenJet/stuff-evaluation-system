define(['app'], function (app) {
    app.controller('newsDetailCtrl', function ($scope) {
		
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
		
		$('#file').change(function(e) {
			//console.log(this.files[0])
			if(this.files[0]) {
				$scope.fileObj = this.files[0];
					if($scope.fileObj){
				}
				var dataURL = window.URL.createObjectURL(this.files[0]);
				$("#label").css("background", "url(" + dataURL + ") no-repeat 30px 30px") ;
				$("#label").css("background-size", "100px 100px") ;
			}
		})
		
    })
}); 
