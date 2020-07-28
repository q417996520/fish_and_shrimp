var app = getApp()
Page({
	data: {
		hidden:false,
		curNav:1,
		curIndex:0,
		cart:[],
		cartTotal:0,
		navList:[
			{
				id:1,
				name:'热销菜品'
			},
			{
				id:2,
				name:'热菜'
			},
			{
				id:3,
				name:'凉菜'
			},
			{
				id:4,
				name:'套餐'
			},
			{
				id:5,
				name:'热销菜品'
			},
			{
				id:6,
				name:'热菜'
			},
			{
				id:7,
				name:'凉菜'
			},
			{
				id:8,
				name:'套餐'
			}
		],
		dishesList:[
			[
				{
					name:"红烧肉",
					price:38,
					num:1,
					pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595870499427&di=a4bdde7fb0f5e8cb143b4fa56738bdf6&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D1179872664%2C290201490%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D854",
					id:1
				},
				{
					name:"宫保鸡丁",
					price:58,
					num:1,
					id:29
				},
				{
					name:"水煮鱼",
					price:88,
					num:1,
					id:2
				}
			],
			[
				{
					name:"小炒日本豆腐",
					price:18,
					num:1,
					id:3
				},
				{
					name:"烤鱼",
					price:58,
					num:1,
					id:4
				}
			],
			[
				{
					name:"大拌菜",
					price:18,
					num:1,
					id:5
				},
				{
					name:"川北凉粉",
					price:8,
					num:1,
					id:6
				}
			],
			[]
		],
		cart: {
			count: 0,
			total: 0,
			list: {}
		},
	},
	loadingChange () {
		setTimeout(() => {
			this.setData({
				hidden:true
			})
		},2000)
	},
	selectNav (event) {
		let id = event.target.dataset.id,
			index = parseInt(event.target.dataset.index);
			self = this;
		this.setData({
			curNav:id,
			curIndex:index
		})
	},
	// 选择菜品
	tapAddCart: function (e) {
		console.log(e);
		this.addCart(e.target.dataset.id);
	},
	tapReduceCart: function (e) {
		this.reduceCart(e.target.dataset.id);
	},
	addCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		this.data.cart.list[id] = num + 1;
		this.countCart();
	},
	reduceCart: function (id) {
		var num = this.data.cart.list[id] || 0;
		if (num <= 1) {
			delete this.data.cart.list[id];
		} else {
			this.data.cart.list[id] = num - 1;
		}
		this.countCart();
	},
	countCart: function () {
		var count = 0,
			total = 0;
		for (var id in this.data.cart.list) {
			var goods = this.data.goods[id];
			count += this.data.cart.list[id];
			total += goods.price * this.data.cart.list[id];
		}
		this.data.cart.count = count;
		this.data.cart.total = total;
		this.setData({
			cart: this.data.cart
		});
	},
	follow: function () {
		this.setData({
			followed: !this.data.followed
		});
	},
	onGoodsScroll: function (e) {
		if (e.detail.scrollTop > 10 && !this.data.scrollDown) {
			this.setData({
				scrollDown: true
			});
		} else if (e.detail.scrollTop < 10 && this.data.scrollDown) {
			this.setData({
				scrollDown: false
			});
		}

		var scale = e.detail.scrollWidth / 570,
			scrollTop = e.detail.scrollTop / scale,
			h = 0,
			classifySeleted,
			len = this.data.goodsList.length;
		this.data.goodsList.forEach(function (classify, i) {
			var _h = 70 + classify.goods.length * (46 * 3 + 20 * 2);
			if (scrollTop >= h - 100 / scale) {
				classifySeleted = classify.id;
			}
			h += _h;
		});
		this.setData({
			classifySeleted: classifySeleted
		});
	},
	tapClassify: function (e) {
		var id = e.target.dataset.id;
		this.setData({
			classifyViewed: id
		});
		var self = this;
		setTimeout(function () {
			self.setData({
				classifySeleted: id
			});
		}, 100);
	},
	showCartDetail: function () {
		this.setData({
			showCartDetail: !this.data.showCartDetail
		});
	},
	hideCartDetail: function () {
		this.setData({
			showCartDetail: false
		});
	},
	submit: function (e) {
		server.sendTemplate(e.detail.formId, null, function (res) {
			if (res.data.errorcode == 0) {
				wx.showModal({
					showCancel: false,
					title: '恭喜',
					content: '订单发送成功！下订单过程顺利完成，本例不再进行后续订单相关的功能。',
					success: function(res) {
						if (res.confirm) {
							wx.navigateBack();
						}
					}
				})
			}
		}, function (res) {
			console.log(res)
		});
	},
	onLoad () {
		this.loadingChange()
	}
})