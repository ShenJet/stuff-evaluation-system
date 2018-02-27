define(['app'], function(app) {
	app.controller('statisticbyyCtrl', function($scope, $http) {

		$scope.year = false;

		layui.use('laydate', function() {
			var laydate = layui.laydate;
			laydate.render({
				elem: '#test3',
				type: 'year',
				theme: '#1E9FFF',
				btns: ['now', 'confirm'],
				ready: function(date) {
					//弹出窗口触发
					console.log(date)
					$scope.year = date.year;
				},
				change: function(value, date, endDate) {
					//点击具体日期/月份触发
					console.log(date)
					$scope.year = date.year;
				}
			});
		})
		$scope.query = function() {
			console.log($scope.year)
			if(!$scope.year) {
				return layer.confirm('请先选择时间', {
					icon: 0,
					btn: ['知道了'],
					title: '提示'
				}, function(index) {
					layer.close(index);
				});
			}
			$http({
				method: "post",
				url: "",
				data: {
					year: $scope.year
				}
			}).then(function(res) {
				console.log(res)
				$scope.title = "天智教育（苏州）学员评教" + $scope.year + ' 年统计表'
				$scope.data = [{
					name: "张三",
					aver_m: 4.6,
					data: [{
						id: 1,
						name: "张三",
						class: "jsd1222",
						totalnum: 28,
						effective_num: 20,
						aver: 4.6,
						date: "2017-08-16"
					}, {
						id: 2,
						name: "张三",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 3,
						name: "张三",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}]
				}, {
					name: "李四",
					aver_m: 4.6,
					data: [{
						id: 1,
						name: "李四",
						class: "jsd1222",
						totalnum: 28,
						effective_num: 20,
						aver: 4.6,
						date: "2017-08-16"
					}, {
						id: 2,
						name: "李四",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 3,
						name: "李四",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}, {
						id: 4,
						name: "李四",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 5,
						name: "李四",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}]

				}, {

					name: "王五",
					aver_m: 4.6,
					data: [{
						id: 1,
						name: "王五",
						class: "jsd1222",
						totalnum: 28,
						effective_num: 20,
						aver: 4.6,
						date: "2017-08-16"
					}, {
						id: 2,
						name: "王五",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 3,
						name: "王五",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}]

				}]
			}, function(err) {
				console.log(err)
				$scope.title = "天智教育（苏州）学员评教" + $scope.year + ' 年统计表'
				$scope.data = [{
					name: "张三",
					aver_m: 4.6,
					data: [{
						id: 1,
						name: "张三",
						class: "jsd1222",
						totalnum: 28,
						effective_num: 20,
						aver: 4.6,
						date: "2017-08-16"
					}, {
						id: 2,
						name: "张三",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 3,
						name: "张三",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}]
				}, {
					name: "李四",
					aver_m: 4.6,
					data: [{
						id: 1,
						name: "李四",
						class: "jsd1222",
						totalnum: 28,
						effective_num: 20,
						aver: 4.6,
						date: "2017-08-16"
					}, {
						id: 2,
						name: "李四",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 3,
						name: "李四",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}, {
						id: 4,
						name: "李四",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 5,
						name: "李四",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}]

				}, {

					name: "王五",
					aver_m: 4.6,
					data: [{
						id: 1,
						name: "王五",
						class: "jsd1222",
						totalnum: 28,
						effective_num: 20,
						aver: 4.6,
						date: "2017-08-16"
					}, {
						id: 2,
						name: "王五",
						class: "jsd1222",
						totalnum: 23,
						effective_num: 20,
						aver: 4.8,
						date: "2017-08-13"
					}, {
						id: 3,
						name: "王五",
						class: "jsd1222",
						totalnum: 18,
						effective_num: 15,
						aver: 5,
						date: "2017-07-16"
					}]

				}]
				return layer.msg('数据获取失败~');
			})

		}
	});
});