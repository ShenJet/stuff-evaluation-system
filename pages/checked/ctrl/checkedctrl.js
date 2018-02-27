define(['app'], function(app) {
	app.controller('checkedCtrl', function($rootScope, $scope, $stateParams, $http,  $modal, $log) {
		console.log($rootScope.alllimits);
		//		$http({
		//			method:'',
		//			url:'',
		//			data:
		//		}).then(function(res){
		//			
		//		},function(err){
		//			
		//		})
		$scope.data = [{
			id: 1,
			class: "FED1707",
			name: "jack",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
		}, {
			id: 2,
			class: "FED1707",
			name: "aaa",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
		}, {
			id: 3,
			class: "FED1707",
			name: "bbb",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
		}, {
			id: 4,
			class: "FED1707",
			name: "ccc",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
		}, {
			id: 5,
			class: "FED1707",
			name: "ddd",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
		}, {
			id: 6,
			class: "FED1707",
			name: "eeee",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
		}, {
			id: 1,
			class: "FED1707",
			name: "qewee",
			type: "[alsd]大学生实训班",
			count: 8,
			count_usual: 5,
			aver: '5.0',
			date: "2017-0706",
			state: 1
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

			//分页
			laypage.render({
				elem: 'pagination', //ID，不加 # 号
				limit: 10, //每页条数
				//limits:[10, 20, 30, 40, 50],//配合limit展示下拉选项
				count: 100, //数据总数，从服务端得到
				curr: 1,
				groups: 5, //连续出现的页码个数
				prev: "上一页",
				next: "下一页",
				first: "首页",
				last: "尾页",
				layout: ['prev', 'page', 'next'],
				hash: false,
				jump: function(obj, first) {
					console.log(obj, first)
				}
			});
		});

		$scope.details = [{
			id: 1,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 5.0,
			state: "未审",
			useless: false
		}, {
			id: 2,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 4.0,
			state: "未审",
			useless: true
		}, {
			id: 3,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: true,
			score: 5.0,
			state: "未审",
			useless: false
		}, {
			id: 4,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 3.8,
			state: "未审",
			useless: false
		}, {
			id: 5,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 2.0,
			state: "未审",
			useless: false
		},{
			id: 6,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 5.0,
			state: "未审",
			useless: false
		}, {
			id: 7,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 4.0,
			state: "未审",
			useless: true
		}, {
			id: 8,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: true,
			score: 5.0,
			state: "未审",
			useless: false
		}, {
			id: 9,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 3.8,
			state: "未审",
			useless: false
		}, {
			id: 10,
			classeval: "goooooood",
			teachereval: "niceeeeeeeee",
			chk: false,
			score: 2.0,
			state: "未审",
			useless: false
		}]
		$scope.detailshow = false;
		$scope.detail = function(x) {
			$scope.detailshow = true;
			console.log(x);
			//			$http({
			//				method:"post",
			//				url:"",
			//				data: ""
			//			}).then(function(res){
			//				console.log(res) ;
			//			},function(err){
			//				console.log(err) ;
			//			})
		}
		$scope.detailhide = function() {
			$scope.detailshow = false;
		}
		$rootScope.detailModal = function(x) {
			//此处应该是根据x.id获取考评的具体细节数据，然后填充至modal中
			//			$http({
			//				method:"post",
			//				url:"",
			//				data:""
			//			}).then(function(res){
			console.log("detailModal")
			var modalInstance = $modal.open({
				title: "调查明细",
				keyboard: true,
				controller: ModalInstanceCtrl,
				resolve: {
					items: function() {
						return $rootScope.stars0;
					}
				},
				windowClass: 'uncheck-Modal',
				template: `
		<div class="layui-text">
			<p class="layui-layer-title">调查明细</p>
			<div>
				<h3>对教员授课实施的评审</h3>
				<table class="layui-table" lay-skin="line">
					<tr>
						<td>1.讲师对所授课程的整体把握程度</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:3 track by $index "></span> 3分
						</td>
					</tr>
					<tr>
						<td>2.讲师在授课时所做的知识点小姐、重点难点总结</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:3 track by $index "></span> 3分
						</td>
					</tr>
					<tr>
						<td>3.讲师授课准备是否充分</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:3 track by $index "></span> 3分
						</td>
					</tr>
					<tr>
						<td>4.讲师对学员的问题是否到位、易于理解</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>5.对教学充满热情，讲课认真、投入</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>6.讲师有无根据大家的学习情况及时给大家做串讲和集中专题辅导</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>7.在授课过程中，是否条理清晰、易于理解</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>8.是否有关于学习方法方面的辅导</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>9.有无及时、准确地解答大家的疑问和调试程序错误</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>10.有无主动地帮助大家发现并解决实现过程中的问题</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
				</table>
			</div>
			<div>
				<h3>对教员学习管理的评审</h3>
				<table class="layui-table" lay-skin="line">
					<tr>
						<td>1.是否有效地进行提升班级学习气氛</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:5 track by $index "></span> 5分
						</td>
					</tr>
					<tr>
						<td>2.讲师的授课精神面貌是否积极、主动</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:2 track by $index "></span> 2分
						</td>
					</tr>
					<tr>
						<td>3.讲师是有有及时针对学员的反馈作出积极、正确的回应</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:2 track by $index "></span> 2分
						</td>
					</tr>
					<tr>
						<td>4.能否经常与大家相互沟通，了解大家的想法、需求</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:2 track by $index "></span> 2分
						</td>
					</tr>
					<tr>
						<td>5.能否维持良好的班级学习气氛</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:2 track by $index "></span> 2分
						</td>
					</tr>
					<tr>
						<td>6.严格要求学生，其言传身教有助于学生治学与做人</td>
						<td>
							<span class="star" ng-repeat="x in stars0 | limitTo:4 track by $index "></span> 4分
						</td>
					</tr>
				</table>
			</div>
			<div>
				<h3>对老师授课过程的建议</h3>
				<textarea class="layui-textarea" name="" rows="" cols="" disabled>对老师授课过程的建议</textarea>
			</div>
			<div>
				<h3>对本班级管理的建议</h3>
				<textarea class="layui-textarea" name="" rows="" cols="" disabled>对老师授课过程的建议</textarea>
			</div>
		</div>
				`
			});
			//			},function(err){
			//				layer.confirm('数据获取失败~', {
			//					icon: 2,
			//					btn: ['好'],
			//					title: '提示'
			//				}, function(index) {
			//					layer.close(index);
			//				});
			//			})

		}
		var ModalInstanceCtrl = function($scope, $modalInstance, items) {
			$rootScope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
		}
		
		
	});
	
});