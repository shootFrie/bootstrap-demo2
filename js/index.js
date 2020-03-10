var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
	'November', 'December'
];
var config = {
	type: 'line',
	data: {
		//折线图需要为每个数据点设置一标签。这是显示在X轴上。
		labels: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
		//数据集（y轴数据范围随数据集合中的data中的最大或最小数据而动态改变的）
		datasets: [{
				label: "转载量",
				backgroundColor: "#f60", //背景填充色
				borderColor: "red",//路径颜色
				data: [102, 203, 304, 443, 504, 565, 706],
				pointBackgroundColor: "#36A2EB", //数据点颜色
                pointBorderColor: "#fff", //数据点边框颜色
				fill: false,
				borderfill:true
			},
			{
				label: "浏览量",
				fill: false,
				backgroundColor: "#f60",
				borderColor: "rgba(151,187,205,1)",
				data: [102, 333, 230, 432, 452, 534, 999],
			}
		]
	},
	options: {
		responsive: true,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true
		}
	}
};

window.onload = function() {
	var ctx = document.getElementById('canvas').getContext('2d');
	window.myLine = new Chart(ctx, config);
};
